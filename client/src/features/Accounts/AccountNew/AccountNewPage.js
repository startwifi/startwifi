import React, { Component } from 'react'
import AccountFormContainer from '../AccountForm/AccountFormContainer'
import HeaderContainer from '../../../common/Header/HeaderContainer'

class AccountNewPage extends Component {
  render () {
    return (
      <div id='page-wrapper' className='gray-bg'>
        <HeaderContainer />
        <div className='containter'>
          <div className='row'>
            <div className='wrapper wrapper-content animated fadeInUp'>
              <AccountFormContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountNewPage
