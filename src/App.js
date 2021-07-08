/**
 * The external imports
 */
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

/**
 * The internal imports
 */
import Theme from './Theme'
import Layout from './Layouts'
import { store, persistor } from './Store'
import Navigation from './Config/Navigation'

const theme = createTheme(Theme('light'))

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Navigation />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
