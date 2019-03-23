import { SET_DATE } from '../constants/actionTypes'
import { ON_DATE } from '../constants/keys'


const toYYYYMMDD = date => date.toISOString().substring(0, 10)  // 1970-01-01

const defaultState = {
    [ON_DATE]: new Date()
}

export default (state=defaultState, action) => {
    const next = {...state}

    switch (action.type) {
        case SET_DATE:
            const today = Math.floor(new Date(toYYYYMMDD(new Date())) / 1000)
            const date = Math.floor(action.payload.date / 1000)
            if (date >= today) {
                next[ON_DATE] = action.payload.date
            }
            break
        default:
            break
    }

    return next
}
