import api from '../index'

export default async () => {
  console.log("j'arrive ici")
  await api.delete('auth/sign_out')

  // Destroy credentials
  localStorage.removeItem('access_token')
  localStorage.removeItem('client')
  localStorage.removeItem('expiry')
  localStorage.removeItem('uid')

  return {}
}
