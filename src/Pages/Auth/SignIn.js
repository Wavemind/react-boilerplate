/**
 * The external imports
 */
import React, { useEffect } from 'react'

import { Button, TextField, Typography, Box, Grid } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { isFulfilled } from '@reduxjs/toolkit'
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'

/**
 * The internal imports
 */
import NewSessionAuth from '../../Store/Auth/NewSession'
import useStyles from '../../Theme/Pages/Auth/SignIn'
import { Link } from '../../Components'

const SignIn = () => {
  const { enqueueSnackbar } = useSnackbar()
  const classes = useStyles()
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const history = useHistory()
  const location = useLocation()

  // Get values from the store
  const newSessionError = useSelector(state => state.auth.newSession.error)
  const newSessionLoading = useSelector(state => state.auth.newSession.loading)

  useEffect(() => {
    newSessionError &&
      enqueueSnackbar(newSessionError.message, { variant: 'error' })
  }, [newSessionError])

  // Dispatches the user information to open a new session
  const onSubmit = async ({ email, password }) => {
    const newSessionAuth = await dispatch(
      NewSessionAuth.action({ email, password }),
    )

    if (isFulfilled(newSessionAuth)) {
      let { from } = location.state || { from: { pathname: '/' } }
      history.replace(from)
    }
  }

  return (
    <div>
      <Typography component="h1" variant="h5" align="center">
        {t('pages.auth.sign_in.title')}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue={
            process.env.NODE_ENV === 'development' && 'dev@wavemind.ch'
          }
          render={({ field }) => (
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('user.email')}
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
          defaultValue={process.env.NODE_ENV === 'development' && '123456'}
          render={({ field }) => (
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label={t('user.password')}
              type="password"
              id="password"
              autoComplete="current-password"
              {...field}
            />
          )}
        />

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          size="large"
          disabled={newSessionLoading}
          className={classes.submit}
        >
          {t('actions.login')}
        </Button>

        <Grid container>
          <Grid item xs>
            <Link to="forgot-password" variant="body2">
              {t('pages.auth.sign_in.forgot_password')}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default SignIn
