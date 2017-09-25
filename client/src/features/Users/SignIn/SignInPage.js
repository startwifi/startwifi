import React, { Component } from 'react'
import SignInFormContainer from './SignInFormContainer'

class SignInPage extends Component {
  render () {
    return (
      <div id='page-wrapper' className='gray-bg'>
        <div className='containter'>
          <div className='row'>
            <div className='wrapper wrapper-content animated fadeInUp'>
              <SignInFormContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignInPage
