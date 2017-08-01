import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import classnames from 'classnames'

class AccountItem extends Component {
  static propTypes = {
    account: PropTypes.object.isRequired
  }

  render () {
    const { id, name, active, created_at } = this.props.account
    const statusClasses = classnames('label', {
      'label-primary': active,
      'label-default': !active
    })

    return (
      <tr key={id}>
        <td className='project-status'>
          <span className={statusClasses}>
            { active === true ? 'Active' : 'Inactive' }
          </span>
        </td>
        <td className='project-title'>
          <Link to={`/accounts/${id}`}>{name}</Link><br />
          <small>{created_at}</small>
        </td>
        <td className='project-actions'>
          <Link to={`/accounts/${id}`} className='btn btn-sm btn-white'>
            <i className='fa fa-folder' /> View
          </Link>
          <Link to='' className='btn btn-sm btn-white'>
            <i className='fa fa-pencil' /> Edit
          </Link>
        </td>
      </tr>
    )
  }
}

export default AccountItem
