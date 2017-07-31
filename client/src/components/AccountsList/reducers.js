import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE
} from './actions'

const initialState = {
  accountsList: { accounts: [], error: null, loading: false },
  activeAccount: { account: null, error: null, loading: false }
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
    default:
      return state
  }
}
