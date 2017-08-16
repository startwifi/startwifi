import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { DevTools } from './utilities'
import promise from 'redux-promise'

const _getMiddleware = () => {
  const middleware = [
    promise
  ]

  return applyMiddleware(...middleware)
}

const configStore = (initialState) => {
  const store = compose(
    _getMiddleware(),
    DevTools.instrument()
  )(createStore)(rootReducer, initialState)

  return store
}

export default configStore
