/**
 * The external imports
 */
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

/**
 * The internal imports
 */
import auth from './Auth'
import theme from './Theme'
import user from './User'

const reducers = combineReducers({
  auth,
  theme,
  user,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'user'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export { store, persistor }
