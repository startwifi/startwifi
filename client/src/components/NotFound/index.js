import React, { Component } from 'react'
import { Link } from 'react-router'
import './style.css'

class NotFound extends Component {
  render () {
    return (
      <div>
        <h2>NotFound</h2>
        <div className=''>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
      </div>
    )
  }
}

export default NotFound
