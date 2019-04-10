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
                let a_arrival = (parseInt(a.arrival.slice(0, 2)) * 60 +
                                   parseInt(a.arrival.slice(3, 5)))
                let b_arrival = (parseInt(b.arrival.slice(0, 2)) * 60 +
                                   parseInt(b.arrival.slice(3, 5)))
                const a_departure = (parseInt(a.departure.slice(0, 2)) * 60 +
                                     parseInt(a.departure.slice(3, 5)))
                const b_departure = (parseInt(b.departure.slice(0, 2)) * 60 +
                                     parseInt(b.departure.slice(3, 5)))

                switch (action.payload[KEYS.sortBy]) {
                    case KEYS.arrival:
                        if (a_departure > a_arrival) {
                            a_arrival += 86400
                        }
                        if (b_departure > b_arrival) {
                            b_arrival += 86400
                        }
                        return a_arrival - b_arrival
                    case KEYS.departure:
                        return a_departure - b_departure
                    case KEYS.duration:
                        const a_duration = (parseInt(a.duration.slice(0, 2)) * 60 +
                                            parseInt(a.duration.slice(3, 5)))
                        const b_duration = (parseInt(b.duration.slice(0, 2)) * 60 +
                                            parseInt(b.duration.slice(3, 5)))
                        return a_duration - b_duration
                    case KEYS.fare:
                        const a_fare = parseInt(a.fare)
                        const b_fare = parseInt(b.fare)
                        return a_fare - b_fare
                    default:
                        break
                }

                return 0
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
