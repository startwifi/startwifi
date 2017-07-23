import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { fetchAccount, fetchAccountSuccess, fetchAccountFailure } from './actions'

class AccountDetails extends Component {
  static propTypes = {
    routeParams: PropTypes.any.isRequired
  }

  componentWillMount() {
    this.props.fetchAccount(this.props.routeParams.id)
  }

  render () {
    const { id, name, active, created_at } = this.props.activeAccount

    return (
      <div>
        <h3>Account {name} Details</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeAccount: state.accounts.activeAccount
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
