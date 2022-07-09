import { connect } from 'react-redux';
import Gameboard from 'src/components/App/Gameboard';

import { movePlayer } from 'src/reducers/player';

const mapStateToProps = (state) => ({
  currentDanger: state.app.currentDanger.riddles,
  players: state.player.players,
  currentPlayer: state.player.currentPlayer,
  hasGameBegun: state.app.hasGameBegun,
});

const mapDispatchToProps = (dispatch) => ({
  movePlayer: (player, progress) => {
    dispatch(movePlayer(player, progress));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
