import { createSlice } from '@reduxjs/toolkit';

import { jumanji } from '../data/jumanjiRiddles';
import { setNewHistory } from 'src/selectors/reducerFunctions';

const initialState = {
  diceResults: 0,
  name: 'Jumanji',
  currentDanger: {},
  dangers: jumanji,
  history: [],
  hasGameBegun: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showDiceResults(state, action) {
      state.diceResults = action.payload;

      if (!state.hasGameBegun) {
        state.hasGameBegun = true;
      }
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

      const newHistoryArray = setNewHistory(state.history, newDanger);

      state.currentDanger = newDanger;
      state.dangers = newDangersFilteredArray;
      state.history = newHistoryArray
    },

  },
});


export const { showDiceResults, setNewFoe, beginGame } = appSlice.actions;
export default appSlice.reducer;
