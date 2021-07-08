/**
 * The external imports
 */
import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { isFulfilled } from '@reduxjs/toolkit'
import Box from '@material-ui/core/Box'

/**
 * The internal imports
 */
import NewSessionUser from '../../Store/User/NewSession'
import useStyles from '../../Theme/Pages/Auth/SignIn'

export default function SignIn() {
  const classes = useStyles()
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()

  // Get values from the store
  const newSessionError = useSelector(state => state.user.newSession.error)

  const onSubmit = async data => {
    // Dispatches the user information to open a new session
    const newSessionUser = await dispatch(
      NewSessionUser.action({ email: data.email, password: data.password }),
    )

    if (isFulfilled(newSessionUser)) {
      console.log("j'ai réussi")
    }
  }

  return (
    <div>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...field}
            />
          )}
        />

        {newSessionError && (
          <Typography component="div" variant="body1">
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
              color="error.main"
            >
              {newSessionError.message}
            </Box>
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
