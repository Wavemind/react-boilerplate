/**
 * The external imports
 */
import axios from 'axios'

/**
 * The internal imports
 */
import { Config } from '../Config'

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

/**
 * Handles the error returned from the api
 * @param message
 * @param data
 * @param status
 * @returns {Promise<unknown>}
 */
export const handleError = ({ message, data, status }) =>
  Promise.reject({ message, data, status })

instance.interceptors.request.use(
  async config => {
    config.baseURL = Config.URL_DEV_API
    return config
  },
  error => {
    console.log('error request', error)
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
instance.interceptors.response.use(
  response =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  async error => {
    if (error.response) {
      const originalRequest = error.config
      console.log('originalRequest._retry=', originalRequest._retry)

      // Default response
      let errorMessage = `Response status code <> 200 (${error.message})`

      // Response given by the application
      if (error.response.data.errors) {
        if (Array.isArray(error.response.data.errors)) {
          errorMessage = error.response.data.errors[0]
        } else {
          errorMessage = error.response.data.errors
        }
      }

      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return handleError({
        message: errorMessage,
        status: error.response.status,
        data: error.response.data,
      })
    }
    if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js

      return handleError({
        message: `No response received (${error.message})`,
      })
    }
    // Something happened in setting up the request that triggered an Error
    return handleError({
      message: `Unknown error (${error.message})`,
    })
  },
)

export default instance
