import { createSlice } from '@reduxjs/toolkit';

import { jumanji } from '../data/jumanjiRiddles';
import { setNewHistory } from 'src/selectors/reducerFunctions';

import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  hasGameBegun: false,
  isDangerOn: false,
  guess: '',
  message: '',
  hasFound: false,
};

const appSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveGuess: (state, action) => {
      const {guess, beast } = action.payload;
      state.guess = guess;
      
      if (guess.toLowerCase() === beast.toLowerCase()) {
        state.message = "Bravo, vous avez identifié ce nouveau danger avant qu'il n'arrive. Vous pouvez vous préparer à l'affronter ou fuir.";
        state.hasFound = true;
      }
    },
    endFormTurn: (state) => {
      state.isDangerOn = false;
      state.guess = '';
      state.message = '';
      state.hasFound = false;
    },
  },
});


export const { saveGuess, endFormTurn } = appSlice.actions;
export default appSlice.reducer;
