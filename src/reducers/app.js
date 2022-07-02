import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  diceResults: 0,
  name: 'Jumanji',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showDiceResults(state, action) {
      state.diceResults = action.payload;
    },
  },
});


export const { showDiceResults, todoToggled } = appSlice.actions;
export default appSlice.reducer;
