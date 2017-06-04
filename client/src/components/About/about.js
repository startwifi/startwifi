import React, { Component } from 'react'
import './style.css'

class About extends Component {
  render () {
    return (
      <div>
        <h2>About</h2>
        <p className='App-intro'>
          Yay!
        </p>
      </div>
    )
  }
}

About.path = '/about'

export default About
