import { SET_DATE } from '../constants/actionTypes'
import { TODAY, TOMORROW, DEPARTURE_DATE } from '../constants/keys'


const getTimezoneOffset = () => new Date().getTimezoneOffset() * 60 * 1000
const offsetDate = date => new Date(+date - getTimezoneOffset())
const removeTime = date => date.toISOString().substring(0, 10)  // 1970-01-01
const unifyDate = date => new Date(removeTime(offsetDate(date)))
const getUnifiedToday = () => unifyDate(new Date())
const getUnifiedTomorrow = () => unifyDate(new Date(+new Date() + 86400 * 1000))

const defaultState = {
    [DEPARTURE_DATE]: unifyDate(new Date()),
    [TODAY]: getUnifiedToday(),
    [TOMORROW]: getUnifiedTomorrow(),
}

export default (state=defaultState, action) => {
    const next = {...state}

    switch (action.type) {
        case SET_DATE:
            const today = getUnifiedToday()
            let selected_date
            if (typeof action.payload[DEPARTURE_DATE] === 'string') {
                selected_date = new Date(action.payload[DEPARTURE_DATE])
            } else {
                selected_date = unifyDate(action.payload[DEPARTURE_DATE])
            }
            if (+selected_date >= +today) {
                next[DEPARTURE_DATE] = selected_date
            }
            next[TODAY] = today
            next[TOMORROW] = getUnifiedTomorrow()
            break
        default:
            break
    }

    return next
}
