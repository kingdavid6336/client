/* eslint-disable */

// This file is auto-generated by client/protocol/Makefile.
import {getEngine as engine} from '@/engine/require'
import * as Keybase1 from './rpc-gen'
export {Keybase1}
export type Bool = boolean
export type Boolean = boolean
export type Bytes = Uint8Array
export type Double = number
export type Int = number
export type Int64 = number
export type Long = number
export type String = string
export type Uint = number
export type Uint64 = number
type WaitingKey = string | Array<string>
type SimpleError = {code?: number; desc?: string}
export type IncomingErrorCallback = (err?: SimpleError | null) => void

export type MessageTypes = {
  'stellar.1.local.deleteWalletAccountLocal': {
    inParam: {readonly accountID: AccountID; readonly userAcknowledged: String}
    outParam: void
  }
  'stellar.1.local.getWalletAccountSecretKeyLocal': {
    inParam: {readonly accountID: AccountID}
    outParam: SecretKey
  }
  'stellar.1.local.getWalletAccountsLocal': {
    inParam: undefined
    outParam: Array<WalletAccountLocal> | null
  }
  'stellar.1.local.hasAcceptedDisclaimerLocal': {
    inParam: undefined
    outParam: Bool
  }
  'stellar.1.notify.accountDetailsUpdate': {
    inParam: {readonly accountID: AccountID; readonly account: WalletAccountLocal}
    outParam: void
  }
  'stellar.1.notify.accountsUpdate': {
    inParam: {readonly accounts?: Array<WalletAccountLocal> | null}
    outParam: void
  }
  'stellar.1.notify.paymentNotification': {
    inParam: {readonly accountID: AccountID; readonly paymentID: PaymentID}
    outParam: void
  }
  'stellar.1.notify.paymentStatusNotification': {
    inParam: {readonly accountID: AccountID; readonly paymentID: PaymentID}
    outParam: void
  }
  'stellar.1.notify.pendingPaymentsUpdate': {
    inParam: {readonly accountID: AccountID; readonly pending?: Array<PaymentOrErrorLocal> | null}
    outParam: void
  }
  'stellar.1.notify.recentPaymentsUpdate': {
    inParam: {readonly accountID: AccountID; readonly firstPage: PaymentsPageLocal}
    outParam: void
  }
  'stellar.1.notify.requestStatusNotification': {
    inParam: {readonly reqID: KeybaseRequestID}
    outParam: void
  }
  'stellar.1.ui.paymentReviewed': {
    inParam: {readonly msg: UIPaymentReviewed}
    outParam: void
  }
}

export enum AccountBundleVersion {
  v1 = 1,
  v2 = 2,
  v3 = 3,
  v4 = 4,
  v5 = 5,
  v6 = 6,
  v7 = 7,
  v8 = 8,
  v9 = 9,
  v10 = 10,
}

export enum AccountMode {
  none = 0,
  user = 1,
  mobile = 2,
}

export enum AdvancedBanner {
  noBanner = 0,
  senderBanner = 1,
  receiverBanner = 2,
}

export enum BalanceDelta {
  none = 0,
  increase = 1,
  decrease = 2,
}

export enum BundleVersion {
  v1 = 1,
  v2 = 2,
  v3 = 3,
  v4 = 4,
  v5 = 5,
  v6 = 6,
  v7 = 7,
  v8 = 8,
  v9 = 9,
  v10 = 10,
}

export enum ParticipantType {
  none = 0,
  keybase = 1,
  stellar = 2,
  sbs = 3,
  ownaccount = 4,
}

export enum PaymentStatus {
  none = 0,
  pending = 1,
  claimable = 2,
  completed = 3,
  error = 4,
  unknown = 5,
  canceled = 6,
}

export enum PaymentStrategy {
  none = 0,
  direct = 1,
  relay = 2,
}

export enum PaymentSummaryType {
  none = 0,
  stellar = 1,
  direct = 2,
  relay = 3,
}

export enum PublicNoteType {
  none = 0,
  text = 1,
  id = 2,
  hash = 3,
  return = 4,
}

export enum RelayDirection {
  claim = 0,
  yank = 1,
}

export enum RequestStatus {
  ok = 0,
  canceled = 1,
  done = 2,
}

export enum TransactionStatus {
  none = 0,
  pending = 1,
  success = 2,
  errorTransient = 3,
  errorPermanent = 4,
}
export type AccountAssetLocal = {readonly name: String; readonly assetCode: String; readonly issuerName: String; readonly issuerAccountID: String; readonly issuerVerifiedDomain: String; readonly balanceTotal: String; readonly balanceAvailableToSend: String; readonly worthCurrency: String; readonly worth: String; readonly availableToSendWorth: String; readonly reserves?: Array<AccountReserve> | null; readonly desc: String; readonly infoUrl: String; readonly infoUrlText: String; readonly showDepositButton: Boolean; readonly depositButtonText: String; readonly showWithdrawButton: Boolean; readonly withdrawButtonText: String}
export type AccountBundle = {readonly prev: Hash; readonly ownHash: Hash; readonly accountID: AccountID; readonly signers?: Array<SecretKey> | null}
export type AccountBundleSecretUnsupported = {}
export type AccountBundleSecretV1 = {readonly accountID: AccountID; readonly signers?: Array<SecretKey> | null}
export type AccountBundleSecretVersioned = {version: AccountBundleVersion.v1; v1: AccountBundleSecretV1} | {version: AccountBundleVersion.v2; v2: AccountBundleSecretUnsupported} | {version: AccountBundleVersion.v3; v3: AccountBundleSecretUnsupported} | {version: AccountBundleVersion.v4; v4: AccountBundleSecretUnsupported} | {version: AccountBundleVersion.v5; v5: AccountBundleSecretUnsupported} | {version: AccountBundleVersion.v6; v6: AccountBundleSecretUnsupported} | {version: AccountBundleVersion.v7; v7: AccountBundleSecretUnsupported} | {version: AccountBundleVersion.v8; v8: AccountBundleSecretUnsupported} | {version: AccountBundleVersion.v9; v9: AccountBundleSecretUnsupported} | {version: AccountBundleVersion.v10; v10: AccountBundleSecretUnsupported}
export type AccountDetails = {readonly accountID: AccountID; readonly seqno: String; readonly balances?: Array<Balance> | null; readonly subentryCount: Int; readonly available: String; readonly reserves?: Array<AccountReserve> | null; readonly readTransactionID?: TransactionID | null; readonly unreadPayments: Int; readonly displayCurrency: String; readonly inflationDestination?: AccountID | null}
export type AccountID = String
export type AccountReserve = {readonly amount: String; readonly description: String}
export type AirdropDetails = {readonly isPromoted: Boolean; readonly details: String; readonly disclaimer: String}
export type AirdropQualification = {readonly title: String; readonly subtitle: String; readonly valid: Boolean}
export type AirdropState = String
export type AirdropStatus = {readonly state: AirdropState; readonly rows?: Array<AirdropQualification> | null}
export type Asset = {readonly type: String; readonly code: String; readonly issuer: String; readonly verifiedDomain: String; readonly issuerName: String; readonly desc: String; readonly infoUrl: String; readonly infoUrlText: String; readonly showDepositButton: Boolean; readonly depositButtonText: String; readonly showWithdrawButton: Boolean; readonly withdrawButtonText: String; readonly withdrawType: String; readonly transferServer: String; readonly authEndpoint: String; readonly depositReqAuth: Boolean; readonly withdrawReqAuth: Boolean; readonly useSep24: Boolean}
export type AssetActionResultLocal = {readonly externalUrl?: String | null; readonly messageFromAnchor?: String | null}
export type AssetCode = String
export type AssetListResult = {readonly assets?: Array<Asset> | null; readonly totalCount: Int}
export type AutoClaim = {readonly kbTxID: KeybaseTransactionID}
export type Balance = {readonly asset: Asset; readonly amount: String; readonly limit: String; readonly isAuthorized: Boolean}
export type BatchPaymentArg = {readonly recipient: String; readonly amount: String; readonly message: String}
export type BatchPaymentError = {readonly message: String; readonly code: Int}
export type BatchPaymentResult = {readonly username: String; readonly startTime: TimeMs; readonly submittedTime: TimeMs; readonly endTime: TimeMs; readonly txID: TransactionID; readonly status: PaymentStatus; readonly statusDescription: String; readonly error?: BatchPaymentError | null}
export type BatchResultLocal = {readonly startTime: TimeMs; readonly preparedTime: TimeMs; readonly allSubmittedTime: TimeMs; readonly allCompleteTime: TimeMs; readonly endTime: TimeMs; readonly payments?: Array<BatchPaymentResult> | null; readonly overallDurationMs: TimeMs; readonly prepareDurationMs: TimeMs; readonly submitDurationMs: TimeMs; readonly waitPaymentsDurationMs: TimeMs; readonly waitChatDurationMs: TimeMs; readonly countSuccess: Int; readonly countDirect: Int; readonly countRelay: Int; readonly countError: Int; readonly countPending: Int; readonly avgDurationMs: TimeMs; readonly avgSuccessDurationMs: TimeMs; readonly avgDirectDurationMs: TimeMs; readonly avgRelayDurationMs: TimeMs; readonly avgErrorDurationMs: TimeMs}
export type BuildPaymentID = String
export type BuildPaymentResLocal = {readonly readyToReview: Boolean; readonly from: AccountID; readonly toErrMsg: String; readonly amountErrMsg: String; readonly secretNoteErrMsg: String; readonly publicMemoErrMsg: String; readonly publicMemoOverride: String; readonly worthDescription: String; readonly worthInfo: String; readonly worthAmount: String; readonly worthCurrency: String; readonly displayAmountXLM: String; readonly displayAmountFiat: String; readonly sendingIntentionXLM: Boolean; readonly amountAvailable: String; readonly banners?: Array<SendBannerLocal> | null}
export type BuildRequestResLocal = {readonly readyToRequest: Boolean; readonly toErrMsg: String; readonly amountErrMsg: String; readonly secretNoteErrMsg: String; readonly worthDescription: String; readonly worthInfo: String; readonly displayAmountXLM: String; readonly displayAmountFiat: String; readonly sendingIntentionXLM: Boolean; readonly banners?: Array<SendBannerLocal> | null}
export type Bundle = {readonly revision: BundleRevision; readonly prev: Hash; readonly ownHash: Hash; readonly accounts?: Array<BundleEntry> | null; readonly accountBundles?: {[key: string]: AccountBundle} | null}
export type BundleEntry = {readonly accountID: AccountID; readonly mode: AccountMode; readonly isPrimary: Boolean; readonly name: String; readonly acctBundleRevision: BundleRevision; readonly encAcctBundleHash: Hash}
export type BundleRevision = Uint64
export type BundleSecretEntryV2 = {readonly accountID: AccountID; readonly name: String}
export type BundleSecretUnsupported = {}
export type BundleSecretV2 = {readonly visibleHash: Hash; readonly accounts?: Array<BundleSecretEntryV2> | null}
export type BundleSecretVersioned = {version: BundleVersion.v1; v1: BundleSecretUnsupported} | {version: BundleVersion.v2; v2: BundleSecretV2} | {version: BundleVersion.v3; v3: BundleSecretUnsupported} | {version: BundleVersion.v4; v4: BundleSecretUnsupported} | {version: BundleVersion.v5; v5: BundleSecretUnsupported} | {version: BundleVersion.v6; v6: BundleSecretUnsupported} | {version: BundleVersion.v7; v7: BundleSecretUnsupported} | {version: BundleVersion.v8; v8: BundleSecretUnsupported} | {version: BundleVersion.v9; v9: BundleSecretUnsupported} | {version: BundleVersion.v10; v10: BundleSecretUnsupported}
export type BundleVisibleEntryV2 = {readonly accountID: AccountID; readonly mode: AccountMode; readonly isPrimary: Boolean; readonly acctBundleRevision: BundleRevision; readonly encAcctBundleHash: Hash}
export type BundleVisibleV2 = {readonly revision: BundleRevision; readonly prev: Hash; readonly accounts?: Array<BundleVisibleEntryV2> | null}
export type ChatConversationID = String
export type ClaimSummary = {readonly txID: TransactionID; readonly txStatus: TransactionStatus; readonly txErrMsg: String; readonly dir: RelayDirection; readonly toStellar: AccountID; readonly to: Keybase1.UserVersion}
export type CurrencyLocal = {readonly description: String; readonly code: OutsideCurrencyCode; readonly symbol: String; readonly name: String}
export type CurrencySymbol = {readonly symbol: String; readonly ambigious: Boolean; readonly postfix: Boolean}
export type DetailsPlusPayments = {readonly details: AccountDetails; readonly recentPayments: PaymentsPage; readonly pendingPayments?: Array<PaymentSummary> | null}
export type DirectOp = {readonly noteB64: String}
export type EncryptedAccountBundle = {readonly v: Int; readonly e: Bytes; readonly n: Keybase1.BoxNonce; readonly gen: Keybase1.PerUserKeyGeneration}
export type EncryptedBundle = {readonly v: Int; readonly e: Bytes; readonly n: Keybase1.BoxNonce; readonly gen: Keybase1.PerUserKeyGeneration}
export type EncryptedNote = {readonly v: Int; readonly e: Bytes; readonly n: Keybase1.BoxNonce; readonly sender: NoteRecipient; readonly recipient?: NoteRecipient | null}
export type EncryptedRelaySecret = {readonly v: Int; readonly e: Bytes; readonly n: Keybase1.BoxNonce; readonly gen: Keybase1.PerTeamKeyGeneration}
export type Hash = Bytes
export type InflationDestinationResultLocal = {readonly destination?: AccountID | null; readonly knownDestination?: PredefinedInflationDestination | null; readonly self: Boolean}
export type InflationDestinationTag = String
export type KeybaseRequestID = String
export type KeybaseTransactionID = String
export type LookupResultCLILocal = {readonly accountID: AccountID; readonly username?: String | null}
export type NetworkOptions = {readonly baseFee: Uint64}
export type NoteContents = {readonly note: String; readonly stellarID: TransactionID}
export type NoteRecipient = {readonly user: Keybase1.UserVersion; readonly pukGen: Keybase1.PerUserKeyGeneration}
export type OutsideCurrencyCode = String
export type OutsideCurrencyDefinition = {readonly name: String; readonly symbol: CurrencySymbol}
export type OutsideExchangeRate = {readonly currency: OutsideCurrencyCode; readonly rate: String}
export type OwnAccountCLILocal = {readonly accountID: AccountID; readonly isPrimary: Boolean; readonly name: String; readonly balance?: Array<Balance> | null; readonly exchangeRate?: OutsideExchangeRate | null; readonly accountMode: AccountMode}
export type PageCursor = {readonly horizonCursor: String; readonly directCursor: String; readonly relayCursor: String}
export type PartnerUrl = {readonly url: String; readonly title: String; readonly description: String; readonly iconFilename: String; readonly adminOnly: Boolean; readonly canPurchase: Boolean; readonly extra: String}
export type PathPaymentPost = {readonly fromDeviceID: Keybase1.DeviceID; readonly to?: Keybase1.UserVersion | null; readonly noteB64: String; readonly signedTransaction: String; readonly quickReturn: Boolean; readonly chatConversationID?: ChatConversationID | null}
export type PaymentCLILocal = {readonly txID: TransactionID; readonly time: TimeMs; readonly status: String; readonly statusDetail: String; readonly amount: String; readonly asset: Asset; readonly displayAmount?: String | null; readonly displayCurrency?: String | null; readonly sourceAmountMax: String; readonly sourceAmountActual: String; readonly sourceAsset: Asset; readonly isAdvanced: Boolean; readonly summaryAdvanced: String; readonly operations?: Array<String> | null; readonly fromStellar: AccountID; readonly toStellar?: AccountID | null; readonly fromUsername?: String | null; readonly toUsername?: String | null; readonly toAssertion?: String | null; readonly note: String; readonly noteErr: String; readonly unread: Boolean; readonly publicNote: String; readonly publicNoteType: String; readonly feeChargedDescription: String}
export type PaymentDetails = {readonly summary: PaymentSummary; readonly memo: String; readonly memoType: String; readonly externalTxURL: String; readonly feeCharged: String; readonly pathIntermediate?: Array<Asset> | null}
export type PaymentDetailsLocal = {readonly summary: PaymentLocal; readonly details: PaymentDetailsOnlyLocal}
export type PaymentDetailsOnlyLocal = {readonly publicNote: String; readonly publicNoteType: String; readonly externalTxURL: String; readonly feeChargedDescription: String; readonly pathIntermediate?: Array<Asset> | null}
export type PaymentDirectPost = {readonly fromDeviceID: Keybase1.DeviceID; readonly to?: Keybase1.UserVersion | null; readonly displayAmount: String; readonly displayCurrency: String; readonly noteB64: String; readonly signedTransaction: String; readonly quickReturn: Boolean; readonly chatConversationID?: ChatConversationID | null; readonly batchID: String}
export type PaymentID = String
export type PaymentLocal = {readonly id: PaymentID; readonly txID: TransactionID; readonly time: TimeMs; readonly statusSimplified: PaymentStatus; readonly statusDescription: String; readonly statusDetail: String; readonly showCancel: Boolean; readonly amountDescription: String; readonly delta: BalanceDelta; readonly worth: String; readonly worthAtSendTime: String; readonly issuerDescription: String; readonly issuerAccountID?: AccountID | null; readonly fromType: ParticipantType; readonly toType: ParticipantType; readonly assetCode: String; readonly fromAccountID: AccountID; readonly fromAccountName: String; readonly fromUsername: String; readonly toAccountID?: AccountID | null; readonly toAccountName: String; readonly toUsername: String; readonly toAssertion: String; readonly originalToAssertion: String; readonly note: String; readonly noteErr: String; readonly sourceAmountMax: String; readonly sourceAmountActual: String; readonly sourceAsset: Asset; readonly sourceConvRate: String; readonly isAdvanced: Boolean; readonly summaryAdvanced: String; readonly operations?: Array<String> | null; readonly unread: Boolean; readonly batchID: String; readonly fromAirdrop: Boolean; readonly isInflation: Boolean; readonly inflationSource?: String | null; readonly trustline?: PaymentTrustlineLocal | null}
export type PaymentMultiPost = {readonly fromDeviceID: Keybase1.DeviceID; readonly signedTransaction: String; readonly operations?: Array<PaymentOp> | null; readonly batchID: String}
export type PaymentNotificationMsg = {readonly accountID: AccountID; readonly paymentID: PaymentID}
export type PaymentOp = {readonly to?: Keybase1.UserVersion | null; readonly direct?: DirectOp | null; readonly relay?: RelayOp | null}
export type PaymentOrErrorCLILocal = {readonly payment?: PaymentCLILocal | null; readonly err?: String | null}
export type PaymentOrErrorLocal = {readonly payment?: PaymentLocal | null; readonly err?: String | null}
export type PaymentPath = {readonly sourceAmount: String; readonly sourceAmountMax: String; readonly sourceAsset: Asset; readonly path?: Array<Asset> | null; readonly destinationAmount: String; readonly destinationAsset: Asset; readonly sourceInsufficientBalance: String}
export type PaymentPathLocal = {readonly sourceDisplay: String; readonly sourceMaxDisplay: String; readonly destinationDisplay: String; readonly exchangeRate: String; readonly amountError: String; readonly destinationAccount: AccountID; readonly fullPath: PaymentPath}
export type PaymentPathQuery = {readonly source: AccountID; readonly destination: AccountID; readonly sourceAsset: Asset; readonly destinationAsset: Asset; readonly amount: String}
export type PaymentRelayPost = {readonly fromDeviceID: Keybase1.DeviceID; readonly to?: Keybase1.UserVersion | null; readonly toAssertion: String; readonly relayAccount: AccountID; readonly teamID: Keybase1.TeamID; readonly displayAmount: String; readonly displayCurrency: String; readonly boxB64: String; readonly signedTransaction: String; readonly quickReturn: Boolean; readonly chatConversationID?: ChatConversationID | null; readonly batchID: String}
export type PaymentResult = {readonly senderAccountID: AccountID; readonly keybaseID: KeybaseTransactionID; readonly stellarID: TransactionID; readonly pending: Boolean}
export type PaymentStatusMsg = {readonly accountID: AccountID; readonly kbTxID: KeybaseTransactionID; readonly txID: TransactionID}
export type PaymentSummary = {typ: PaymentSummaryType.stellar; stellar: PaymentSummaryStellar} | {typ: PaymentSummaryType.direct; direct: PaymentSummaryDirect} | {typ: PaymentSummaryType.relay; relay: PaymentSummaryRelay} | {typ: PaymentSummaryType.none}
export type PaymentSummaryDirect = {readonly kbTxID: KeybaseTransactionID; readonly txID: TransactionID; readonly txStatus: TransactionStatus; readonly txErrMsg: String; readonly fromStellar: AccountID; readonly from: Keybase1.UserVersion; readonly fromDeviceID: Keybase1.DeviceID; readonly toStellar: AccountID; readonly to?: Keybase1.UserVersion | null; readonly amount: String; readonly asset: Asset; readonly displayAmount?: String | null; readonly displayCurrency?: String | null; readonly noteB64: String; readonly fromDisplayAmount: String; readonly fromDisplayCurrency: String; readonly toDisplayAmount: String; readonly toDisplayCurrency: String; readonly ctime: TimeMs; readonly rtime: TimeMs; readonly cursorToken: String; readonly unread: Boolean; readonly fromPrimary: Boolean; readonly batchID: String; readonly fromAirdrop: Boolean; readonly sourceAmountMax: String; readonly sourceAmountActual: String; readonly sourceAsset: Asset}
export type PaymentSummaryRelay = {readonly kbTxID: KeybaseTransactionID; readonly txID: TransactionID; readonly txStatus: TransactionStatus; readonly txErrMsg: String; readonly fromStellar: AccountID; readonly from: Keybase1.UserVersion; readonly fromDeviceID: Keybase1.DeviceID; readonly to?: Keybase1.UserVersion | null; readonly toAssertion: String; readonly relayAccount: AccountID; readonly amount: String; readonly displayAmount?: String | null; readonly displayCurrency?: String | null; readonly ctime: TimeMs; readonly rtime: TimeMs; readonly boxB64: String; readonly teamID: Keybase1.TeamID; readonly claim?: ClaimSummary | null; readonly cursorToken: String; readonly batchID: String; readonly fromAirdrop: Boolean}
export type PaymentSummaryStellar = {readonly txID: TransactionID; readonly from: AccountID; readonly to: AccountID; readonly amount: String; readonly asset: Asset; readonly ctime: TimeMs; readonly cursorToken: String; readonly unread: Boolean; readonly isInflation: Boolean; readonly inflationSource?: String | null; readonly sourceAmountMax: String; readonly sourceAmountActual: String; readonly sourceAsset: Asset; readonly isAdvanced: Boolean; readonly summaryAdvanced: String; readonly operations?: Array<String> | null; readonly trustline?: PaymentTrustlineLocal | null}
export type PaymentTrustlineLocal = {readonly asset: Asset; readonly remove: Boolean}
export type PaymentsPage = {readonly payments?: Array<PaymentSummary> | null; readonly cursor?: PageCursor | null; readonly oldestUnread?: TransactionID | null}
export type PaymentsPageLocal = {readonly payments?: Array<PaymentOrErrorLocal> | null; readonly cursor?: PageCursor | null; readonly oldestUnread?: PaymentID | null}
export type PredefinedInflationDestination = {readonly tag: InflationDestinationTag; readonly name: String; readonly recommended: Boolean; readonly accountID: AccountID; readonly url: String}
export type RecipientTrustlinesLocal = {readonly trustlines?: Array<Balance> | null; readonly recipientType: ParticipantType}
export type RelayClaimPost = {readonly keybaseID: KeybaseTransactionID; readonly dir: RelayDirection; readonly signedTransaction: String; readonly autoClaimToken?: String | null}
export type RelayClaimResult = {readonly claimStellarID: TransactionID}
export type RelayContents = {readonly stellarID: TransactionID; readonly sk: SecretKey; readonly note: String}
export type RelayOp = {readonly toAssertion: String; readonly relayAccount: AccountID; readonly teamID: Keybase1.TeamID; readonly boxB64: String}
export type RequestDetails = {readonly id: KeybaseRequestID; readonly fromUser: Keybase1.UserVersion; readonly toUser?: Keybase1.UserVersion | null; readonly toAssertion: String; readonly amount: String; readonly asset?: Asset | null; readonly currency?: OutsideCurrencyCode | null; readonly fromDisplayAmount: String; readonly fromDisplayCurrency: String; readonly toDisplayAmount: String; readonly toDisplayCurrency: String; readonly fundingKbTxID: KeybaseTransactionID; readonly status: RequestStatus}
export type RequestDetailsLocal = {readonly id: KeybaseRequestID; readonly fromAssertion: String; readonly fromCurrentUser: Boolean; readonly toUserType: ParticipantType; readonly toAssertion: String; readonly amount: String; readonly asset?: Asset | null; readonly currency?: OutsideCurrencyCode | null; readonly amountDescription: String; readonly worthAtRequestTime: String; readonly status: RequestStatus}
export type RequestPost = {readonly toUser?: Keybase1.UserVersion | null; readonly toAssertion: String; readonly amount: String; readonly asset?: Asset | null; readonly currency?: OutsideCurrencyCode | null}
export type RequestStatusMsg = {readonly reqID: KeybaseRequestID}
export type SecretKey = String
export type SendAssetChoiceLocal = {readonly asset: Asset; readonly enabled: Boolean; readonly left: String; readonly right: String; readonly subtext: String}
export type SendBannerLocal = {readonly level: String; readonly message: String; readonly proofsChanged: Boolean; readonly offerAdvancedSendForm: AdvancedBanner}
export type SendPaymentResLocal = {readonly kbTxID: KeybaseTransactionID; readonly pending: Boolean; readonly jumpToChat: String}
export type SendResultCLILocal = {readonly kbTxID: KeybaseTransactionID; readonly txID: TransactionID}
export type SignXdrResult = {readonly singedTx: String; readonly accountID: AccountID; readonly submitErr?: String | null; readonly submitTxID?: TransactionID | null}
export type StaticConfig = {readonly paymentNoteMaxLength: Int; readonly requestNoteMaxLength: Int; readonly publicMemoMaxLength: Int}
export type StellarServerDefinitions = {readonly revision: Int; readonly currencies?: {[key: string]: OutsideCurrencyDefinition} | null}
export type SubmitMultiRes = {readonly txID: TransactionID}
export type TimeMs = Long
export type TimeboundsRecommendation = {readonly timeNow: Keybase1.UnixTime; readonly timeout: Int64}
export type TransactionID = String
export type Trustline = {readonly assetCode: AssetCode; readonly issuer: AccountID}
export type TxDisplaySummary = {readonly source: AccountID; readonly fee: Int; readonly memo: String; readonly memoType: String; readonly operations?: Array<String> | null}
export type UIPaymentReviewed = {readonly bid: BuildPaymentID; readonly reviewID: Int; readonly seqno: Int; readonly banners?: Array<SendBannerLocal> | null; readonly nextButton: String}
export type ValidateStellarURIResultLocal = {readonly operation: String; readonly originDomain: String; readonly message: String; readonly callbackURL: String; readonly xdr: String; readonly summary: TxDisplaySummary; readonly recipient: String; readonly amount: String; readonly assetCode: String; readonly assetIssuer: String; readonly memo: String; readonly memoType: String; readonly displayAmountFiat: String; readonly availableToSendNative: String; readonly availableToSendFiat: String; readonly signed: Boolean}
export type WalletAccountLocal = {readonly accountID: AccountID; readonly isDefault: Boolean; readonly name: String; readonly balanceDescription: String; readonly seqno: String; readonly currencyLocal: CurrencyLocal; readonly accountMode: AccountMode; readonly accountModeEditable: Boolean; readonly deviceReadOnly: Boolean; readonly isFunded: Boolean; readonly canSubmitTx: Boolean; readonly canAddTrustline: Boolean}

export type IncomingCallMapType = {
  'stellar.1.notify.paymentNotification'?: (params: MessageTypes['stellar.1.notify.paymentNotification']['inParam'] & {sessionID: number}) => void
  'stellar.1.notify.paymentStatusNotification'?: (params: MessageTypes['stellar.1.notify.paymentStatusNotification']['inParam'] & {sessionID: number}) => void
  'stellar.1.notify.requestStatusNotification'?: (params: MessageTypes['stellar.1.notify.requestStatusNotification']['inParam'] & {sessionID: number}) => void
  'stellar.1.notify.accountDetailsUpdate'?: (params: MessageTypes['stellar.1.notify.accountDetailsUpdate']['inParam'] & {sessionID: number}) => void
  'stellar.1.notify.accountsUpdate'?: (params: MessageTypes['stellar.1.notify.accountsUpdate']['inParam'] & {sessionID: number}) => void
  'stellar.1.notify.pendingPaymentsUpdate'?: (params: MessageTypes['stellar.1.notify.pendingPaymentsUpdate']['inParam'] & {sessionID: number}) => void
  'stellar.1.notify.recentPaymentsUpdate'?: (params: MessageTypes['stellar.1.notify.recentPaymentsUpdate']['inParam'] & {sessionID: number}) => void
  'stellar.1.ui.paymentReviewed'?: (params: MessageTypes['stellar.1.ui.paymentReviewed']['inParam'] & {sessionID: number}) => void
}

export type CustomResponseIncomingCallMap = {
  'stellar.1.ui.paymentReviewed'?: (params: MessageTypes['stellar.1.ui.paymentReviewed']['inParam'] & {sessionID: number}, response: {error: IncomingErrorCallback; result: (res: MessageTypes['stellar.1.ui.paymentReviewed']['outParam']) => void}) => void
}
export const localDeleteWalletAccountLocalRpcPromise = (params: MessageTypes['stellar.1.local.deleteWalletAccountLocal']['inParam'], waitingKey?: WaitingKey) => new Promise<MessageTypes['stellar.1.local.deleteWalletAccountLocal']['outParam']>((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.deleteWalletAccountLocal', params, callback: (error: SimpleError, result: MessageTypes['stellar.1.local.deleteWalletAccountLocal']['outParam']) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetWalletAccountSecretKeyLocalRpcPromise = (params: MessageTypes['stellar.1.local.getWalletAccountSecretKeyLocal']['inParam'], waitingKey?: WaitingKey) => new Promise<MessageTypes['stellar.1.local.getWalletAccountSecretKeyLocal']['outParam']>((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getWalletAccountSecretKeyLocal', params, callback: (error: SimpleError, result: MessageTypes['stellar.1.local.getWalletAccountSecretKeyLocal']['outParam']) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetWalletAccountsLocalRpcPromise = (params?: undefined, waitingKey?: WaitingKey) => new Promise<MessageTypes['stellar.1.local.getWalletAccountsLocal']['outParam']>((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getWalletAccountsLocal', params, callback: (error: SimpleError, result: MessageTypes['stellar.1.local.getWalletAccountsLocal']['outParam']) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localHasAcceptedDisclaimerLocalRpcPromise = (params?: undefined, waitingKey?: WaitingKey) => new Promise<MessageTypes['stellar.1.local.hasAcceptedDisclaimerLocal']['outParam']>((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.hasAcceptedDisclaimerLocal', params, callback: (error: SimpleError, result: MessageTypes['stellar.1.local.hasAcceptedDisclaimerLocal']['outParam']) => (error ? reject(error) : resolve(result)), waitingKey}))
// Not enabled calls. To enable add to enabled-calls.json:
// 'stellar.1.local.getWalletAccountLocal'
// 'stellar.1.local.getAccountAssetsLocal'
// 'stellar.1.local.getPaymentsLocal'
// 'stellar.1.local.getPendingPaymentsLocal'
// 'stellar.1.local.markAsReadLocal'
// 'stellar.1.local.getPaymentDetailsLocal'
// 'stellar.1.local.getGenericPaymentDetailsLocal'
// 'stellar.1.local.getDisplayCurrenciesLocal'
// 'stellar.1.local.validateAccountIDLocal'
// 'stellar.1.local.validateSecretKeyLocal'
// 'stellar.1.local.validateAccountNameLocal'
// 'stellar.1.local.changeWalletAccountNameLocal'
// 'stellar.1.local.setWalletAccountAsDefaultLocal'
// 'stellar.1.local.linkNewWalletAccountLocal'
// 'stellar.1.local.createWalletAccountLocal'
// 'stellar.1.local.changeDisplayCurrencyLocal'
// 'stellar.1.local.getDisplayCurrencyLocal'
// 'stellar.1.local.acceptDisclaimerLocal'
// 'stellar.1.local.getWalletAccountPublicKeyLocal'
// 'stellar.1.local.getSendAssetChoicesLocal'
// 'stellar.1.local.startBuildPaymentLocal'
// 'stellar.1.local.stopBuildPaymentLocal'
// 'stellar.1.local.buildPaymentLocal'
// 'stellar.1.local.reviewPaymentLocal'
// 'stellar.1.local.sendPaymentLocal'
// 'stellar.1.local.sendPathLocal'
// 'stellar.1.local.buildRequestLocal'
// 'stellar.1.local.getRequestDetailsLocal'
// 'stellar.1.local.cancelRequestLocal'
// 'stellar.1.local.makeRequestLocal'
// 'stellar.1.local.setAccountMobileOnlyLocal'
// 'stellar.1.local.setAccountAllDevicesLocal'
// 'stellar.1.local.isAccountMobileOnlyLocal'
// 'stellar.1.local.cancelPaymentLocal'
// 'stellar.1.local.getPredefinedInflationDestinationsLocal'
// 'stellar.1.local.setInflationDestinationLocal'
// 'stellar.1.local.getInflationDestinationLocal'
// 'stellar.1.local.airdropDetailsLocal'
// 'stellar.1.local.airdropStatusLocal'
// 'stellar.1.local.airdropRegisterLocal'
// 'stellar.1.local.fuzzyAssetSearchLocal'
// 'stellar.1.local.listPopularAssetsLocal'
// 'stellar.1.local.addTrustlineLocal'
// 'stellar.1.local.deleteTrustlineLocal'
// 'stellar.1.local.changeTrustlineLimitLocal'
// 'stellar.1.local.getTrustlinesLocal'
// 'stellar.1.local.getTrustlinesForRecipientLocal'
// 'stellar.1.local.findPaymentPathLocal'
// 'stellar.1.local.assetDepositLocal'
// 'stellar.1.local.assetWithdrawLocal'
// 'stellar.1.local.balancesLocal'
// 'stellar.1.local.sendCLILocal'
// 'stellar.1.local.sendPathCLILocal'
// 'stellar.1.local.accountMergeCLILocal'
// 'stellar.1.local.claimCLILocal'
// 'stellar.1.local.recentPaymentsCLILocal'
// 'stellar.1.local.paymentDetailCLILocal'
// 'stellar.1.local.walletInitLocal'
// 'stellar.1.local.walletDumpLocal'
// 'stellar.1.local.walletGetAccountsCLILocal'
// 'stellar.1.local.ownAccountLocal'
// 'stellar.1.local.importSecretKeyLocal'
// 'stellar.1.local.exportSecretKeyLocal'
// 'stellar.1.local.setDisplayCurrency'
// 'stellar.1.local.exchangeRateLocal'
// 'stellar.1.local.getAvailableLocalCurrencies'
// 'stellar.1.local.formatLocalCurrencyString'
// 'stellar.1.local.makeRequestCLILocal'
// 'stellar.1.local.lookupCLILocal'
// 'stellar.1.local.batchLocal'
// 'stellar.1.local.validateStellarURILocal'
// 'stellar.1.local.approveTxURILocal'
// 'stellar.1.local.approvePayURILocal'
// 'stellar.1.local.approvePathURILocal'
// 'stellar.1.local.getPartnerUrlsLocal'
// 'stellar.1.local.signTransactionXdrLocal'
// 'stellar.1.local.getStaticConfigLocal'
// 'stellar.1.notify.paymentNotification'
// 'stellar.1.notify.paymentStatusNotification'
// 'stellar.1.notify.requestStatusNotification'
// 'stellar.1.notify.accountDetailsUpdate'
// 'stellar.1.notify.accountsUpdate'
// 'stellar.1.notify.pendingPaymentsUpdate'
// 'stellar.1.notify.recentPaymentsUpdate'
// 'stellar.1.remote.balances'
// 'stellar.1.remote.details'
// 'stellar.1.remote.recentPayments'
// 'stellar.1.remote.pendingPayments'
// 'stellar.1.remote.markAsRead'
// 'stellar.1.remote.paymentDetails'
// 'stellar.1.remote.accountSeqno'
// 'stellar.1.remote.submitPayment'
// 'stellar.1.remote.submitRelayPayment'
// 'stellar.1.remote.submitRelayClaim'
// 'stellar.1.remote.submitPathPayment'
// 'stellar.1.remote.submitMultiPayment'
// 'stellar.1.remote.acquireAutoClaimLock'
// 'stellar.1.remote.releaseAutoClaimLock'
// 'stellar.1.remote.nextAutoClaim'
// 'stellar.1.remote.isMasterKeyActive'
// 'stellar.1.remote.submitRequest'
// 'stellar.1.remote.requestDetails'
// 'stellar.1.remote.cancelRequest'
// 'stellar.1.remote.setInflationDestination'
// 'stellar.1.remote.ping'
// 'stellar.1.remote.networkOptions'
// 'stellar.1.remote.detailsPlusPayments'
// 'stellar.1.remote.allDetailsPlusPayments'
// 'stellar.1.remote.assetSearch'
// 'stellar.1.remote.fuzzyAssetSearch'
// 'stellar.1.remote.listPopularAssets'
// 'stellar.1.remote.changeTrustline'
// 'stellar.1.remote.findPaymentPath'
// 'stellar.1.remote.postAnyTransaction'
// 'stellar.1.ui.paymentReviewed'
