import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { teachersReducer } from './teachersSlice';
import { favoriteReducer } from './favoritesSlice';
import { filtersReducer } from './filtersSlice';
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

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    filter: filtersReducer,
    favorites: persistReducer(persistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);