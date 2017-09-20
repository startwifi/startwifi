import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderContainer from '../../../common/Header/HeaderContainer'
import AccountDetailsContainer from './AccountDetailsContainer'

class AccountDetailsPage extends Component {
  static propTypes = {
    routeParams: PropTypes.any.isRequired
  }

  render () {
    return (
      <div id='page-wrapper' className='gray-bg'>
        <HeaderContainer />
        <div className='containter'>
          <div className='row'>
            <div className='wrapper wrapper-content animated fadeInUp'>
              <AccountDetailsContainer id={this.props.routeParams.id} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountDetailsPage
