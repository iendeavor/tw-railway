import TYPES from '../constants/actionTypes';
import KEYS from '../constants/keys';

const default_state = {
  [KEYS.localSchedules]: {},
  [KEYS.currentSchedules]: [],
  [KEYS.workingSchedules]: [],
  [KEYS.finishedSchedules]: []
};

export const omitSecondForTimestamp = timestamp => {
  return (timestamp - (timestamp % 60)) / 60;
};

export const convertToTimestamp = time_string => {
  time_string = time_string.replace(/:/g, '');
  while (time_string.length < 6) {
    time_string += '0';
  }

  const hh = parseInt(time_string.slice(0, 2));
  const mm = parseInt(time_string.slice(2, 4));
  const ss = parseInt(time_string.slice(4, 6));
  if (hh > 24 || mm > 59 || ss > 60) {
    throw new RangeError(`Invalid time: ${hh}:${mm}:${ss}.`);
  }

  return hh * 60 * 60 + mm * 60 + ss;
};

export const convertDepartureToTimestamp = departure => {
  return omitSecondForTimestamp(convertToTimestamp(departure));
};

export const convertArrivalToTimestamp = (arrival, departure) => {
  let arrival_timestamp = omitSecondForTimestamp(convertToTimestamp(arrival));

  if (departure !== undefined) {
    const departure_timestamp = convertDepartureToTimestamp(departure);
    if (arrival_timestamp < departure_timestamp) {
      arrival_timestamp += 24 * 60;
    }
  }

  return arrival_timestamp;
};

const getKey = (o, key) => {
  if (o[key] === undefined) {
    o[key] = {};
  }
  return o[key];
};

export default (state = default_state, action) => {
  if (action === undefined) {
    return state;
  }

  const next = { ...state };

  switch (action.type) {
    case TYPES.fetchSchedule:
      {
        const from = action.payload[KEYS.fromStation];
        const to = action.payload[KEYS.toStation];
        const on = action.payload[KEYS.departureDate];

        next[KEYS.localSchedules][from] = getKey(
          next[KEYS.localSchedules],
          from
        );
        next[KEYS.localSchedules][from][to] = getKey(
          next[KEYS.localSchedules][from],
          to
        );
        next[KEYS.localSchedules][from][to][on] = action.payload[
          KEYS.schedules
        ].slice();
      }
      break;
    case TYPES.pullSchedule:
      {
        const from = action.payload[KEYS.fromStation];
        const to = action.payload[KEYS.toStation];
        const on = action.payload[KEYS.departureDate];

        if (
          next[KEYS.localSchedules][from] !== undefined &&
          next[KEYS.localSchedules][from][to] !== undefined &&
          next[KEYS.localSchedules][from][to][on] !== undefined
        ) {
          next[KEYS.currentSchedules] = next[KEYS.localSchedules][from][to][on];
        }
      }
      break;
    case TYPES.checkoutSchedule:
      next[KEYS.workingSchedules] = next[KEYS.currentSchedules].slice();
      break;
    case TYPES.commitSchedule:
      next[KEYS.finishedSchedules] = next[KEYS.workingSchedules].slice();
      break;
    case TYPES.sort:
      next[KEYS.workingSchedules] = next[KEYS.workingSchedules]
        .slice()
        .sort((a, b) => {
          let flag = 0;

          switch (action.payload[KEYS.sortBy]) {
            case KEYS.arrival:
              const a_arrival = convertArrivalToTimestamp(
                a.arrival,
                a.departure
              );
              const b_arrival = convertArrivalToTimestamp(
                b.arrival,
                b.departure
              );
              flag = a_arrival - b_arrival;
              break;

            case KEYS.departure:
              const a_departure = convertDepartureToTimestamp(a.departure);
              const b_departure = convertDepartureToTimestamp(b.departure);
              flag = a_departure - b_departure;
              break;

            case KEYS.duration:
              const a_duration = omitSecondForTimestamp(
                convertToTimestamp(a.duration)
              );
              const b_duration = omitSecondForTimestamp(
                convertToTimestamp(b.duration)
              );
              flag = a_duration - b_duration;
              break;

            case KEYS.fare:
              const a_fare = parseInt(a.fare);
              const b_fare = parseInt(b.fare);
              flag = a_fare - b_fare;
              break;

            default:
              break;
          }

          return flag;
        });
      break;
    case TYPES.filter:
      let schedules = next[KEYS.workingSchedules].slice();

      for (let filter of action.payload[KEYS.selectedFilters]) {
        schedules = schedules.filter(schedule => {
          switch (filter) {
            case KEYS.wheelChair:
              return schedule.has_wheel_chair;
            case KEYS.bikeSpace:
              return schedule.is_bike_allowed;
            case KEYS.nursingRoom:
              return schedule.has_nursing_room;
            default:
              break;
          }

          return true;
        });
      }

      next[KEYS.workingSchedules] = schedules;
      break;
    case TYPES.filterDepartureTime:
      const selected_departure = action.payload[KEYS.departureTime];

      next[KEYS.workingSchedules] = next[KEYS.workingSchedules]
        .slice()
        .filter(schedule => {
          if (selected_departure === '') {
            return true;
          }

          const after = convertDepartureToTimestamp(selected_departure);
          const departure = convertDepartureToTimestamp(schedule.departure);
          return after <= departure;
        });
      break;
    case TYPES.filterArrivalTime:
      const selected_arrival = action.payload[KEYS.arrivalTime];

      next[KEYS.workingSchedules] = next[KEYS.workingSchedules]
        .slice()
        .filter(schedule => {
          if (selected_arrival === '') {
            return true;
          }

          const before = convertArrivalToTimestamp(selected_arrival);
          const arrival = convertArrivalToTimestamp(
            schedule.arrival,
            schedule.departure
          );
          return arrival <= before;
        });
      break;
    default:
      break;
  }

  return next;
};
