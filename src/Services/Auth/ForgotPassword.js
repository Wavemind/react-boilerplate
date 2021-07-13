import api from '../index'

export default async ({ email }) => {
  const result = await api.post('auth/password', {
    email,
  })
  console.log('le result', result)
}
