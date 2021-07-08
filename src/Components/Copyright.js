/**
 * The external imports
 */
import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { Favorite } from '@material-ui/icons'

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      Coded with
      <Favorite color="error" />
      by{' '}
      <Link color="inherit" href="https://material-ui.com/">
        Wavemind Sàrl
      </Link>
      {' - '}
      {'Copyright © '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
export default Copyright
