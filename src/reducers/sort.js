import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'

const defaultState = {
    [KEYS.sortBy]: KEYS.arrival,
    [KEYS.orderBy]: KEYS.departure,
}

export default (state=defaultState, action) => {
    const next = {...state}

    if (action !== undefined) {
        switch (action.type) {
            case TYPES.setSort:
                next[KEYS.sortBy] = action.payload[KEYS.sortBy]
                break
            case TYPES.setOrder:
                next[KEYS.orderBy] = action.payload[KEYS.orderBy]
                break
            default:
                break
        }
    }

    return next
}

