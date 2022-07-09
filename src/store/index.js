import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'src/reducers/app';
import playerReducer from 'src/reducers/player';

export const store = configureStore({
  reducer: {
    app: appReducer,
    player: playerReducer,
  },
});

export default store;
