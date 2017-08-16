import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { AccountsReducer } from './components/Accounts'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  accounts: AccountsReducer
})
