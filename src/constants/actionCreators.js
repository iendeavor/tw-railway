import TYPES from './actionTypes';
import KEYS from './keys';
import store from '../store';
import { getTimetable } from '../resources/timetable';
import { getFare } from '../resources/fare';

const dispatch = store.dispatch;

const handleSetDate = date => {
  dispatch({
    type: TYPES.setDate,
    payload: {
      [KEYS.departureDate]: date
    }
  });
};

const handleSetFromCountry = ID => {
  dispatch({
    type: TYPES.setFromCountry,
    payload: {
      [KEYS.fromCountry]: ID
    }
  });
};

const handleSetToCountry = ID => {
  dispatch({
    type: TYPES.setToCountry,
    payload: {
      [KEYS.toCountry]: ID
    }
  });
};

const handleSetFromStation = ID => {
  dispatch({
    type: TYPES.setFromStation,
    payload: {
      [KEYS.fromStation]: ID
    }
  });
};

const handleSetToStation = ID => {
  dispatch({
    type: TYPES.setToStation,
    payload: {
      [KEYS.toStation]: ID
    }
  });
};

const handleSwapStation = () => {
  dispatch({ type: TYPES.swapStation });
};

const handleAddingMessage = message => {
  dispatch({
    type: TYPES.addMessage,
    payload: {
      [KEYS.message]: message
    }
  });
};

const handleRemovingMessage = message => {
  dispatch({
    type: TYPES.removeMessage
  });
};

const handleSearchRequest = () => {
  const from = store.getState().station[KEYS.fromStation];
  const to = store.getState().station[KEYS.toStation];
  const on = store.getState().date[KEYS.departureDate];
  dispatch({
    type: TYPES.clearTimetable
  });
  getFare(from, to)
    .then(fares => {
      dispatch({
        type: TYPES.setFare,
        payload: {
          [KEYS.fares]: fares
        }
      });
    })
    .then(() => {
      getTimetable(from, to, on).then(timetable => {
        dispatch({
          type: TYPES.search,
          payload: {
            [KEYS.schedules]: timetable
          }
        });
        handleSetSort(store.getState().sort[KEYS.sortBy]);
      });
    });
};

const handleSetSort = value => {
  dispatch({
    type: TYPES.setSort,
    payload: {
      [KEYS.sortBy]: value
    }
  });
  handle();
};

const handleAddingFilter = value => {
  dispatch({
    type: TYPES.addFilter,
    payload: {
      [KEYS.selectedFilter]: value
    }
  });
  handle();
};

const handleRemovingFilter = value => {
  dispatch({
    type: TYPES.removeFilter,
    payload: {
      [KEYS.selectedFilter]: value
    }
  });
  handle();
};

const handleSetDepartureTime = time => {
  dispatch({
    type: TYPES.setDepartureTime,
    payload: {
      [KEYS.departureTime]: time
    }
  });
  handle();
};

const handleSetArrivalTime = time => {
  dispatch({
    type: TYPES.setArrivalTime,
    payload: {
      [KEYS.arrivalTime]: time
    }
  });
  handle();
};

let debounce = undefined;
const handle = () => {
  if (debounce !== undefined) {
    clearTimeout(debounce);
  }

  debounce = setTimeout(() => {
    doRestoreSearch();
    doFilterDepartureTime();
    doFilterArrivalTime();
    doFilter();
    doSort();
  }, 300);
};

const doRestoreSearch = () => {
  dispatch({
    type: TYPES.restoreSearch
  });
};

const doFilterDepartureTime = () => {
  dispatch({
    type: TYPES.filterDepartureTime,
    payload: {
      [KEYS.departureTime]: store.getState().time[KEYS.departureTime]
    }
  });
};

const doFilterArrivalTime = () => {
  dispatch({
    type: TYPES.filterArrivalTime,
    payload: {
      [KEYS.arrivalTime]: store.getState().time[KEYS.arrivalTime]
    }
  });
};

const doFilter = () => {
  dispatch({
    type: TYPES.filter,
    payload: {
      [KEYS.selectedFilters]: store.getState().filter[KEYS.selectedFilters]
    }
  });
};

const doSort = () => {
  dispatch({
    type: TYPES.sort,
    payload: {
      [KEYS.sortBy]: store.getState().sort[KEYS.sortBy]
    }
  });
};

const CREATORS = Object.freeze({
  handleSetDate,
  handleSetArrivalTime,
  handleSetDepartureTime,

  handleSetFromCountry,
  handleSetToCountry,
  handleSetFromStation,
  handleSetToStation,
  handleSwapStation,

  handleSearchRequest,

  handleAddingFilter,
  handleRemovingFilter,

  handleSetSort,

  handleAddingMessage,
  handleRemovingMessage
});

export default CREATORS;
