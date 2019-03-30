import { SET_DATE } from '../constants/actionTypes'


const convertToYYYYMMDD = date => (  // 1970-01-01
    date.toISOString().substring(0, 10)
)

const defaultState = {
    value: convertToYYYYMMDD(new Date())
}

export default (state=defaultState, action) => {
    const next = {...state}

    switch (action.type) {
        case SET_DATE:
            if (action.payload.value !== '') {
                const today = Math.floor(new Date(convertToYYYYMMDD(new Date())) / 1000)
                const date = Math.floor(new Date(action.payload.value) / 1000)
                if (date >= today) {
                    next.value = action.payload.value
                }
            }
            break
        default:
            break
    }

    return next
}
