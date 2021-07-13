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
import ForgotPasswordAuth from '../../../Store/Auth/ForgotPassword'
import useStyles from '../../../Theme/Pages/Auth/SignIn'

export default function ForgotPassword() {
  const classes = useStyles()
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const history = useHistory()
  const location = useLocation()

  // Get values from the store
  const forgotPasswordError = useSelector(
    state => state.auth.forgotPassword.error,
  )
  const forgotPasswordLoading = useSelector(
    state => state.auth.forgotPassword.loading,
  )

  const onSubmit = async data => {
    const forgotPasswordUser = await dispatch(
      ForgotPasswordAuth.action({ email: data.email }),
    )

    if (isFulfilled(forgotPasswordUser)) {
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
        {t('pages.auth.forgot_password.title')}
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

        {forgotPasswordError && (
          <Typography component="div" variant="body1">
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
              color="error.main"
            >
              {forgotPasswordError.message}
            </Box>
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={forgotPasswordLoading}
          className={classes.submit}
        >
          {t('pages.auth.forgot_password.send')}
        </Button>
      </form>
    </div>
  )
}
