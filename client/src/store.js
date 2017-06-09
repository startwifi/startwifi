import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

const _applyMiddleware = () => {
  const middleware = [
  ]

  return applyMiddleware(...middleware)
}

const configStore = (initialState) => {
  const store = compose(
    _applyMiddleware()
  )(createStore)(rootReducer, initialState)

  return store
}

export default configStore
