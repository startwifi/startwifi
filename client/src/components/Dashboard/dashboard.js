import React, { Component } from 'react'
import './style.css'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h2>Dashboard</h2>
        <div className='App-intro' />
      </div>
    )
  }
}

Dashboard.path = '/dashboard'

export default Dashboard
