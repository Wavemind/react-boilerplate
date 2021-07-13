/**
 * The external imports
 */
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Slide from '@material-ui/core/Slide'
/**
 * The internal imports
 */
import Theme from './Theme'
import { store, persistor } from './Store'
import Navigation from './Navigation'
import useStyles from './Theme/Components/Snackbar'

const theme = createTheme(Theme('light'))

function App() {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            classes={{
              root: classes.snackContainer,
            }}
            TransitionComponent={Slide}
            maxSnack={3}
          >
            <ThemeProvider theme={theme}>
              <Navigation />
            </ThemeProvider>
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
