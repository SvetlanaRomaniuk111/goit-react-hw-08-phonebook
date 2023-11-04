import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { contactReducer } from './contact/slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authReducer,
  },
});
