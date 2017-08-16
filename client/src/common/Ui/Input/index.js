import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    divClasses: PropTypes.string,
    error: PropTypes.string
  }

  render () {
    const { input, label, type, meta: { touched, error, invalid, warning } } = this.props

    const divClasses = classnames({
      'form-group': true,
      'has-error': touched & invalid ? true : false
    })

    return (
      <div className={divClasses}>
        <label className='col-md-2 control-label'>{label}</label>
        <div className='col-md-10'>
          <input
            {...input}
            type={type}
            className='form-control'
          />
          <div className='help-block'>
            { touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>)) }
          </div>
        </div>
      </div>
    )
  }
}


export default Input
