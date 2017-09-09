import React from 'react'
import { Route } from 'react-router'
import SignInPage from './SignIn/SignInPage'

export default (
  <Route>
    <Route path='/signin' component={SignInPage} />
  </Route>
)
