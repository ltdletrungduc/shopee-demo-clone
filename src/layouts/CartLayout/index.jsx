import React from 'react'
import PropTypes from 'prop-types'
import HeaderCart from 'components/HeaderCart'
import Footer from 'components/Footer'

function CartLayout({ children }) {
  return (
    <div>
      <HeaderCart />
      {children}
      <Footer />
    </div>
  )
}

CartLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default CartLayout
