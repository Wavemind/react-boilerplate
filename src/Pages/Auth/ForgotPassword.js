/**
 * The external imports
 */
import React, { useEffect } from 'react'

import { Button, TextField, Typography, Grid, Box } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { isFulfilled } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom'
import { useSnackbar } from 'notistack'

/**
 * The internal imports
 */
import ForgotPasswordAuth from '../../Store/Auth/ForgotPassword'
import ClearAuth from '../../Store/Auth/Clear'
import useStyles from '../../Theme/Pages/Auth/SignIn'
import { Link } from '../../Components'

const ForgotPassword = () => {
  const { enqueueSnackbar } = useSnackbar()
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

  useEffect(() => {
    forgotPasswordError &&
      enqueueSnackbar(forgotPasswordError.message, { variant: 'error' })
  }, [forgotPasswordError])

  useEffect(() => {
    forgotPassword.message &&
      enqueueSnackbar(forgotPassword.message, { variant: 'success' })
  }, [forgotPassword])

  const onSubmit = async ({ email }) => {
    const forgotPasswordResult = await dispatch(
      ForgotPasswordAuth.action({ email }),
    )

    if (isFulfilled(forgotPasswordResult)) {
      setTimeout(async () => {
        await dispatch(ClearAuth.action())
        history.push('/auth/sign-in')
      }, 5000)
    }
  }

  return (
    <div>
      <Typography component="h1" variant="h5" align="center">
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

        {forgotPassword.message && (
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
          disabled={forgotPasswordLoading}
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

export default ForgotPassword
