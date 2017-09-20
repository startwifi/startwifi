import React, { Component } from 'react'
import HeaderContainer from '../../common/Header/HeaderContainer'
import About from './About'

class AboutPage extends Component {
  render () {
    return (
      <div id='page-wrapper' className='gray-bg'>
        <HeaderContainer />
        <div className='containter'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='wrapper wrapper-content animated fadeInUp'>
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage
