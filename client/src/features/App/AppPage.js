import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppContainer from './AppContainer'
import { DevTools } from '../../utilities'

class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    return (
      <AppContainer>
        <div id='wrapper'>
          { this.props.children }
          { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
        </div>
      </AppContainer>
    )
  }
}

export default App
