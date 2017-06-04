import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { AboutRoutes } from './components/About'
import { AccountsRoutes } from './components/Accounts'
import { Dashboard, DashboardRoutes } from './components/Dashboard'
import App from './containers/App'
import NotFound from './components/NotFound'

export default (
  <Route component={App} path={App.path}>
    <IndexRoute component={Dashboard} />
    { AboutRoutes }
    { AccountsRoutes }
    { DashboardRoutes }
    <Route component={NotFound} path='*' />
  </Route>
)
