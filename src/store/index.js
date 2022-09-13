import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'src/reducers/app';
import formReducer from 'src/reducers/form';
import playerReducer from 'src/reducers/player';

export const store = configureStore({
  reducer: {
    app: appReducer,
    form: formReducer,
    player: playerReducer,
  },
});

export default store;
