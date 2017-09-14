import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  componentWillMount () {
    this.props.loadUserFromToken()
  }

  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default App
