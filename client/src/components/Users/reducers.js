import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  ME_FROM_TOKEN,
  ME_FROM_TOKEN_SUCCESS,
  ME_FROM_TOKEN_FAILURE,
  RESET_TOKEN,
} from './actions'

const initialState = { user: null, status: null, error: null, loading: false}

// status can be: 
// 1. 'storage' ie. localstorage / sessionstorage)
// 2. 'signup' (signing up)
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin)
// 6. 'logout' (after logout)

export default function (state = initialState, action) {
  let error

  console.log(action.type)

  switch (action.type) {
    case ME_FROM_TOKEN:
      return { ...state, user: null, status: 'storage', error: null, loading: true}
    case ME_FROM_TOKEN_SUCCESS:
      return { ...state, user: action.payload.data.user, status: 'authenticated', error: null, loading: false }
    case ME_FROM_TOKEN_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return { ...state, user: null, status: 'storage', error: error, loading: false};
    case RESET_TOKEN:
      return { ...state, user: null, status: 'storage', error: null, loading: false};
    case SIGNIN_USER:
      return { ...state, user: null, status: 'signin', error: null, loading: true }
    case SIGNIN_USER_SUCCESS:
      return { ...state, user: action.payload, status: 'authenticated', error: null, loading: false }
    case SIGNIN_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return { ...state, user: null, status: 'signin', error: error, loading: false }
    default:
      return state
  }
}
