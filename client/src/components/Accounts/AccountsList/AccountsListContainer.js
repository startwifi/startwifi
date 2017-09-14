import { connect } from 'react-redux'
import { fetchAccounts, fetchAccountsSuccess, fetchAccountsFailure } from '../actions'
import AccountsList from './AccountsList'

const mapStateToProps = (state) => {
  return {
    accountsList: state.accounts.accountsList
  }
}

const mapDispatchToProps = (dispatch) => {
  const token = localStorage.getItem('jwtToken')

  return {
    fetchAccounts: () => {
      dispatch(fetchAccounts(token)).then((response) => {
        !response.error ? dispatch(fetchAccountsSuccess(response.payload.data)) : dispatch(fetchAccountsFailure(response.payload.data))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsList)
