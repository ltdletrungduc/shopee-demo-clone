import React from 'react'
import * as S from './styled'
import PropTypes from 'prop-types'

function Select({
  onChange,
  value = '',
  title,
  options = [],
  titleValue = '',
  ...restProps
}) {
  const handleChange = event => {
    const _value = event.target.value
    onChange && onChange(_value)
  }

  return (
    <S.Select onChange={handleChange} value={value} {...restProps}>
      <option disabled value={titleValue}>
        {title}
      </option>
      {options.map(({ name, value }, index) => (
        <option value={value} key={index}>
          {name}
        </option>
      ))}
    </S.Select>
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  titleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Select
