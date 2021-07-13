/**
 * The external imports
 */
import React from 'react'

import {
  Button,
  TextField,
  Typography,
  Box,
  Grid,
  Link,
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { isFulfilled } from '@reduxjs/toolkit'
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import NewSessionAuth from '../../Store/Auth/NewSession'
import useStyles from '../../Theme/Pages/Auth/SignIn'

export default function SignIn() {
  const classes = useStyles()
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const history = useHistory()
  const location = useLocation()

  // Get values from the store
  const newSessionError = useSelector(state => state.auth.newSession.error)
  const newSessionLoading = useSelector(state => state.auth.newSession.loading)

  const onSubmit = async ({ email, password }) => {
    // Dispatches the user information to open a new session
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
      <img
        className={classes.logo}
        src={process.env.PUBLIC_URL + '/logo/logo-black-sentence.svg'}
      />
      <Typography component="h1" variant="h5">
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
              variant="outlined"
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
              variant="outlined"
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
          disabled={newSessionLoading}
          className={classes.submit}
        >
          {t('actions.login')}
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="forgot-password" variant="body2">
              {t('pages.auth.sign_in.forgot_password')}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
