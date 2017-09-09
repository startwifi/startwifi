import axios from 'axios'

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS'
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE'

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT'
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS'
export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE'

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE'
export const RESET_NEW_ACCOUNT = 'RESET_NEW_ACCOUNT'

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api/v1' : '/api/v1'

export function fetchAccounts (token) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/accounts`,
    headers: {
      'Authorization': `JWT ${token}`
    }
  })

  return {
    type: FETCH_ACCOUNTS,
    payload: request
  }
}

export function fetchAccountsSuccess (accounts) {
  return {
    type: FETCH_ACCOUNTS_SUCCESS,
    payload: accounts
  }
}

export function fetchAccountsFailure (error) {
  return {
    type: FETCH_ACCOUNTS_FAILURE,
    payload: error
  }
}

export function fetchAccount (id) {
  const request = axios.get(`${ROOT_URL}/accounts/${id}`)

  return {
    type: FETCH_ACCOUNT,
    payload: request
  }
}

export function fetchAccountSuccess (activeAccount) {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    payload: activeAccount
  }
}

export function fetchAccountFailure (error) {
  return {
    type: FETCH_ACCOUNT_FAILURE,
    payload: error
  }
}

export function createAccount (props) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/accounts`,
    headers: {}
  })

  return {
    type: CREATE_ACCOUNT,
    payload: request
  }
}

export function createAccountSuccess (newAccount) {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    payload: newAccount
  }
}

export function createAccountFailure (error) {
  return {
    type: CREATE_ACCOUNT_FAILURE,
    payload: error
  }
}

export function resetNewAccount () {
  return {
    type: RESET_NEW_ACCOUNT
  }
}
