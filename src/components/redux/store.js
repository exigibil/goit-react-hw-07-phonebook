import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice'; 
import { filterReducer } from './filterSlice';     

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

});

export const persistor = persistStore(store);
