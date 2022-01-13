import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'

function ProductQuantityController({
  value,
  maxValue,
  onChange,
  onIncrease,
  onDecrease,
  onInput,
  onBlur,
  disabled
}) {
  const handleChange = value => {
    let _value = Number(value)
    if (_value > maxValue) {
      _value = maxValue
    } else if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
    onInput && onInput(_value)
  }

  const increase = () => {
    let _value = Number(value) + 1
    if (_value > maxValue) {
      _value = maxValue
    }
    onChange && onChange(_value)
    onIncrease && onIncrease(_value)
  }

  const decrease = () => {
    let _value = Number(value) - 1
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
    onDecrease && onDecrease(_value)
  }

  const handleBlur = value => {
    onBlur && onBlur(Number(value))
  }
  return (
    <Styled.ProductQuantityController>
      <Styled.ProductQuantityButton
        onClick={() => {
          !disabled && decrease()
        }}
        disabled={disabled}
      >
        <MinusIcon />
      </Styled.ProductQuantityButton>
      <Styled.ProductQuantityInput
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <Styled.ProductQuantityButton
        onClick={() => {
          !disabled && increase()
        }}
        disabled={disabled}
      >
        <PlusIcon />
      </Styled.ProductQuantityButton>
    </Styled.ProductQuantityController>
  )
}

const MinusIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 10 10"
      viewBox="0 0 10 10"
      x={0}
      y={0}
      className="icon-minus-sign"
    >
      <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
    </svg>
  )
}
const PlusIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 10 10"
      viewBox="0 0 10 10"
      x={0}
      y={0}
      className="icon-plus-sign"
    >
      <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
    </svg>
  )
}

ProductQuantityController.propTypes = {
  onChange: PropTypes.func,
  maxValue: PropTypes.number,
  value: PropTypes.number
}
export default ProductQuantityController
