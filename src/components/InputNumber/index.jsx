import React from 'react'
import PropTypes from 'prop-types'
function InputNumber({ onChange, value, onBlur, ...restProps }) {
  const handleChange = event => {
    const value = event.target.value
    const regex = /^\d+$/
    if ((regex.test(value) || value === '') && onChange) {
      onChange(value)
    }
  }

  const handleBlur = event => {
    const _value = event.target.value
    onBlur && onBlur(_value)
  }
  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      onBlur={handleBlur}
      {...restProps}
    />
  )
}

InputNumber.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default InputNumber
