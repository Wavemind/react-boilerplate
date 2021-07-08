/**
 * The internal imports
 */
import React from 'react'
import { withRouter } from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

/**
 * The external imports
 */
import useStyles from '../Theme/Layouts/Admin'
import { Copyright } from '../Components'

const SignIn = ({ children }) => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>{children}</div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default withRouter(SignIn)
