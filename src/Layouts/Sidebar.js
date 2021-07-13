/**
 * The external imports
 */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  List,
  Divider,
} from '@material-ui/core'

import {
  Dashboard,
  People,
  BarChart,
  Layers,
  ExitToApp,
  ShoppingCart,
} from '@material-ui/icons'

/**
 * The internal imports
 */
import DestroySessionAuth from '../Store/Auth/DestroySession'

const Sidebar = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()

  const logout = () => {
    dispatch(DestroySessionAuth.action({}))
  }

  return (
    <div>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Layers />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader inset>{t('side_bar.title')}</ListSubheader>
        <ListItem button onClick={logout}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary={t('side_bar.logout')} />
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar
