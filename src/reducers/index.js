import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import playerReducer from './player';

const rootReducer = combineReducers({
  app: appReducer,
  player: playerReducer,
});

export default rootReducer;
