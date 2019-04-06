import { SEARCH_REQUEST, SEARCH_SUCCESS, SET_SORT } from '../constants/actionTypes'
import { getTimetable } from '../resources/timetable'
import store from '../store'
import { DEPARTURE_DATE, FROM_STATION, TO_STATION, SCHEDULES, DEPARTURE, ARRIVAL, SORT_BY, ORDER_BY, } from '../constants/keys'


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
    [SCHEDULES]: [],
}

export default (state=default_state, action) => {
    const next = {...state}

    switch(action.type) {
        case SEARCH_REQUEST:
            const from = action.payload[FROM_STATION]
            const to = action.payload[TO_STATION]
            const on = action.payload[DEPARTURE_DATE]
            const promise = getTimetable(from, to, on)
            promise.then(timetable => {
                store.dispatch({
                    type: SEARCH_SUCCESS,
                    payload: {
                        [SCHEDULES]: timetable,
                    },
                })
            })
            break
        case SEARCH_SUCCESS:
            next[SCHEDULES] = action.payload[SCHEDULES]
            break
        case SET_SORT:
            switch (action.payload[SORT_BY]) {
                case ARRIVAL:
                    next[SCHEDULES] = state[SCHEDULES].sort((a, b) => {
                        const a_arrival = (parseInt(a.arrival.slice(0, 2)) * 60 +
                                           parseInt(a.arrival.slice(3, 5)))
                        const b_arrival = (parseInt(b.arrival.slice(0, 2)) * 60 +
                                           parseInt(b.arrival.slice(3, 5)))
                        return a_arrival - b_arrival
                    })
                    break
                case DEPARTURE:
                    next[SCHEDULES] = state[SCHEDULES].sort((a, b) => {
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
