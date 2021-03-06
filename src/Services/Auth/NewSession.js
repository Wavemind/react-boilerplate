/**
 * The internal imports
 */
import api from '../index'
import AddUser from '../../Store/User/Add'

export default async ({ email, password }, { dispatch }) => {
  const response = await api.post('auth/sign_in', { email, password })

  // Store credentials
  localStorage.setItem('access_token', response.headers['access-token'])
  localStorage.setItem('client', response.headers.client)
  localStorage.setItem('expiry', response.headers.expiry)
  localStorage.setItem('uid', response.headers.uid)

  await dispatch(AddUser.action(response.data.data))

  return {}
}
