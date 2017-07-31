import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DevTools } from '../../utilities'
import Header from '../../common/Header'
import './style.css'

class App extends Component {
  static path = '/'

  render () {
    return (
      <div id='wrapper'>
        <div id='page-wrapper' className='gray-bg'>
          <Header />
          <div className='containter'>
            { this.props.children }
          </div>
        </div>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.any.isRequired
}

export default App
