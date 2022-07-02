import { combineReducers } from 'redux';
// on importe tous les reducers
import appReducer from './app';
import otherReducer from './other';

const rootReducer = combineReducers({
  app: appReducer,
  user: otherReducer,
});

export default rootReducer;
