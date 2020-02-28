// Copyright 2015 Keybase, Inc. All rights reserved. Use of
// this source code is governed by the included BSD license.

package libkb

import (
	"bytes"
	"io"

	"github.com/keybase/client/go/kbcrypto"
	"github.com/keybase/client/go/logger"
	"github.com/keybase/saltpack"
)

// SaltpackVerifyContext is context for engine calls
type SaltpackVerifyContext interface {
	GetLog() logger.Logger
}

// Wraps kbcrypto.Verification error with libkb.VerificationError. You should
// expect a libkb.VerificationError if exposing the error to the GUI.
func getVerificationErrorWithStatusCode(kberr *kbcrypto.VerificationError) (err VerificationError) {
	err.Cause.Err = kberr.Cause
	switch err.Cause.Err.(type) {
	case APINetError:
		err.Cause.StatusCode = SCAPINetworkError
	case saltpack.ErrNoSenderKey:
		err.Cause.StatusCode = SCDecryptionKeyNotFound
	case saltpack.ErrWrongMessageType:
		err.Cause.StatusCode = SCWrongType
	}
	return err
}

func SaltpackVerify(g SaltpackVerifyContext, source io.Reader, sink io.WriteCloser, checkSender func(saltpack.SigningPublicKey) error) (err error) {
	defer func() {
		if kbErr, ok := err.(kbcrypto.VerificationError); ok {
			err = getVerificationErrorWithStatusCode(&kbErr)
		}
	}()

	sc, newSource, err := ClassifyStream(source)
	if err != nil {
		return err
	}
	if sc.Format != CryptoMessageFormatSaltpack {
		return WrongCryptoFormatError{
			Wanted:    CryptoMessageFormatSaltpack,
			Received:  sc.Format,
			Operation: "verify",
		}
	}

	if sc.Type != CryptoMessageTypeAttachedSignature {
		// TODO: If/when saltpack repo updates WrongMessageType to have public
		// fields, set to
		//    Wanted: saltpack.MessageType(CryptoMessageTypeAttachedSignature),
		//    Received: saltpack.MessageType(sc.Type.()).
		// Currently the fields are not used.
		return kbcrypto.NewVerificationError(saltpack.ErrWrongMessageType{})
	}

	source = newSource
	kr := echoKeyring{}

	var skey saltpack.SigningPublicKey
	var vs io.Reader
	var brand string
	if sc.Armored {
		skey, vs, brand, err = saltpack.NewDearmor62VerifyStream(saltpack.CheckKnownMajorVersion, source, kr)
	} else {
		skey, vs, err = saltpack.NewVerifyStream(saltpack.CheckKnownMajorVersion, source, kr)
	}
	if err != nil {
		g.GetLog().Debug("saltpack.NewDearmor62VerifyStream error: %s", err)
		return kbcrypto.NewVerificationError(err)
	}

	if checkSender != nil {
		if err = checkSender(skey); err != nil {
			return kbcrypto.NewVerificationError(err)
		}
	}

	n, err := io.Copy(sink, vs)
	if err != nil {
		return kbcrypto.NewVerificationError(err)
	}

	if sc.Armored {
		if err = checkSaltpackBrand(brand); err != nil {
			return kbcrypto.NewVerificationError(err)
		}
	}

	g.GetLog().Debug("Verify: read %d bytes", n)

	if err := sink.Close(); err != nil {
		return kbcrypto.NewVerificationError(err)
	}
	return nil
}

func SaltpackVerifyDetached(g SaltpackVerifyContext, message io.Reader, signature []byte, checkSender func(saltpack.SigningPublicKey) error) (err error) {
	defer func() {
		if kbErr, ok := err.(kbcrypto.VerificationError); ok {
			err = getVerificationErrorWithStatusCode(&kbErr)
		}
	}()

	sc, _, err := ClassifyStream(bytes.NewReader(signature))
	if err != nil {
		return err
	}
	if sc.Format != CryptoMessageFormatSaltpack {
		return WrongCryptoFormatError{
			Wanted:    CryptoMessageFormatSaltpack,
			Received:  sc.Format,
			Operation: "verify detached",
		}
	}

	kr := echoKeyring{}

	var skey saltpack.SigningPublicKey
	if sc.Armored {
		var brand string
		skey, brand, err = saltpack.Dearmor62VerifyDetachedReader(saltpack.CheckKnownMajorVersion, message, string(signature), kr)
		if err != nil {
			g.GetLog().Debug("saltpack.Dearmor62VerifyDetachedReader error: %s", err)
			return kbcrypto.NewVerificationError(err)
		}
		if err = checkSaltpackBrand(brand); err != nil {
			return kbcrypto.NewVerificationError(err)
		}
	} else {
		skey, err = saltpack.VerifyDetachedReader(saltpack.CheckKnownMajorVersion, message, signature, kr)
		if err != nil {
			g.GetLog().Debug("saltpack.VerifyDetachedReader error: %s", err)
			return kbcrypto.NewVerificationError(err)
		}
	}

	if checkSender != nil {
		if err = checkSender(skey); err != nil {
			return kbcrypto.NewVerificationError(err)
		}
	}

	return nil
}

type echoKeyring struct {
	Contextified
}

func (e echoKeyring) LookupSigningPublicKey(kid []byte) saltpack.SigningPublicKey {
	var k kbcrypto.NaclSigningKeyPublic
	copy(k[:], kid)
	return saltSignerPublic{key: k}
}
