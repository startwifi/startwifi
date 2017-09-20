import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { signInUser, signInUserSuccess, signInUserFailure, meFromToken, meFromTokenFailure } from '../actions'
import Input from '../../../common/Ui/Input'

function validate(values) {
  let errors = {}
  let hasErrors = false

  if (!values.email || values.email.trim() === '') {
    errors.email = 'Email can not be blank'
    hasErrors = true
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Password can not be blank'
    hasErrors = true
  }
  return hasErrors && errors
}

const validateAndSignInUser = (values, dispatch) => {
  return dispatch(signInUser(values))
    .then((result) => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(signInUserFailure(result.payload.response.data))
        throw new SubmissionError(result.payload.response.data)
      }
      localStorage.setItem('jwtToken', result.payload.data.jwt)
      dispatch(meFromToken(result.payload.data.jwt))
        .then((result) => {
          if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(meFromTokenFailure(result.payload.response.data))
            throw new SubmissionError(result.payload.response.data)
          }
          dispatch(signInUserSuccess(result.payload.data))
        })
    })
}

class SignInForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      this.context.router.push('/')
    }

    if (nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      alert(nextProps.user.error.message)
    }
  }

  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <div className='row'>
        <div className='wrapper wrapper-content animated fadeInUp'>
          <div className='col-md-8 col-md-offset-2'>
            <div className='ibox float-e-margins'>
              <div className='ibox-title'>
                <h5>Sign in</h5>
              </div>
              <div className='ibox-content'>
                <form className='form-horizontal' onSubmit={ handleSubmit(validateAndSignInUser) }>
                  <Field
                    name='email'
                    type='text'
                    label='Email'
                    component={Input}
                  />
                  <Field
                    name='password'
                    type='password'
                    label='Password'
                    component={Input}
                  />
                  <div className='hr-line-dashed' />
                  <div className='form-group'>
                    <div className='col-md-8 col-md-offset-2'>
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
  form: 'SignInForm',
  validate
})(SignInForm)
