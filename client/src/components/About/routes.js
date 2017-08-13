import React from 'react'
import { Route } from 'react-router'
import AboutPage from './AboutPage'

export default (
  <Route>
    <Route path='/about' component={AboutPage} />
  </Route>
)
