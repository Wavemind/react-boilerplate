/**
 * The internal imports
 */
import React from 'react'
import { withRouter } from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

/**
 * The external imports
 */
import useStyles from '../Theme/Layouts/Auth'
import { Copyright } from '../Components'

const SignIn = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.auth}>{children}</div>
      </main>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  )
}

export default withRouter(SignIn)
