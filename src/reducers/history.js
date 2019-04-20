import TYPES from '../constants/actionTypes';
import KEYS from '../constants/keys';

const defaultState = {
  [KEYS.histories]: []
};

export default (state = defaultState, action) => {
  if (action === undefined) {
    return state;
  }

  const next = { ...state };

  switch (action.type) {
    case TYPES.addHistory:
      const fromStation = action.payload[KEYS.fromStation];
      const toStation = action.payload[KEYS.toStation];
      const schedules = action.payload[KEYS.schedules].slice();
      let not_duplicate = true;
      for (let i = 0; i < next[KEYS.histories].length; ++i) {
        if (
          next[KEYS.histories][i][KEYS.fromStation] === fromStation &&
          next[KEYS.histories][i][KEYS.toStation] === toStation
        ) {
          not_duplicate = false;
          break;
        }
      }
      if (not_duplicate) {
        next[KEYS.histories] = next[KEYS.histories].slice();
        next[KEYS.histories].push({
          [KEYS.fromStation]: fromStation,
          [KEYS.toStation]: toStation,
          [KEYS.schedules]: schedules
        });
      }
      break;
    default:
      break;
  }

  return next;
};
