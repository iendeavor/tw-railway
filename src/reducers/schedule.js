import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'
import { getTimetable } from '../resources/timetable'
import store from '../store'


const example = [
    {
        price: '720',
        duration: '02:10',
        from: '1008',
        to: '1238',
        departure: '08:28',
        arrival: '16:50',
        is_bike_allowed: true,
        has_wheel_chair: true,
    },
    {
        price: '123',
        duration: '02:10',
        note: 'blah blah',
        from: '1008',
        to: '1238',
        departure: '08:28',
        arrival: '16:50',
        has_nursing_room: true,
    },
    {
        price: '333',
        duration: '03:15',
        from: '1008',
        to: '1238',
        departure: '04:28',
        arrival: '19:50',
    },
]
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
        case TYPES.sort:
            next[KEYS.schedules] = action.payload[KEYS.schedules].slice().sort((a, b) => {
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
                        break
                    case KEYS.departure:
                        return a_departure - b_departure
                        break
                    case KEYS.duration:
                        const a_duration = (parseInt(a.duration.slice(0, 2)) * 60 +
                                            parseInt(a.duration.slice(3, 5)))
                        const b_duration = (parseInt(b.duration.slice(0, 2)) * 60 +
                                            parseInt(b.duration.slice(3, 5)))
                        return a_duration - b_duration
                        break
                    default:
                        break
                }
            })
            break
        case TYPES.filter:
            let schedules = action.payload[KEYS.schedules].slice()

            for (let filter of action.payload[KEYS.selectedFilters]) {
                schedules = schedules.slice().filter(schedule => {
                    switch (filter) {
                        case KEYS.wheelChair:
                            return schedule.has_wheel_chair
                            break
                        case KEYS.bikeSpace:
                            return schedule.is_bike_allowed
                            break
                        case KEYS.nursingRoom:
                            return schedule.has_nursing_room
                            break
                        default:
                            break
                    }
                })
            }

            next[KEYS.schedules] = schedules
            break
        default:
            break
    }

    return next
}
