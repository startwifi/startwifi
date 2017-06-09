import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

const propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired
    }).isRequired
  )
}

class Accounts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      accounts: []
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <h2>Accounts</h2>
        <div className='App-intro'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Created at</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.accounts.map((account) =>
                  <tr key={account.id}>
                    <td>{account.name}</td>
                    <td>{account.active === 'true' ? 'active' : 'inactive'}</td>
                    <td>{account.created_at}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

Accounts.path = '/accounts'
Accounts.propTypes = propTypes

export default Accounts
