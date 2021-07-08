import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Theme from './Theme'
import Layout from './Layouts'
import { store, persistor } from './Store'
import HomePage from './App/Pages/index'
import NotFoundPage from './App/Pages/NotFoundPage/index'
const theme = createTheme(Theme('light'))

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/'}
                  component={HomePage}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
