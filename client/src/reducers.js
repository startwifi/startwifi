import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { AccountsListReducer } from './components/AccountsList'

export default combineReducers({
  routing: routerReducer,
  accounts: AccountsListReducer
})
