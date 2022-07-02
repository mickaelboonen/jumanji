import { connect } from 'react-redux';
import Dice from 'src/components/App/Dice';

import { showDiceResults } from 'src/reducers/app';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  showDiceResults: (number, double = 15) => {
    dispatch(showDiceResults(number, double));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
