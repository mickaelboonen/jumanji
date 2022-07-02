import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'src/reducers/app';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
