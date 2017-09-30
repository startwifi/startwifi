import { connect } from 'react-redux'
import { fetchAccount, fetchAccountSuccess, fetchAccountFailure } from '../actions'
import AccountDetails from './AccountDetails'

const mapStateToProps = (globalState, ownProps) => {
  return {
    activeAccount: globalState.accounts.activeAccount,
    accountId: ownProps.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccount: (id) => {
      dispatch(fetchAccount(id))
        .then((result) => {
          if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(fetchAccountFailure(result.payload.response.data))
          } else {
            dispatch(fetchAccountSuccess(result.payload.data))
          }
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails)
