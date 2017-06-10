import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { DevTools } from './utilities'

const _applyMiddleware = () => {
  const middleware = [
  ]

  return applyMiddleware(...middleware)
}

const configStore = (initialState) => {
  const store = compose(
    _applyMiddleware(),
    DevTools.instrument()
  )(createStore)(rootReducer, initialState)

  return store
}

export default configStore
