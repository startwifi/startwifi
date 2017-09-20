import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { AboutRoutes } from './features/About'
import { AccountsRoutes } from './features/Accounts'
import { Dashboard, DashboardRoutes } from './features/Dashboard'
import { UsersRoutes } from './features/Users'
import AppPage from './features/App/AppPage'
import NotFound from './features/NotFound'

export default (
  <Route path='/' component={AppPage}>
    <IndexRoute component={Dashboard} />
    { AboutRoutes }
    { AccountsRoutes }
    { DashboardRoutes }
    { UsersRoutes }
    <Route path='*' component={NotFound} />
  </Route>
)
