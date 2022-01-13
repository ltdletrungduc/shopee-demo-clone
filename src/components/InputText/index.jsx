import React, { useState } from 'react'
import * as Styled from './styled'

export default function InputText({ ...restProps }) {
  const [focus, setFocus] = useState(false)

  return (
    <Styled.Container focus={focus}>
      <input
        {...restProps}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Styled.Container>
  )
}
