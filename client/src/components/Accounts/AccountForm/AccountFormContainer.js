import { connect } from 'react-redux'
import AccountForm from './AccountForm'

const mapStateToProps = (state) => {
  return {
    newAccount: state.accounts.newAccount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm)
