/**
 * The external imports
 */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    minWidth: '25vw',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default useStyles
