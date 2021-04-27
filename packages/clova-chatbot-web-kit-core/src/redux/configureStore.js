import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import multi from 'redux-multi'
import storage from 'redux-persist/lib/storage/session'
import rootReducer from './modules/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app'],
}

export default function configureAppStore(preloadedState) {
  const persistedReducer = persistReducer(persistConfig, rootReducer())
  const middlewares = [multi]

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(...middlewares),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  })

  const persistor = persistStore(store)

  return { store, persistor }
}
