// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>; // Definición de RootState
export type AppDispatch = typeof store.dispatch;

export default store;
