import TYPES from '../constants/actionTypes'
import KEYS from '../constants/keys'


const defaultState = {
    [KEYS.selectedFilters]: new Set(),
}

export default (state=defaultState, action) => {
    const next = {...state}

    let selectedFilters = new Set(Array.from(next[KEYS.selectedFilters]))
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
