import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Loader from '../../../common/Ui/Loader'

class AccountDetails extends Component {
  static propTypes = {
    id: PropTypes.any.isRequired
  }

  componentDidMount() {
    this.props.fetchAccount(this.props.id)
  }

  render () {
    const { account, loading, error } = this.props.activeAccount

    if (loading) {
      return <Loader />
    } else if(error) {
      return <div className="alert alert-danger">{error.message}</div>
    } else if(!account) {
      return <span />
    }

    const statusClasses = classnames('label', {
      'label-primary': account && account.active,
      'label-default': account && !account.active
    })

    return (
      <div className='row'>
        <div className='col-lg-9'>
          <div className='wrapper wrapper-content animated fadeInUp'>
            <div className='ibox'>
              <div className='ibox-content'>

                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='m-b-md'>
                      <a href='#' className='btn btn-white btn-xs pull-right'>Edit project</a>
                      <h2>Contract with {account.name}</h2>
                    </div>
                    <dl className='dl-horizontal'>
                      <dt>Status:</dt> <dd><span className={statusClasses}>{account.active === true ? 'Active' : 'Inactive' }</span></dd>
                    </dl>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className='col-lg-3'>
          <div className='wrapper wrapper-content project-manager'>
            <h4>Account description</h4>
            <img src='' alt='account logo' className='img-responsive' />
            <p className='small'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
              even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
            </p>
            <p className='small font-bold'>
              <span><i className='fa fa-circle text-warning'></i> High priority</span>
            </p>
          </div>
        </div>

      </div>
    )
  }
}

export default AccountDetails
