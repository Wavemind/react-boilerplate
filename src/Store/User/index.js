/**
 * The external imports
 */
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'

/**
 * The internal imports
 */
import NewSession from './NewSession'

const sliceInitialState = {
  item: {},
}

export default buildSlice('user', [NewSession], sliceInitialState).reducer
