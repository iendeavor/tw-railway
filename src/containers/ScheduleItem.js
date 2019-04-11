import { connect } from 'react-redux';

import ScheduleItem from '../components/ScheduleItem.jsx';
import CREATORS from '../constants/actionCreators';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onAddingFilter: value => {
      CREATORS.handleAddingFilter(value);
      CREATORS.handleAddingMessage('Added filter.');
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleItem);
