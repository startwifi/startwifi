import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { AboutRoutes } from './components/About'
import { AccountsRoutes } from './components/Accounts'
import { DashboardPage, DashboardRoutes } from './components/Dashboard'
import { UsersRoutes } from './components/Users'
import AppPage from './containers/App/AppPage'
import NotFound from './components/NotFound'

export default (
  <Route path='/' component={AppPage}>
    <IndexRoute component={DashboardPage} />
    { AboutRoutes }
    { AccountsRoutes }
    { DashboardRoutes }
    { UsersRoutes }
    <Route path='*' component={NotFound} />
  </Route>
)
