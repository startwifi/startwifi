import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Alert extends Component {
  static propTypes = {
    entity: PropTypes.object.isRequired
  }

  parseErrors (error) {
    const errorMessages = []

    for (const [key, value] of Object.entries(error)) {
      errorMessages.push(`${key} ${value[0]}`)
    }
    return errorMessages.map((message, idx) => <li key={idx}>{message}</li>)
  }

  render () {
    const entity = this.props.entity

    if (entity && entity.error) {
      return (
        <div className='alert alert-danger'>
          <ul>
            { this.parseErrors(entity.error) }
          </ul>
        </div>
      )
    } else {
      return <span></span>
    }
  }
}


export default Alert
