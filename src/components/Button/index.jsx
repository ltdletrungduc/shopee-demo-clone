import React from 'react'
import * as Styled from './styled'
function Button({ children, ...restProps }) {
  return <Styled.Button {...restProps}>{children}</Styled.Button>
}

export default Button
