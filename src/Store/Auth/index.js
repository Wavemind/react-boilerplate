/**
 * The external imports
 */
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'

/**
 * The internal imports
 */
import NewSession from './NewSession'
import DestroySession from './DestroySession'
import ForgotPassword from './ForgotPassword'
import NewPassword from './NewPassword'

const sliceInitialState = {
  item: {},
}

export default buildSlice(
  'auth',
  [NewSession, DestroySession, ForgotPassword, NewPassword],
  sliceInitialState,
).reducer
