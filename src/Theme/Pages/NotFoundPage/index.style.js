import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '88vh',
  },
  title: {
    fontSize: 100,
  },
  subtitle: {
    fontSize: 30,
  },
}))
export default useStyles
