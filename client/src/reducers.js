import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { AccountsReducer } from './components/Accounts'

export default combineReducers({
  routing: routerReducer,
  accounts: AccountsReducer
})
