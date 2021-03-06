/**
 * The external imports
 */
import React, { useEffect } from 'react'

import { Button, Typography, Box, Grid } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useLocation, useHistory } from 'react-router-dom'
import { isFulfilled } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'

/**
 * The internal imports
 */
import NewPasswordAuth from '../../Store/Auth/NewPassword'
import ClearAuth from '../../Store/Auth/Clear'
import useStyles from '../../Theme/Pages/Auth/SignIn'
import { Link, AuthTextInput } from '../../Components'

const NewPassword = () => {
  const { enqueueSnackbar } = useSnackbar()
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

  useEffect(() => {
    if (newPasswordError?.message) {
      if (newPasswordError.message.full_messages) {
        enqueueSnackbar(newPasswordError.message.full_messages[0], {
          variant: 'error',
        })
      } else {
        enqueueSnackbar(newPasswordError.message, { variant: 'error' })
      }
    }
  }, [newPasswordError])

  useEffect(() => {
    newPassword.message &&
      enqueueSnackbar(newPassword.message, { variant: 'success' })
  }, [newPassword])

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
      setTimeout(async () => {
        await dispatch(ClearAuth.action())
        history.push('/auth/sign-in')
      }, 5000)
    }
  }

  return (
    <div>
      <Typography component="h1" variant="h5" align="center">
      <Box mb={4}>{t('pages.auth.new_password.title')}</Box>
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="password"
          control={control}
          defaultValue={process.env.NODE_ENV === 'development' && '123456'}
          render={({ field }) => (
            <AuthTextInput
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder={t('user.password')}
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
            <AuthTextInput
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="passwordConfirmation"
              placeholder={t('user.password_confirmation')}
              type="password"
              id="passwordConfirmation"
              {...field}
            />
          )}
        />

        {newPassword.message && (
          <Typography component="div" variant="body1">
            <Box mt={2} display="flex" justifyContent="center">
              {t('pages.auth.redirection')}
            </Box>
          </Typography>
        )}

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          size="large"
          disabled={newPasswordLoading}
          className={classes.submit}
        >
          {t('actions.send')}
        </Button>

        <Grid container>
          <Grid item xs>
            <Link to="sign-in" variant="body2">
              {t('pages.auth.sign_in_url')}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default NewPassword
