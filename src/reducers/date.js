import TYPES from '../constants/actionTypes';
import KEYS from '../constants/keys';
import utils from './utils';

const unifyDate = date => new Date(utils.removeTime(utils.offsetDate(date)));
const getUnifiedToday = () => unifyDate(new Date());
const getUnifiedTomorrow = () =>
  unifyDate(new Date(+new Date() + 86400 * 1000));

const defaultState = {
  [KEYS.departureDate]: unifyDate(new Date()),
  [KEYS.today]: getUnifiedToday(),
  [KEYS.tomorrow]: getUnifiedTomorrow()
};

export default (state = defaultState, action) => {
  if (action === undefined) {
    return state;
  }

  const next = { ...state };

  switch (action.type) {
    case TYPES.setDate:
      const today = getUnifiedToday();
      let selected_date;
      if (typeof action.payload[KEYS.departureDate] === 'string') {
        selected_date = new Date(action.payload[KEYS.departureDate]);
      } else {
        selected_date = unifyDate(action.payload[KEYS.departureDate]);
      }
      if (+selected_date >= +today) {
        next[KEYS.departureDate] = selected_date;
      }
      next[KEYS.today] = today;
      next[KEYS.tomorrow] = getUnifiedTomorrow();
      break;
    default:
      break;
  }

  return next;
};
