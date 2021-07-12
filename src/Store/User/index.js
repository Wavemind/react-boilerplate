/**
 * The external imports
 */
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'

/**
 * The internal imports
 */
import NewSession from './NewSession'
import DestroySession from './DestroySession'

const sliceInitialState = {
  item: {},
}

export default buildSlice(
  'user',
  [NewSession, DestroySession],
  sliceInitialState,
).reducer
