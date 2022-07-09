import { connect } from 'react-redux';
import History from 'src/components/App/History';

const mapStateToProps = (state) => ({
  history: state.app.history,
  
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
