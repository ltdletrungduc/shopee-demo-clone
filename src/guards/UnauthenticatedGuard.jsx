import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuthentication } from 'hooks/useAuthentication'
import { path } from 'constants/path'

function UnauthenticatedGuard({ children }) {
  const auth = useAuthentication()
  if (auth) {
    return <Navigate to={path.home} />
  }
  return <>{children}</>
}

UnauthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default UnauthenticatedGuard
