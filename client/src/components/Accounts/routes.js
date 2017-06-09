import React from 'react'
import { Route } from 'react-router'
import Accounts from './accounts'

export default (
  <Route>
    <Route component={Accounts} path={Accounts.path} />
  </Route>
)
