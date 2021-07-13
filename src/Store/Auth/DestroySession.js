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
import { DestroySessionAuthService } from '../../Services/Auth'

export default {
  initialState: buildAsyncState('destroySession'),
  action: buildAsyncActions('auth/destroySession', DestroySessionAuthService),
  reducers: buildAsyncReducers({
    errorKey: 'destroySession.error',
    loadingKey: 'destroySession.loading',
  }),
}
