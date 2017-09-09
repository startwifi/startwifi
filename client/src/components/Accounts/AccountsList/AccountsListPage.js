import React, { Component } from 'react'
import AccountsListContainer from './AccountsListContainer'
import HeaderContainer from '../../../common/Header/HeaderContainer'

class AccountsListPage extends Component {
  render () {
    return (
      <div id='page-wrapper' className='gray-bg'>
        <HeaderContainer />
        <div className='containter'>
          <div className='row'>
            <div className='wrapper wrapper-content animated fadeInUp'>
              <AccountsListContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountsListPage
