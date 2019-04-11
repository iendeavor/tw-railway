import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'

const options = [
    {
        value: KEYS.departure,
        name: 'Departure',
        icon: 'fas fa-plane-departure'},
    {
        value: KEYS.arrival,
        name: 'Arrival',
        icon: 'fas fa-plane-arrival'},
    {
        value: KEYS.duration,
        name: 'Duration',
        icon: 'fas fa-hourglass-start'},
    {
        value: KEYS.fare,
        name: 'Fare',
        icon: 'fas fa-dollar-sign',
    },
]

const defaultState = {
    [KEYS.options] : options,
    [KEYS.sortBy]: KEYS.arrival,
    [KEYS.orderBy]: KEYS.departure,
}

export default (state=defaultState, action) => {
    if (action === undefined) {
        return state
    }

    const next = {...state}

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

    return next
}

