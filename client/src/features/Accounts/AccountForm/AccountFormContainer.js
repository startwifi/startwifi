import { connect } from 'react-redux'
import AccountForm from './AccountForm'
import { resetNewAccount } from '../actions'

const mapStateToProps = (state) => {
  return {
    newAccount: state.accounts.newAccount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewAccount())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm)
