import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AccountDetailsContainer from './AccountDetailsContainer'

class AccountDetailsPage extends Component {
  static propTypes = {
    routeParams: PropTypes.any.isRequired
  }

  render () {
    return <AccountDetailsContainer id={this.props.routeParams.id} />
  }
}

export default AccountDetailsPage
