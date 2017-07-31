import React from 'react'
import { Route } from 'react-router'
import AccountsList from './accounts'
import AccountsListContainer from './accounts-container'
import AccountDetailsContainer from './account-details-container'

export default (
  <Route>
    <Route component={AccountsListContainer} path={AccountsList.path} />
    <Route component={AccountDetailsContainer} path={AccountsList.path + '/:id'} />
  </Route>
)
