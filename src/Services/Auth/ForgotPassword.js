import api from '../index'

export default async ({ email }) => {
  const response = await api.post('auth/password', {
    email,
    redirect_url: 'http://localhost:3001/auth/new-password',
  })

  return response.data
}
