import React from 'react'
import { Route } from 'react-router'
import AccountsListPage from './AccountsList/AccountsListPage'
import AccountNewPage from './AccountNew/AccountNewPage'
import AccountDetailsPage from './AccountDetails/AccountDetailsPage'

export default (
  <Route>
    <Route path='/accounts' component={AccountsListPage} />
    <Route path='/accounts/new' component={AccountNewPage} />
    <Route path='/accounts/:id' component={AccountDetailsPage} />
  </Route>
)
