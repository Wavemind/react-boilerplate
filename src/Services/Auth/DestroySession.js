/**
 * The internal imports
 */
import api from '../index'
import RemoveUser from '../../Store/User/Remove'

export default async ({}, { dispatch }) => {
  await api.delete('auth/sign_out')

  // Destroy credentials
  localStorage.removeItem('access_token')
  localStorage.removeItem('client')
  localStorage.removeItem('expiry')
  localStorage.removeItem('uid')

  await dispatch(RemoveUser.action())

  return {}
}
