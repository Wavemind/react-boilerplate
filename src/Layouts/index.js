/**
 * The external imports
 */
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

/**
 * The internal imports
 */
import Admin from './Admin'
import Auth from './Auth'

export const withAdminLayout = Component => props => {
  const currentUser = useSelector(state => state.user.item)

  return currentUser.id ? (
    <Admin>
      {/* All props are passed through to the Component being wrapped */}
      <Component {...props} />
    </Admin>
  ) : (
    <Redirect
      to={{
        pathname: '/auth/sign-in',
        state: { from: props.location },
      }}
    />
  )
}

export const withAuthLayout = Component => props =>
  (
    <Auth>
      {/* All props are passed through to the Component being wrapped */}
      <Component {...props} />
    </Auth>
  )
