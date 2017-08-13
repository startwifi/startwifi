import React, { Component } from 'react'
import About from './About'

class AboutPage extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col-lg-9'>
          <div className='wrapper wrapper-content animated fadeInUp'>
            <About />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage
