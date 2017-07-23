import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class AccountItem extends Component {
  static propTypes = {
    account: PropTypes.object.isRequired
  }

  render () {
    const { id, name, active, created_at } = this.props.account

    return (
      <tr key={id}>
        <td>{id}</td>
        <td><Link to={`/accounts/${id}`}>{name}</Link></td>
        <td>{active === true ? 'active' : 'inactive'}</td>
        <td>{created_at}</td>
        <td>
          <button className='btn btn-primaty'>Edit</button>
          <button className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    )
  }
}

export default AccountItem
