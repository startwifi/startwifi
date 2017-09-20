import { connect } from 'react-redux'
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from '../../features/Users/actions'
import App from './App'

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken: () => {
      let token = localStorage.getItem('jwtToken')
      if (!token || token === '') {
        return
      }
      dispatch(meFromToken(token))
        .then((response) => {
          if (!response.error) {
            localStorage.setItem('jwtToken', response.payload.data.jwt)
            dispatch(meFromTokenSuccess(response.payload))
          } else {
            localStorage.removeItem('jwtToken')
            dispatch(meFromTokenFailure(response.payload))
          }
        })
    },

    resetMe: () => {
      localStorage.removeItem('jwtToken')
      dispatch(resetToken())
    }
  }
}
export default connect(null, mapDispatchToProps)(App)
