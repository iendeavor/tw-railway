import { connect } from 'react-redux';

import History from '../components/History.jsx';
import KEYS from '../constants/keys';
import CREATORS from '../constants/actionCreators';

const mapStateToProps = state => {
  return {
    histories: Object.values(state.history[KEYS.histories]).map(history => {
      return {
        fromStation: history[KEYS.fromStation],
        toStation: history[KEYS.toStation],
        fromStationName: history[KEYS.fromStationName],
        toStationName: history[KEYS.toStationName],
        departureDate: history[KEYS.departureDate]
      };
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (from, to, on) => {
      CREATORS.handleSearchRequest(from, to, on);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
