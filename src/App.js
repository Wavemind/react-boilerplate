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

const theme = createTheme(Theme('light'))

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            TransitionComponent={Slide}
            maxSnack={3}
            dense={false}
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
