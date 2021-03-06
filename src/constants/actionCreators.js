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
      [KEYS.message]: 'message_' + message
    }
  });
};

const handleRemovingMessage = message => {
  dispatch({
    type: TYPES.removeMessage
  });
};

let searchDebounce = undefined;
const handleSearchRequest = (from, to, on) => {
  if (searchDebounce === undefined) {
    searchDebounce = setTimeout(() => {
      searchDebounce = undefined;
    }, 300);

    if (from === undefined) {
      from = store.getState().station[KEYS.fromStation];
    }
    if (to === undefined) {
      to = store.getState().station[KEYS.toStation];
    }
    if (on === undefined) {
      on = store
        .getState()
        .date[KEYS.departureDate].toISOString()
        .slice(0, 10);
    }

    if (existedInHistory(from, to, on)) {
      pullFromHistory(from, to, on);
    } else {
      pullFromAPI(from, to, on);
    }
  } else {
    handleAddingMessage('pleaseWait');
  }
};

const existedInHistory = (from, to, on) => {
  const histories = store.getState().history[KEYS.histories];
  const keys = Object.keys(histories).filter((key, index) => {
    return key === from + to + on;
  });
  return keys.length === 1;
};

const pullFromHistory = (from, to, on) => {
  dispatch({
    type: TYPES.pullSchedule,
    payload: {
      [KEYS.fromStation]: from,
      [KEYS.toStation]: to,
      [KEYS.departureDate]: on
    }
  });
  refresh();
};

const pullFromAPI = (from, to, on) => {
  dispatch({
    type: TYPES.addHistory,
    payload: {
      [KEYS.fromStation]: from,
      [KEYS.toStation]: to,
      [KEYS.departureDate]: on
    }
  });

  getFare(from, to).then(fares => {
    getTimetable(from, to, on).then(timetable => {
      timetable = timetable.map(schedule => {
        schedule.fare = fares[schedule.train_type];
        return schedule;
      });

      dispatch({
        type: TYPES.fetchSchedule,
        payload: {
          [KEYS.fromStation]: from,
          [KEYS.toStation]: to,
          [KEYS.departureDate]: on,
          [KEYS.schedules]: timetable
        }
      });

      dispatch({
        type: TYPES.pullSchedule,
        payload: {
          [KEYS.fromStation]: from,
          [KEYS.toStation]: to,
          [KEYS.departureDate]: on
        }
      });

      refresh();
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
  refresh();
};

const handleAddingFilter = value => {
  dispatch({
    type: TYPES.addFilter,
    payload: {
      [KEYS.selectedFilter]: value
    }
  });
  refresh();
};

const handleRemovingFilter = value => {
  dispatch({
    type: TYPES.removeFilter,
    payload: {
      [KEYS.selectedFilter]: value
    }
  });
  refresh();
};

const handleSetDepartureTime = time => {
  dispatch({
    type: TYPES.setDepartureTime,
    payload: {
      [KEYS.departureTime]: time
    }
  });
  refresh();
};

const handleSetArrivalTime = time => {
  dispatch({
    type: TYPES.setArrivalTime,
    payload: {
      [KEYS.arrivalTime]: time
    }
  });
  refresh();
};

let debounce = undefined;
const refresh = () => {
  if (debounce !== undefined) {
    clearTimeout(debounce);
  }

  debounce = setTimeout(() => {
    checkoutSchedule();
    filterDepartureTime();
    filterArrivalTime();
    filter();
    sort();
    commitSchedule();
  }, 300);
};

const checkoutSchedule = () => {
  dispatch({
    type: TYPES.checkoutSchedule
  });
};

const commitSchedule = () => {
  dispatch({
    type: TYPES.commitSchedule
  });
};

const filterDepartureTime = () => {
  dispatch({
    type: TYPES.filterDepartureTime,
    payload: {
      [KEYS.departureTime]: store.getState().time[KEYS.departureTime]
    }
  });
};

const filterArrivalTime = () => {
  dispatch({
    type: TYPES.filterArrivalTime,
    payload: {
      [KEYS.arrivalTime]: store.getState().time[KEYS.arrivalTime]
    }
  });
};

const filter = () => {
  dispatch({
    type: TYPES.filter,
    payload: {
      [KEYS.selectedFilters]: store.getState().filter[KEYS.selectedFilters]
    }
  });
};

const sort = () => {
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
