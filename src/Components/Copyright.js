/**
 * The external imports
 */
import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { Favorite } from '@material-ui/icons'

import useStyles from '../Theme/Components/Copyright'

function Copyright() {
  const classes = useStyles()
  return (
    <Typography
      variant="body1"
      align="center"
      classes={{ body1: classes.footerText }}
    >
      Coded with
      <Favorite color="error" />
      by{' '}
      <Link color="inherit" href="https://wavemind.ch/">
        Wavemind Sàrl
      </Link>
      {' - '}
      {'Copyright © '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
export default Copyright
