import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import ChangeTheme from './ChangeTheme'

export default buildSlice('theme', [ChangeTheme], {
  darkMode: null,
}).reducer
