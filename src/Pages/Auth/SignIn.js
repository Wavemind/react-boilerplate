/**
 * The external imports
 */
import React from 'react'

import { Button, TextField, Typography, Box } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { isFulfilled } from '@reduxjs/toolkit'
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import NewSessionUser from '../../Store/User/NewSession'
import useStyles from '../../Theme/Pages/Auth/SignIn'

export default function SignIn() {
  const classes = useStyles()
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const history = useHistory()
  const location = useLocation()

  // Get values from the store
  const newSessionError = useSelector(state => state.user.newSession.error)
  const newSessionLoading = useSelector(state => state.user.newSession.loading)

  const onSubmit = async data => {
    // Dispatches the user information to open a new session
    const newSessionUser = await dispatch(
      NewSessionUser.action({ email: data.email, password: data.password }),
    )

    if (isFulfilled(newSessionUser)) {
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
              label={t('pages.auth.sign_in.email')}
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
              label={t('pages.auth.sign_in.password')}
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
          variant="outlined"
          size="large"
          disabled={newSessionLoading}
          className={classes.submit}
        >
          {t('pages.auth.sign_in.login')}
        </Button>
      </form>
    </div>
  )
}
