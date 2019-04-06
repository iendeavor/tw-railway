import ACTION_TYPES from '../constants/actionTypes'
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
}

export default (state=default_state, action) => {
    const next = {...state}

    switch(action.type) {
        case ACTION_TYPES.search:
            next[KEYS.schedules] = action.payload[KEYS.schedules]
            break
        case ACTION_TYPES.setSort:
            switch (action.payload[KEYS.sortBy]) {
                case KEYS.arrival:
                    next[KEYS.schedules] = state[KEYS.schedules].sort((a, b) => {
                        const a_arrival = (parseInt(a.arrival.slice(0, 2)) * 60 +
                                           parseInt(a.arrival.slice(3, 5)))
                        const b_arrival = (parseInt(b.arrival.slice(0, 2)) * 60 +
                                           parseInt(b.arrival.slice(3, 5)))
                        return a_arrival - b_arrival
                    })
                    break
                case KEYS.departure:
                    next[KEYS.schedules] = state[KEYS.schedules].sort((a, b) => {
                        const a_departure = (parseInt(a.departure.slice(0, 2)) * 60 +
                                             parseInt(a.departure.slice(3, 5)))
                        const b_departure = (parseInt(b.departure.slice(0, 2)) * 60 +
                                             parseInt(b.departure.slice(3, 5)))
                        return a_departure - b_departure
                    })
                    break
                default:
                    break
            }
            break
        default:
            break
    }

    return next
}
