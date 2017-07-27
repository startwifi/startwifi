import React from 'react'
import { Route } from 'react-router'
import AccountsList from './accounts'
import AccountDetails from './account-details'

export default (
  <Route>
    <Route component={AccountsList} path={AccountsList.path} />
    <Route component={AccountDetails} path={AccountsList.path + '/:id'} />
  </Route>
)
