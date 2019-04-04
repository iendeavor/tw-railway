import { SEARCH } from '../constants/actionTypes'
import { getTimetable } from '../resources/timetable'
import store from '../store'
import { ON_DATE, FROM_STATION, TO_STATION } from '../constants/keys'


const default_state = []

export default (state=default_state, action) => {
    const next = [...state]

    switch(action) {
        case SEARCH:
            const from = store.getStore().station[FROM_STATION]
            const to = store.getStore().station[TO_STATION]
            const on = store.getStore().date[ON_DATE]
            const promise = getTimetable(from, to, on)
            promise.then(timetable => {
                console.log(timetable)
            })
            console.log('searched')
            break
        default:
            break
    }

    return next
}
