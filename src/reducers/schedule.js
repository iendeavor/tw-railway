import { SEARCH, SEARCHED } from '../constants/actionTypes'
import { getTimetable } from '../resources/timetable'
import store from '../store'
import { DEPARTURE_DATE, FROM_STATION, TO_STATION, SCHEDULES, DEPARTURE, ARRIVAL } from '../constants/keys'


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
        duration: '02:10',
        from: '1008',
        to: '1238',
        departure: '08:28',
        arrival: '16:50',
    },
]
const default_state = {
    [SCHEDULES]: [],
}

export default (state=default_state, action) => {
    const next = {...state}

    switch(action.type) {
        case SEARCH:
            const from = action.payload[FROM_STATION]
            const to = action.payload[TO_STATION]
            const on = action.payload[DEPARTURE_DATE]
            const promise = getTimetable(from, to, on)
            promise.then(timetable => {
                store.dispatch({
                    type: SEARCHED,
                    payload: {
                        [SCHEDULES]: timetable,
                    },
                })
            })
            break
        case SEARCHED:
            next[SCHEDULES] = action.payload[SCHEDULES]
            break
        default:
            break
    }

    return next
}
