import api from '../index'

export default async ({ email, password }) => {
  const response = await api.post('auth/sign_in', { email, password })

  console.log(response)
  console.log('le header', response.headers['access-token'])

  return response.data.data
}
