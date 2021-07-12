/**
 * The external imports
 */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    content: {
      flexGrow: 1,
      overflow: 'auto',
      display: 'flex',
    },
    auth: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: 'transparent',
      color: theme.palette.grey,
    },
  }
})
export default useStyles
