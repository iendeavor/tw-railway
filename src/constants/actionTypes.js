import uuid from 'uuid/v4';

export const SET_FROM_COUNTRY = uuid() + '-ACTION_SET_FROM_COUNTRY';
export const SET_TO_COUNTRY = uuid() + '-ACTION_SET_TO_COUNTRY';
export const SET_FROM_STATION = uuid() + '-ACTION_SET_FROM_STATION';
export const SET_TO_STATION = uuid() + '-ACTION_SET_TO_STATION';
export const SWAP_STATION = uuid() + '-ACTION_SWAP_STATION';
export const SET_DATE = uuid() + '-ACTION_SET_DATE';
export const SET_TIME = uuid() + '-ACTION_SET_TIME';
export const SET_DEPARTURE_TIME = uuid() + '-ACTION_SET_DEPARTURE_TIME';
export const SET_ARRIVAL_TIME = uuid() + '-ACTION_SET_ARRIVAL_TIME';

export const SET_SORT = uuid() + '-ACTION_SET_SORT';
export const SET_ORDER = uuid() + '-ACTION_SET_ORDER';
export const SORT = uuid() + '-ACTION_SORT';

export const ADD_FILTER = uuid() + '-ACTION_ADD_FILTER';
export const REMOVE_FILTER = uuid() + '-ACTION_REMOVE_FILTER';
export const FILTER = uuid() + '-ACTION_FILTER';
export const FILTER_DEPARTURE_TIME = uuid() + '-ACTION_FILTER_DEPARTURE_TIME';
export const FILTER_ARRIVAL_TIME = uuid() + '-ACTION_FILTER_ARRIVAL_TIME';

export const SEARCH = uuid() + '-ACTION_SEARCH';
export const RESTORE_SEARCH = uuid() + '-ACTION_RESTORE_SEARCH';
export const RESTORE_HISTORY = uuid() + '-ACTION_RESTORE_HISTORY';
export const ADD_HISTORY = uuid() + '-ACTION_ADD_HISTORY';
export const CLEAR_TIMETABLE = uuid() + '-ACTION_CLEAR_TIMETABLE';

export const SET_FARE = uuid() + '-ACTION_SET_FARE';

export const ADD_MESSAGE = uuid() + '-ACTION_ADD_MESSAGE';
export const REMOVE_MESSAGE = uuid() + '-ACTION_REMOVE_MESSAGE';

const ACTION_TYPES = {
  setFromCountry: SET_FROM_COUNTRY,
  setToCountry: SET_TO_COUNTRY,
  setFromStation: SET_FROM_STATION,
  setToStation: SET_TO_STATION,
  swapStation: SWAP_STATION,

  setDate: SET_DATE,
  setDepartureTime: SET_DEPARTURE_TIME,
  setArrivalTime: SET_ARRIVAL_TIME,

  setSort: SET_SORT,
  setOrder: SET_ORDER,
  sort: SORT,

  addFilter: ADD_FILTER,
  removeFilter: REMOVE_FILTER,
  filter: FILTER,
  filterDepartureTime: FILTER_DEPARTURE_TIME,
  filterArrivalTime: FILTER_ARRIVAL_TIME,

  search: SEARCH,
  restoreSearch: RESTORE_SEARCH,
  restoreHistory: RESTORE_HISTORY,
  addHistory: ADD_HISTORY,
  clearTimetable: CLEAR_TIMETABLE,

  setFare: SET_FARE,

  addMessage: ADD_MESSAGE,
  removeMessage: REMOVE_MESSAGE
};

export default ACTION_TYPES;
