export const SET_FROM_STATION  = 'ACTION_SET_FROM_STATION'
export const SET_TO_STATION    = 'ACTION_SET_TO_STATION'
export const SWAP_STATION      = 'ACTION_SWAP_STATION'
export const SET_DATE          = 'ACTION_SET_DATE'
export const SET_TIME          = 'ACTION_SET_TIME'
export const SET_DEPARTURE_TIME = 'ACTION_SET_DEPARTURE_TIME'
export const SET_ARRIVAL_TIME   = 'ACTION_SET_ARRIVAL_TIME'

export const SET_SORT          = 'ACTION_SET_SORT'
export const SET_ORDER         = 'ACTION_SET_ORDER'
export const SORT              = 'ACTION_SORT'

export const ADD_FILTER        = 'ACTION_ADD_FILTER'
export const REMOVE_FILTER     = 'ACTION_REMOVE_FILTER'
export const FILTER            = 'ACTION_FILTER'
export const FILTER_DEPARTURE_TIME = 'ACTION_FILTER_DEPARTURE_TIME'
export const FILTER_ARRIVAL_TIME   = 'ACTION_FILTER_ARRIVAL_TIME'

export const SEARCH            = 'ACTION_SEARCH'
export const RESTORE_SEARCH    = 'ACTION_RESTORE_SEARCH'

export const SET_FARE          = 'ACTION_SET_FARE'

const ACTION_TYPES = {
    setFromStation : SET_FROM_STATION,
    setToStation   : SET_TO_STATION,
    swapStation    : SWAP_STATION,
    setDate        : SET_DATE,
    setDepartureTime : SET_DEPARTURE_TIME,
    setArrivalTime   : SET_ARRIVAL_TIME,

    setSort        : SET_SORT,
    setOrder       : SET_ORDER,
    sort           : SORT,

    addFilter      : ADD_FILTER,
    removeFilter   : REMOVE_FILTER,
    filter         : FILTER,
    filterDepartureTime : FILTER_DEPARTURE_TIME,
    filterArrivalTime   : FILTER_ARRIVAL_TIME,

    search         : SEARCH,
    restoreSearch  : RESTORE_SEARCH,

    setFare        : SET_FARE,
}

export default ACTION_TYPES

