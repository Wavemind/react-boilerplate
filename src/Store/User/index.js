/**
 * The external imports
 */
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'

/**
 * The internal imports
 */
import Add from './Add'
import Remove from './Remove'

export default buildSlice('user', [Add, Remove], {
  item: {},
}).reducer
