import axios from 'axios'

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS'
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE'

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT'
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS'
export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE'

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api/v1' : '/api/v1'

export function fetchAccounts () {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/accounts`,
    headers: []
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
