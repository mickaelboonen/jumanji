import { connect } from 'react-redux';
import DiceResults from 'src/components/App/DiceResults';

const mapStateToProps = (state) => ({
    diceResults: state.app.diceResults,
    currentDanger: state.app.currentDanger,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DiceResults);
