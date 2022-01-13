import React from 'react'
import { NavLink, useLocation, useResolvedPath } from 'react-router-dom'

export default function CustomNavLink({ to, activeClassName, ...restProps }) {
  // CHANGE ACTIVE to ACTIVED
  let { className, children } = restProps
  let location = useLocation()
  let path = useResolvedPath(to)
  const isActive = () => {
    if (
      path.search === '' &&
      location.search !== '' &&
      location.search.includes(path.search)
    ) {
      return undefined
    }
    return location.search.includes(path.search) ? activeClassName : ''
  }

  return (
    <NavLink
      className={`${className} ${isActive()}`}
      to={to}
      children={children}
      end
    />
  )
}
