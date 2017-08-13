import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import classnames from 'classnames'
import Input from '../../../common/Ui/Input'

class AccountForm extends Component {
  static propTypes = {}

  renderConsoleLog (event) {
    console.log(event)
  }

  render () {
    const { name } = this.props

    return (
      <div className='row'>
        <div className='wrapper wrapper-content animated fadeInUp'>
          <div className='col-md-8 col-md-offset-2'>
            <div className='ibox float-e-margins'>
              <div className='ibox-title'>
                <h5>New account</h5>
              </div>
              <div className='ibox-content'>
                <div className='form-horizontal'>
                  <Input value={''} label='Name' error='Can not be blank' onChange={this.renderConsoleLog.bind(this)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountForm
