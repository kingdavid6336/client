// This is a helper for remote windows.
// This acts as a fake store for remote windows
// On the main window we plumb through our props and we 'mirror' the props using this helper
// We start up and send an action to the main window which then sends us 'props'
import {createStore, applyMiddleware, type Store} from 'redux'
import * as R from '@/constants/remote'
import * as RemoteGen from '@/actions/remote-gen'
import KB2 from '@/util/electron.desktop'

const {ipcRendererOn} = KB2.functions

const updateStore = 'remoteStore:update'
// Special action that's not sent
type UpdateStoreAction = {
  type: typeof updateStore
  payload: {
    propsStr: string
  }
}

class RemoteStore {
  _store: Store<unknown, any>
  _gotPropsCallback: (() => void) | undefined // let component know it loaded once so it can show itself. Set to null after calling once
  _deserialize: (a: unknown, b: unknown) => unknown

  getStore = () => this._store

  _onPropsUpdated = (propsStr: string) => {
    // setImmediate since this can be a side effect of the reducer which redux doesn't like
    setTimeout(() => {
      this._store.dispatch({
        payload: {propsStr},
        type: updateStore,
      })
    }, 0)

    if (this._gotPropsCallback) {
      this._gotPropsCallback()
      this._gotPropsCallback = undefined
    }
  }

  _registerForRemoteUpdate = () => {
    ipcRendererOn?.('KBprops', (_event, action) => {
      this._onPropsUpdated(action)
    })
  }

  _reducer = (state: unknown, action: {type?: 'remoteStore:update'; payload: {propsStr: string}}) => {
    switch (action.type) {
      case updateStore: {
        return this._deserialize(state, JSON.parse(action.payload.propsStr))
      }
      default:
        return state
    }
  }

  constructor(props: {
    windowComponent: string
    windowParam: string
    gotPropsCallback: () => void
    deserialize: (a: unknown, b: unknown) => unknown
  }) {
    // eslint-disable-next-line
    this._store = createStore(
      this._reducer as any,
      props.deserialize(undefined, undefined),
      applyMiddleware(sendToRemoteMiddleware as any)
    )
    this._deserialize = props.deserialize
    this._gotPropsCallback = props.gotPropsCallback
    this._registerForRemoteUpdate()

    if (__DEV__) {
      global.DEBUGStore = this._store
    }

    // Search for the main window and ask it directly for our props
    R.remoteDispatch(
      RemoteGen.createRemoteWindowWantsProps({
        component: props.windowComponent,
        param: props.windowParam,
      })
    )
  }
}

const sendToRemoteMiddleware =
  () =>
  (next: (action: RemoteGen.Actions | UpdateStoreAction) => void) =>
  (action: RemoteGen.Actions | UpdateStoreAction) => {
    if (action.constructor === Function) {
      throw new Error('pure actions only allowed in remote store2')
    } else if (action.type === updateStore) {
      // Don't forward our internal updateStore call
      return next(action)
    } else {
      R.remoteDispatch(action)
    }
    return next(action)
  }

export default RemoteStore
