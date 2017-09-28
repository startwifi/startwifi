import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { Link } from 'react-router'
import { createAccount, createAccountSuccess, createAccountFailure } from '../actions'
import Input from '../../../common/Ui/Input'
import Alert from '../../../common/Ui/Alert'

function validate(values) {
  const errors = {}

  if (!values.ownerName || values.ownerName.trim() === '') {
    errors.ownerName = 'Enter an owner name'
  }
  if (!values.ownerEmail || values.ownerEmail.trim() === '') {
    errors.ownerEmail = 'Enter an owner email'
  }
  if (!values.ownerPassword || values.ownerPassword.trim() === '') {
    errors.ownerPassword = 'Enter an owner password'
  }
  if (!values.accountName || values.accountName.trim() === '') {
    errors.accountName = 'Enter an account name'
  }
  if (!values.accountSubdomain || values.accountSubdomain.trim() === '') {
    errors.accountSubdomain = 'Enter an account subdomain'
  }

  return errors
}

const validateAndCreateAccount = (values, dispatch) => {
  return dispatch(createAccount(values))
    .then(result => {
      if (result.payload.response && result.payload.response.status !== 201) {
        dispatch(createAccountFailure(result.payload.response.data))
        throw new SubmissionError(result.payload.response.data)
      }
      dispatch(createAccountSuccess(result.payload.data))
    })
}

class AccountForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount () {
    this.props.resetMe()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newAccount.account && !nextProps.newAccount.error) {
      this.context.router.push('/accounts')
    }
  }

  render () {
    const { handleSubmit, submitting, newAccount } = this.props

    return (
      <div className='row'>
        <div className='wrapper wrapper-content animated fadeInUp'>
          <div className='col-md-8 col-md-offset-2'>
            <div className='ibox float-e-margins'>
              <div className='ibox-title'>
                <h5>New account</h5>
              </div>
              <div className='ibox-content'>
                <Alert entity={newAccount} />
                <form className='form-horizontal' onSubmit={handleSubmit(validateAndCreateAccount)}>
                  <Field
                    name='ownerName'
                    type='text'
                    label='Owner name'
                    component={Input}
                  />
                  <Field
                    name='ownerEmail'
                    type='email'
                    label='Owner email'
                    component={Input}
                  />
                  <Field
                    name='ownerPassword'
                    type='password'
                    label='Owner password'
                    component={Input}
                  />
                  <Field
                    name='accountName'
                    type='text'
                    label='Name'
                    component={Input}
                  />
                  <Field
                    name='accountSubdomain'
                    type='text'
                    label='Subdomain'
                    component={Input}
                  />
                  <div className='hr-line-dashed' />
                  <div className='form-group'>
                    <div className='col-md-8 col-md-offset-2'>
                      <Link to='/accounts' className='btn btn-white'>Cancel</Link>
                      <button type='submit' className='btn btn-primary' disabled={submitting}>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'AccountForm',
  validate
})(AccountForm)
