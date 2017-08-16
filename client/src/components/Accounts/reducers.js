import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  RESET_NEW_ACCOUNT
} from './actions'

const initialState = {
  accountsList: { accounts: [], error: null, loading: false },
  activeAccount: { account: null, error: null, loading: false },
  newAccount: { account: null, error: null, loading: false }
}

export default function (state = initialState, action) {
  let error

  console.log(action.type)

  switch (action.type) {
    case FETCH_ACCOUNTS:
      return { ...state, accountsList: { accounts: [], error: null, loading: true } }
    case FETCH_ACCOUNTS_SUCCESS:
      return { ...state, accountsList: { accounts: action.payload, error: null, loading: false } }
    case FETCH_ACCOUNTS_FAILURE:
      error = action.payload || { message: action.payload.message }
      return { ...state, accountsList: { accounts: [], error: error, loading: false } }
    case FETCH_ACCOUNT:
      return { ...state, activeAccount: { ...state.activeAccount, loading: true } }
    case FETCH_ACCOUNT_SUCCESS:
      return { ...state, activeAccount: { account: action.payload, error: null, loading: false } }
    case FETCH_ACCOUNT_FAILURE:
      error = action.payload || { message: action.payload.message }
      return { ...state, activeAccount: { account: null, error: error, loading: false } }
    case CREATE_ACCOUNT:
      return { ...state, newAccount: { ...state.newAccount, loading: true } }
    case CREATE_ACCOUNT_SUCCESS:
      return { ...state, newAccount: { account: action.payload, error: null, loading: false } }
    case CREATE_ACCOUNT_FAILURE:
      error = action.payload || { message: action.payload.message }
      return { ...state, newAccount: { account: null, error: error, loading: false } }
    case RESET_NEW_ACCOUNT:
      return { ...state, newAccount: { account: null, error: null, loading: false } }
    default:
      return state
  }
}
