import React, { Component } from 'react'
import AccountsListContainer from './AccountsListContainer'

class AccountsListPage extends Component {
  render () {
    return (
      <div className='row'>
        <div className='wrapper wrapper-content animated fadeInUp'>
          <AccountsListContainer />
        </div>
      </div>
    )
  }
}

export default AccountsListPage
