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
    rootLogin: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.secondary.main,
      minHeight: '100vh',
    },
    headerLogin: {
      backgroundColor: theme.palette.primary.main,
      height: '40vh',
      width: '100%',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 0,
      top: 0,
    },
    content: {
      flexGrow: 1,
      overflow: 'auto',
      display: 'flex',
    },
    contentAuth: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    auth: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      backgroundColor: theme.palette.light,
      padding: theme.spacing(4),
    },
    logo: {
      marginBottom: theme.spacing(12),
      maxWidth: 500,
      margin: theme.spacing(4),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: 'transparent',
      color: theme.palette.secondary,
    },
  }
})
export default useStyles
