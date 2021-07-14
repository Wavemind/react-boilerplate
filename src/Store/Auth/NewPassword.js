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
import { NewPasswordAuthService } from '../../Services/Auth'

export default {
  initialState: buildAsyncState('newPassword'),
  action: buildAsyncActions('auth/newPassword', NewPasswordAuthService),
  reducers: buildAsyncReducers({
    errorKey: 'newPassword.error',
    loadingKey: 'newPassword.loading',
  }),
}
