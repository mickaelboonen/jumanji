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
    setNewFoe: (state) => {
      // Generates a random index from the dangers array in the state
      const index = Math.floor(Math.random() * state.dangers.length);

      // Gets the new danger associated to the index
      const newDanger = state.dangers[index];
      
      // Returns a new array without the new danger
      const newDangersArray = state.dangers.map((currentDanger) => {
        if (currentDanger.beast !== newDanger.beast) {
          return currentDanger;
        }
      });
      
      // Returns an array without undefined entries
      const newDangersFilteredArray = newDangersArray.filter((danger) => danger !== undefined);


      state.currentDanger = newDanger;
      state.dangers = newDangersFilteredArray;
    },
  },
});


export const { showDiceResults, setNewFoe } = appSlice.actions;
export default appSlice.reducer;
