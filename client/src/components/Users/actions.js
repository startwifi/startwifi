import axios from 'axios'

export const ME_FROM_TOKEN = 'ME_FROM_TOKEN'
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS'
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE'
export const RESET_TOKEN = 'RESET_TOKEN'

export const SIGNIN_USER = 'SIGNIN_USER'
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS'
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE'
export const RESET_USER = 'RESET_USER'

const TOKEN_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000' : ''
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api/v1' : '/api/v1'

export function meFromToken(tokenFromStorage) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/me`,
    headers: {
      'Authorization': `JWT ${tokenFromStorage}`
    }
  })

  return {
    type: ME_FROM_TOKEN,
    payload: request
  }
}

export function meFromTokenSuccess(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    payload: currentUser
  }
}

export function meFromTokenFailure(error) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    payload: error
  }
}

export function resetToken() {
  return {
    type: RESET_TOKEN
  }
}

export function signInUser (formValues) {
  const request = axios.post(`${TOKEN_URL}/user_token`, { 'auth': formValues })

  return {
    type: SIGNIN_USER,
    payload: request
  }
}

export function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user
  }
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  }
}
