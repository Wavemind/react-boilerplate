/**
 * The external imports
 */
import React from 'react'
import { withRouter } from 'next/router'
import clsx from 'clsx'
import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
} from '@material-ui/core'
import { Notifications, ChevronLeft, Menu } from '@material-ui/icons'

/**
 * The internal imports
 */
import { mainListItems, secondaryListItems } from './Sidebar'
import useStyles from '../Theme/Layouts/Admin'
import { Copyright } from '../Components'

const Admin = ({ children }) => {
  const classes = useStyles()
  console.log(classes)
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.mainWrapper}>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden,
              )}
            >
              <Menu />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {children}
            </Grid>
          </Container>
        </main>
      </div>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  )
}

export default withRouter(Admin)
