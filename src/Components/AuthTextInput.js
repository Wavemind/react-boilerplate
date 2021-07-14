/**
 * The external imports
 */
import TextField from '@material-ui/core/TextField'

import { withStyles } from '@material-ui/core/styles'

export default withStyles({
  root: {
    '&  .MuiFilledInput-underline:after': {
      border: 0,
    },
    '& .MuiInputBase-input': {
      padding: 20,
    },
  },
})(TextField)
