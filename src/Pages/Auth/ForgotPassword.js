/**
 * The external imports
 */
import React from 'react'

import { Button, TextField, Typography, Box } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { isFulfilled } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom'

/**
 * The internal imports
 */
import ForgotPasswordAuth from '../../Store/Auth/ForgotPassword'
import useStyles from '../../Theme/Pages/Auth/SignIn'

const ForgotPassword = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { control, handleSubmit } = useForm()

  // Get values from the store
  const forgotPasswordError = useSelector(
    state => state.auth.forgotPassword.error,
  )
  const forgotPasswordLoading = useSelector(
    state => state.auth.forgotPassword.loading,
  )

  const forgotPassword = useSelector(state => state.auth.item)

  const onSubmit = async ({ email }) => {
    const forgotPasswordResult = await dispatch(
      ForgotPasswordAuth.action({ email }),
    )

    if (isFulfilled(forgotPasswordResult)) {
      setTimeout(() => {
        history.push('/auth/sign-in')
      }, 5000)
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

        {forgotPassword.message && (
          <Typography component="div" variant="body1">
            <Box mt={2} display="flex" justifyContent="center">
              {forgotPassword.message}
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
              {t('pages.auth.redirection')}
            </Box>
          </Typography>
        )}

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
          {t('actions.send')}
        </Button>
      </form>
    </div>
  )
}

export default ForgotPassword
