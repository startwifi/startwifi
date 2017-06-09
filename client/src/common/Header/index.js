import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-static-top blue-bg' role='navigation'>
        <ul className='nav' ref='menu'>
          <li className='nav-header'>
            <div className='logo-element'>
              StartWiFi
            </div>
          </li>
        </ul>
        <ul className='nav navbar-right'>
          <li>
            <Link to='/accounts'>
              <i className='fa' /> Accounts
            </Link>
          </li>
          <li>
            <Link to='/dashboard'>
              <i className='fa' /> Dashboard
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <i className='fa' /> About
            </Link>
          </li>
          <li>
            <Link to='/logout'>
              <i className='fa fa-sign-out' /> Log out
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
