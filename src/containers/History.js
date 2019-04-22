import { connect } from 'react-redux';

import History from '../components/History.jsx';
import KEYS from '../constants/keys';
import CREATORS from '../constants/actionCreators';

const mapStateToProps = state => {
  return {
    histories: Object.values(state.history[KEYS.histories]).map(history => {
      return {
        fromStation: history[KEYS.fromStation],
        toStation: history[KEYS.toStation]
      };
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRestoreHistory: index => {
      CREATORS.handleRestoreHistory(index);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
