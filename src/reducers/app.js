import { createSlice } from '@reduxjs/toolkit';

import { jumanji } from '../data/jumanjiRiddles';

const initialState = {
  diceResults: 0,
  name: 'Jumanji',
  currentDanger: {},
  dangers: jumanji,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showDiceResults(state, action) {
      state.diceResults = action.payload;
    },
    setNewFoe: (state, action) => {
      console.log(state, action);
      const newFoeIndex = Math.floor(Math.random() * jumanji.length);
      const newDanger = initialState.dangers[newFoeIndex];
      const newDangersArray = initialState.dangers.slice(newFoeIndex);
      console.log(initialState.dangers.length, newDangersArray.length);



      state.currentDanger = newDanger;
      state.dangers = newDangersArray;
    },
  },
});

console.log(appSlice.actions, appSlice);
export const { showDiceResults, setNewFoe } = appSlice.actions;
export default appSlice.reducer;
