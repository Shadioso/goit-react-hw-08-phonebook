import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer';
import { cotactsReducer } from './contactsReducer';
import { authReducer } from './authReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer.reducer);

export const store = configureStore({
  reducer: {
    // auth: authReducer.reducer,
    auth: persistedReducer,
    contacts: cotactsReducer.reducer,
    filter: filterReducer.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
