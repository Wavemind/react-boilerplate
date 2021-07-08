import React from 'react'
import Admin from './Admin'
import Auth from './Auth'

const Layout = props => (true ? <Admin {...props} /> : <Auth {...props} />)

export default Layout
