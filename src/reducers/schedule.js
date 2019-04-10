import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'


const default_state = {
    [KEYS.schedules]: [],
    [KEYS.originalSchedules]: [],
}

const convertToTimestamp = time_string => {
    return (parseInt(time_string.slice(0, 2)) * 60 +
            parseInt(time_string.slice(3, 5)))
}

const convertDepartureToTimestamp = departure => {
    return convertToTimestamp(departure)
}

const convertArrivalToTimestamp = (arrival, departure) => {
    let arrival_timestamp = convertToTimestamp(arrival)

    if (departure !== undefined) {
        const departure_timestamp = convertDepartureToTimestamp(departure)
        if (arrival_timestamp < departure_timestamp) {
            arrival_timestamp += 24 * 60
        }
    }

    return arrival_timestamp
}

export default (state=default_state, action) => {
    if (action === undefined) {
        return state
    }

    const next = {...state}

    switch(action.type) {
        case TYPES.search:
            next[KEYS.originalSchedules] = action.payload[KEYS.schedules].map(schedule => {
                schedule.fare = state[KEYS.fares][schedule.train_type]
                return schedule
            })
            next[KEYS.schedules] = next[KEYS.originalSchedules].slice()
            break
        case TYPES.restoreSearch:
            next[KEYS.schedules] = state[KEYS.originalSchedules].slice()
            break
        case TYPES.setFare:
            next[KEYS.fares] = action.payload[KEYS.fares]
            break
        case TYPES.sort:
            next[KEYS.schedules] = state[KEYS.schedules].slice().sort((a, b) => {
                let flag = 0

                switch (action.payload[KEYS.sortBy]) {
                    case KEYS.arrival:
                        const a_arrival   = convertArrivalToTimestamp(a.arrival, a.departure)
                        const b_arrival   = convertArrivalToTimestamp(b.arrival, b.departure)
                        flag = a_arrival - b_arrival
                        break

                    case KEYS.departure:
                        const a_departure = convertDepartureToTimestamp(a.departure)
                        const b_departure = convertDepartureToTimestamp(b.departure)
                        flag = a_departure - b_departure
                        break

                    case KEYS.duration:
                        const a_duration  = convertToTimestamp(a.duration)
                        const b_duration  = convertToTimestamp(b.duration)
                        flag = a_duration - b_duration
                        break

                    case KEYS.fare:
                        const a_fare = parseInt(a.fare)
                        const b_fare = parseInt(b.fare)
                        flag = a_fare - b_fare
                        break

                    default:
                        break
                }

                return flag
            })
            break
        case TYPES.filter:
            let schedules = state[KEYS.schedules].slice()

            for (let filter of action.payload[KEYS.selectedFilters]) {
                schedules = schedules.filter(schedule => {
                    switch (filter) {
                        case KEYS.wheelChair:
                            return schedule.has_wheel_chair
                        case KEYS.bikeSpace:
                            return schedule.is_bike_allowed
                        case KEYS.nursingRoom:
                            return schedule.has_nursing_room
                        default:
                            break
                    }

                    return true
                })
            }

            next[KEYS.schedules] = schedules
            break
        case TYPES.filterDepartureTime:
            const selected_departure = action.payload[KEYS.departureTime]

            next[KEYS.schedules] = state[KEYS.schedules].slice().filter(schedule => {
                if (selected_departure === '') {
                    return true
                }

                const after = convertDepartureToTimestamp(selected_departure)
                const departure = convertDepartureToTimestamp(schedule.departure)
                return after <= departure
            })
            break
        case TYPES.filterArrivalTime:
            const selected_arrival = action.payload[KEYS.arrivalTime]

            next[KEYS.schedules] = state[KEYS.schedules].slice().filter(schedule => {
                if (selected_arrival === '') {
                    return true
                }

                const before = convertArrivalToTimestamp(selected_arrival)
                const arrival = convertArrivalToTimestamp(schedule.arrival, schedule.departure)
                return arrival <= before
            })
            break
        default:
            break
    }

    return next
}
