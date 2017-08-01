import { connect } from 'react-redux'
import { fetchAccounts, fetchAccountsSuccess, fetchAccountsFailure } from './actions'
import AccountsList from './accounts'

const mapStateToProps = (state) => {
  return {
    accountsList: state.accounts.accountsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts: () => {
      dispatch(fetchAccounts()).then((response) => {
        !response.error ? dispatch(fetchAccountsSuccess(response.payload.data)) : dispatch(fetchAccountsFailure(response.payload.data))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsList)
