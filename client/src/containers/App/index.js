import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DevTools } from '../../utilities'
import Header from '../../common/Header'

class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

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

export default App
