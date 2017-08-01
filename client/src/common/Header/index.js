import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render () {
    return (
      <div className='row border-bottom white-bg'>
        <nav className='navbar navbar-static-top' role='navigation'>
          <div className='navbar-header'>
            <button aria-controls='navbar' aria-expanded='false' data-target='#navbar' data-toggle='collapse' className='navbar-toggle collapsed' type='button'>
              <i className='fa fa-reorder' />
            </button>
            <Link to='/' className='navbar-brand'>StartWiFi</Link>
          </div>
          <div className='navbar-collapse collapse' id='navbar'>
            <ul className='nav navbar-nav'>
              <li className='active'>
                <Link aria-expanded='false' role='button' to='/'>Dashboard</Link>
              </li>
              <li className='dropdown'>
                <a aria-expanded='false' role='button' href='#' className='dropdown-toggle' data-toggle='dropdown'> Admin <span className='caret' /></a>
                <ul role='menu' className='dropdown-menu'>
                  <li><Link to='/accounts'>Accounts</Link></li>
                </ul>
              </li>
            </ul>
            <ul className='nav navbar-top-links navbar-right'>
              <li>
                <a href='login.html'>
                  <i className='fa fa-sign-out' /> Log out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
