import { connect } from 'react-redux';

import Schedule from '../components/Schedule.jsx';
import KEYS from '../constants/keys';

const mapStateToProps = state => {
  return {
    schedules: state.schedule[KEYS.finishedSchedules]
  };
};

export default connect(mapStateToProps)(Schedule);
