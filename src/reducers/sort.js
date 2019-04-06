import ACTION_TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'

const defaultState = {
    [KEYS.sortBy]: KEYS.arrival,
    [KEYS.orderBy]: KEYS.departure,
}

export default (state=defaultState, action) => {
    const next = {...state}

    if (action !== undefined) {
        switch (action.type) {
            case ACTION_TYPES.setSort:
                next[KEYS.sortBy] = action.payload[KEYS.sortBy]
                break
            case ACTION_TYPES.setOrder:
                next[KEYS.orderBy] = action.payload[KEYS.orderBy]
                break
            default:
                break
        }
    }

    return next
}

