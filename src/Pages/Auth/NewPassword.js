/**
 * The external imports
 */
import React from 'react'

import { Button, TextField, Typography, Box } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useLocation, useHistory } from 'react-router-dom'
import { isFulfilled } from '@reduxjs/toolkit'

/**
 * The internal imports
 */
import NewPasswordAuth from '../../Store/Auth/NewPassword'
import useStyles from '../../Theme/Pages/Auth/SignIn'

const NewPassword = () => {
  const classes = useStyles()
  const history = useHistory()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm()
  const params = new URLSearchParams(useLocation().search)

  // Get values from the store
  const newPasswordError = useSelector(state => state.auth.newPassword.error)
  const newPassword = useSelector(state => state.auth.item)
  const newPasswordLoading = useSelector(
    state => state.auth.newPassword.loading,
  )

  const onSubmit = async ({ password, passwordConfirmation }) => {
    const newPasswordResult = await dispatch(
      NewPasswordAuth.action({
        password,
        passwordConfirmation,
        accessToken: params.get('access-token'),
        uid: params.get('uid'),
        expiry: params.get('expiry'),
        client: params.get('client'),
      }),
    )

    if (isFulfilled(newPasswordResult)) {
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
        {t('pages.auth.new_password.title')}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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

        <Controller
          name="passwordConfirmation"
          control={control}
          defaultValue={process.env.NODE_ENV === 'development' && '123456'}
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordConfirmation"
              label={t('user.password_confirmation')}
              type="password"
              id="passwordConfirmation"
              {...field}
            />
          )}
        />

        {newPassword.message && (
          <Typography component="div" variant="body1">
            <Box mt={2} display="flex" justifyContent="center">
              {newPassword.message}
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
              {t('pages.auth.redirection')}
            </Box>
          </Typography>
        )}

        {newPasswordError && (
          <Typography component="div" variant="body1">
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
              color="error.main"
            >
              {newPasswordError.message}
            </Box>
          </Typography>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={newPasswordLoading}
          className={classes.submit}
        >
          {t('actions.send')}
        </Button>
      </form>
    </div>
  )
}

export default NewPassword
