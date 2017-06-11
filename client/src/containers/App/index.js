import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DevTools } from '../../utilities'
import Header from '../../common/Header'
import './style.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        { this.props.children }
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    )
  }
}

App.path = '/'
App.propTypes = {
  children: PropTypes.any.isRequired
}

export default App
