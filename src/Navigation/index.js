/**
 * The external imports
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

/**
 * The internal imports
 */
import HomePage from '../Pages'
import SignInPage from '../Pages/Auth/SignIn'
import ForgotPassword from '../Pages/Auth/ForgotPassword'
import NewPassword from '../Pages/Auth/NewPassword'
import NotFoundPage from '../Pages/NotFoundPage'
import { withAdminLayout, withAuthLayout } from '../Layouts/index'

function Navigation() {
  return (
    <Switch>
      <Route exact path="/" component={withAdminLayout(HomePage)} />
      <Route
        exact
        path="/auth/sign-in"
        component={withAuthLayout(SignInPage)}
      />
      <Route
        exact
        path="/auth/forgot-password"
        component={withAuthLayout(ForgotPassword)}
      />
      <Route
        exact
        path="/auth/new-password"
        component={withAuthLayout(NewPassword)}
      />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default Navigation
