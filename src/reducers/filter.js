import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'

const options = [
    {
        value: KEYS.wheelChair,
        name: 'Wheel chair',
        icon: 'fas fa-wheelchair',
    },
    {
        value: KEYS.bikeSpace,
        name: 'Bike space',
        icon: 'fas fa-bicycle',
    },
    {
        value: KEYS.nursingRoom,
        name: 'Nursing Room',
        icon: 'fas fa-baby',
    },
]

const defaultState = {
    [KEYS.selectedFilters]: new Set(),
    [KEYS.options]: options,
}

export default (state=defaultState, action) => {
    if (action === undefined) {
        return state
    }

    const next = {...state}

    let selectedFilters = new Set(Array.from(state[KEYS.selectedFilters]))
    switch (action.type) {
        case TYPES.addFilter:
            next[KEYS.selectedFilters] = selectedFilters.add(action.payload[KEYS.selectedFilter])
            break
        case TYPES.removeFilter:
            selectedFilters.delete(action.payload[KEYS.selectedFilter])
            next[KEYS.selectedFilters] = selectedFilters
            break
        default:
            break
    }

    return next
}
