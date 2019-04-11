import { connect } from 'react-redux';

import Message from '../components/Message.jsx';
import CREATORS from '../constants/actionCreators';

const mapStateToProps = state => {
  return {
    open: state.message.open,
    message: state.message.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onExitingMessage: CREATORS.handleRemovingMessage,
    onRemovingMessage: CREATORS.handleRemovingMessage
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
