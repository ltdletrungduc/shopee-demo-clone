import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ReactComponent as SvgIcon } from 'assets/images/icon/svg-shopee.svg'
import * as Styled from './styled'

function HeaderAuth({ title }) {
  return (
    <Styled.Header>
      <div className="container">
        <Styled.HeaderBrand>
          <Styled.HeaderIcon to="/">
            <SvgIcon />
          </Styled.HeaderIcon>
          <Styled.HeaderTitle>{title}</Styled.HeaderTitle>
        </Styled.HeaderBrand>
        <Link to="#" className="link">
          Cần trợ giúp
        </Link>
      </div>
    </Styled.Header>
  )
}
HeaderAuth.propTypes = {
  title: PropTypes.string
}
export default HeaderAuth
