/**
 * The external imports
 */
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'

/**
 * The internal imports
 */
import ChangeTheme from './ChangeTheme'

export default buildSlice('theme', [ChangeTheme], {
  darkMode: null,
}).reducer
