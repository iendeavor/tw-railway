import { SEARCH, SEARCHED } from '../constants/actionTypes'
import { getTimetable } from '../resources/timetable'
import store from '../store'
import { ON_DATE, FROM_STATION, TO_STATION, SCHEDULES } from '../constants/keys'


const default_state = {
    [SCHEDULES]: [],
}

export default (state=default_state, action) => {
    const next = {...state}

    switch(action.type) {
        case SEARCH:
            const from = action.payload[FROM_STATION]
            const to = action.payload[TO_STATION]
            const on = action.payload[ON_DATE]
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
        default:
            break
    }

    return next
}
