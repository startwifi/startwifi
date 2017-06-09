import React from 'react'
import { Route } from 'react-router'
import Dashboard from './dashboard'

export default (
  <Route>
    <Route component={Dashboard} path={Dashboard.path} />
  </Route>
)
