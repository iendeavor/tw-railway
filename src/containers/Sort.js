import { connect } from 'react-redux';

import Sort from '../components/Sort.jsx';
import KEYS from '../constants/keys';
import CREATORS from '../constants/actionCreators';

const mapStateToProps = state => {
  return {
    options: state.sort[KEYS.options],
    selectedSort: state.sort[KEYS.sortBy]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetSort: value => {
      CREATORS.handleSetSort(value);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
