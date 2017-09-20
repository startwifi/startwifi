import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindAll } from 'lodash'
import { Link } from 'react-router'
import AccountItem from './AccountItem'
import Loader from '../../../common/Ui/Loader'

class AccountsList extends Component {
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
    const { accounts, loading } = this.props.accountsList

    return (
      <div className='row'>
        <div className='wrapper wrapper-content animated fadeInUp'>
          <div className='col-md-8 col-md-offset-2'>
            <div className='ibox float-e-margins'>
              <div className='ibox-title'>
                <h5>Accounts</h5>
                <div className='ibox-tools'>
                  <Link to='/accounts/new' className='btn btn-primary btn-xs'>Create new account</Link>
                </div>
              </div>
              <div className='ibox-content'>
                <div className='project-list'>
                  { loading ? <Loader /> :
                    (<table className='table table-hover'>
                      <tbody>
                        { accounts.map(this.renderAccounts) }
                      </tbody>
                    </table>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountsList
