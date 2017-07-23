import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  divClasses: PropTypes.string,
  error: PropTypes.string
}

class Input extends Component {
  constructor (props) {
    super(props)

    const { value } = this.props
    this.state = { value }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { value } = event.target

    this.props.onChange(value)
    this.setState({value})
  }

  render () {
    const divClasses = classnames({
      'form-group': true,
      'has-error': this.props.error ? true : false
    })

    const { value } = this.props

    return (
      <div className={divClasses}>
        <input
          type='text'
          value={value}
          className='form-control'
          onChange={this.handleChange}
        />
        { this.props.error ? <span className='help-block'>{this.props.error}</span> : null }
      </div>
    )
  }
}

Input.propTypes = propTypes

export default Input
