import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footerText: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    color: theme.palette.grey[200],
  },
}))
export default useStyles
