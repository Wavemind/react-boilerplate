/**
 * The external imports
 */
import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'

/**
 * The internal imports
 */
import { ForgotPasswordAuthService } from '../../Services/Auth'

export default {
  initialState: buildAsyncState('forgotPassword'),
  action: buildAsyncActions('auth/forgotPassword', ForgotPasswordAuthService),
  reducers: buildAsyncReducers({
    errorKey: 'forgotPassword.error',
    loadingKey: 'forgotPassword.loading',
  }),
}
