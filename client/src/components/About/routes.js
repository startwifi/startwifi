import React from 'react'
import { Route } from 'react-router'
import About from './about'

export default (
  <Route>
    <Route component={About} path={About.path} />
  </Route>
)
