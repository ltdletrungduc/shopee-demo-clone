import React from 'react'
import PropTypes from 'prop-types'

import Footer from 'components/Footer'
import Header from 'components/Header'

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
export default MainLayout
