import { connect } from 'react-redux';
import JumanjiText from 'src/components/App/JumanjiText';

const mapStateToProps = (state) => ({
    diceResults: state.app.diceResults,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(JumanjiText);
