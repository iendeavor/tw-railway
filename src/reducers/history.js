import TYPES from '../constants/actionTypes';
import KEYS from '../constants/keys';
import { getStationName } from '../resources/stations';

const defaultState = {
  [KEYS.histories]: {}
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
      const departureDate = action.payload[KEYS.departureDate];

      const id = fromStation + toStation + departureDate;
      if (!(id in next[KEYS.histories])) {
        next[KEYS.histories] = Object.assign({}, next[KEYS.histories], {
          [id]: {
            [KEYS.fromStation]: fromStation,
            [KEYS.toStation]: toStation,
            [KEYS.fromStationName]: getStationName(fromStation),
            [KEYS.toStationName]: getStationName(toStation),
            [KEYS.departureDate]: departureDate,
            [KEYS.schedules]: schedules
          }
        });
      }
      break;
    default:
      break;
  }

  return next;
};
