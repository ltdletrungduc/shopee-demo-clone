import React from 'react'
import * as Styled from './styled'
import PropTypes from 'prop-types'
function CustomCheckbox({ onChange, checked, ...restProps }) {
  const handleChange = event => {
    const value = event.target.checked
    onChange && onChange(value)
  }
  return (
    <Styled.CustomCheckbox>
      <Styled.CheckboxInput
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        {...restProps}
      />
      <Styled.CheckboxBox />
    </Styled.CustomCheckbox>
  )
}

CustomCheckbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool
}
export default CustomCheckbox
