import React from 'react'
import * as Styled from './styled'
import PropTypes from 'prop-types'
function Popover({ children, active }) {
  return (
    <>
      {active && (
        <Styled.Popover>
          <Styled.PopoverArrow />
          <Styled.PopoverContent>{children}</Styled.PopoverContent>
        </Styled.Popover>
      )}
    </>
  )
}

Popover.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
export default Popover
