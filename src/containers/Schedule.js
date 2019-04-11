import { connect } from 'react-redux';

import Schedule from '../components/Schedule';
import KEYS from '../constants/keys';

const mapStateToProps = state => {
  return {
    schedules: state.schedule[KEYS.schedules]
  };
};

export default connect(mapStateToProps)(Schedule);
