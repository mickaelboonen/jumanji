import { connect } from 'react-redux';
import Gameboard from 'src/components/App/Gameboard';

const mapStateToProps = (state) => ({
  currentDanger: state.app.currentDanger.riddle,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
