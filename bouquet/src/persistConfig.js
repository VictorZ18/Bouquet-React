import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';
import weddingReducer from './weddingSlice';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'wedding'], // Specify which slices to persist
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  wedding: weddingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };

