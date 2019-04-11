import { connect } from 'react-redux';

import Filter from '../components/Filter';
import KEYS from '../constants/keys';
import CREATORS from '../constants/actionCreators';

const mapStateToProps = state => {
  return {
    options: state.filter[KEYS.options],
    selectedValues: Array.from(state.filter[KEYS.selectedFilters])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddingFilter: value => {
      CREATORS.handleAddingFilter(value);
    },
    onRemovingFilter: value => {
      CREATORS.handleRemovingFilter(value);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
