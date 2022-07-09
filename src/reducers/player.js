import { createSlice } from '@reduxjs/toolkit';

// import { jumanji } from '../data/jumanjiRiddles';
// import { setNewHistory } from 'src/selectors/reducerFunctions';

const initialState = {
  diceResults: 0,
  currentPlayer: 'Carlos',
  players: [
    {
      name: 'Carlos',
      number: 1,
      progress: 0,
      health: 100,
      magic: 100,
    }
  ],
  hasDiceBeenRolled: false,
};

const appSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    movePlayer(state, action) {
      console.log(action.payload);

      const players = state.players.map((currentPlayer) => {
        console.log(currentPlayer.name, action.payload.name, currentPlayer.name === action.payload.name);
        if (currentPlayer.name === action.payload.name) {
          currentPlayer.progress = action.payload.progress;
        }
        return currentPlayer;
      });
      state.players = players;
    },
    setProgression(state, action) {
      console.log(action.payload);

      const players = state.players.map((currentPlayer) => {
        
        if (currentPlayer.name === state.currentPlayer) {
          // currentPlayer.progress = action.payload;
          currentPlayer.progress = 3;
        }
        return currentPlayer;
      });
      state.players = players;
    }
  },
});


export const { movePlayer, setProgression } = appSlice.actions;
export default appSlice.reducer;
