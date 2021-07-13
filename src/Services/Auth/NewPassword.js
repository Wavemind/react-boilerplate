import api from '../index'

export default async ({
  password,
  passwordConfirmation,
  accessToken,
  client,
  expiry,
  uid,
}) => {
  localStorage.setItem('access_token', accessToken)
  localStorage.setItem('client', client)
  localStorage.setItem('expiry', expiry)
  localStorage.setItem('uid', uid)

  const response = await api.put('auth/password', {
    password,
    password_confirmation: passwordConfirmation,
  })
  
  return response.data
}
