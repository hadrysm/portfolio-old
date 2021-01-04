import React from 'react'

import PropTypes from 'prop-types'
import Logo from 'components/atoms/Logo/Logo'

const Layout = ({ children }) => (
  <>
    <Logo />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Layout
