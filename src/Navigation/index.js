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
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default Navigation
