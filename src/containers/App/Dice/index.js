import { connect } from 'react-redux';
import Dice from 'src/components/App/Dice';

import { showDiceResults, setNewFoe } from 'src/reducers/app';

const mapStateToProps = (state) => ({
  diceResults: state.app.diceResults,
  
});

const mapDispatchToProps = (dispatch) => ({
  showDiceResults: (array) => {
    dispatch(showDiceResults(array));
  },
  setNewFoe: () => {
    dispatch(setNewFoe());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
