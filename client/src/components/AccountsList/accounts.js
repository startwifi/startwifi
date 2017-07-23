import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindAll } from 'lodash'
import { connect } from 'react-redux'
import { fetchAccounts, fetchAccountsSuccess, fetchAccountsFailure } from './actions'
import AccountItem from './account-item'

class AccountsList extends Component {
  static path = '/accounts'

  static propTypes = {
    accountsList: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    bindAll(this, ['renderAccounts'])
  }

  componentWillMount() {
    this.props.fetchAccounts()
  }

  renderAccounts (account, idx) {
     return <AccountItem key={idx} account={account} />
  }

  render () {
    const { accounts, loading, error } = this.props.accountsList;

    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h2>Accounts</h2>

          <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { accounts.map(this.renderAccounts) }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

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
