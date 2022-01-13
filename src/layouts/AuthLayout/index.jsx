import React from 'react'
import PropTypes from 'prop-types'

import Footer from 'components/Footer'
import HeaderAuth from 'components/HeaderAuth'

function AuthLayout({ children, title }) {
  return (
    <div>
      <HeaderAuth title={title} />
      {children}
      <Footer />
    </div>
  )
}
AuthLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
export default AuthLayout
