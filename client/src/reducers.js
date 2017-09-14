import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { AccountsReducer } from './components/Accounts'
import { UsersReducer } from './components/Users'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  accounts: AccountsReducer,
  user: UsersReducer
})
