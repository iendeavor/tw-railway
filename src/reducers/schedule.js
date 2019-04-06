import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'


const default_state = {
    [KEYS.schedules]: [],
    [KEYS.originalSchedules]: [],
}

export default (state=default_state, action) => {
    const next = {...state}

    switch(action.type) {
        case TYPES.search:
            next[KEYS.schedules] = action.payload[KEYS.schedules]
            next[KEYS.originalSchedules] = action.payload[KEYS.schedules]
            break
        case TYPES.restoreSearch:
            next[KEYS.schedules] = state[KEYS.originalSchedules].slice()
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
                    default:
                        break
                }

                return 0
            })
            break
        case TYPES.filter:
            let schedules = state[KEYS.schedules].slice()

            for (let filter of action.payload[KEYS.selectedFilters]) {
                schedules = schedules.slice().filter(schedule => {
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
        default:
            break
    }

    return next
}
