/**
 * The external imports
 */
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#eec664',
      main: '#eab83e',
      dark: '#a3802b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5d5d5d',
      main: '#353535',
      dark: '#252525',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
  },
})
export default theme
