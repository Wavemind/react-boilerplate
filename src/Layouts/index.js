/**
 * The external imports
 */
import React from 'react'

/**
 * The internal imports
 */
import Admin from './Admin'
import Auth from './Auth'

const Layout = props => (true ? <Admin {...props} /> : <Auth {...props} />)

export default Layout
