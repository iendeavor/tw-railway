import { SET_DATE } from '../constants/actionTypes'


const toYYYYMMDD = date => date.toISOString().substring(0, 10)  // 1970-01-01

const defaultState = {
    date: new Date()
}

export default (state=defaultState, action) => {
    const next = {...state}

    switch (action.type) {
        case SET_DATE:
            const today = Math.floor(new Date(toYYYYMMDD(new Date())) / 1000)
            const date = Math.floor(action.payload.date / 1000)
            if (date >= today) {
                next.date = action.payload.date
            }
            console.log(next.date)
            break
        default:
            break
    }

    return next
}
