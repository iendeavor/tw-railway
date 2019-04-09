import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'


const getTimezoneOffset = () => new Date().getTimezoneOffset() * 60 * 1000
const offsetDate = date => new Date(+date - getTimezoneOffset())
const getTimeString = date => offsetDate(date).toISOString().substring(11, 16)  // 10:20

const defaultState = {
    [KEYS.departureTime]: '',
    [KEYS.arrivalTime]: '',
}

export default (state=defaultState, action) => {
    const next = {...state}

    if (action !== undefined) {
        switch (action.type) {
            case TYPES.setDepartureTime:
                next[KEYS.departureTime] = action.payload[KEYS.departureTime]
                break
            case TYPES.setArrivalTime:
                next[KEYS.arrivalTime] = action.payload[KEYS.arrivalTime]
                break
            default:
                break
        }
    }

    return next
}
