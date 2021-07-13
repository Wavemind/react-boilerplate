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

const sliceInitialState = {
  item: {},
}

export default buildSlice(
  'auth',
  [NewSession, DestroySession, ForgotPassword],
  sliceInitialState,
).reducer
