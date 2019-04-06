export const SET_FROM_STATION  = 'ACTION_SET_FROM_STATION'
export const SET_TO_STATION    = 'ACTION_SET_TO_STATION'
export const SWAP_STATION      = 'ACTION_SWAP_STATION'
export const SET_DATE          = 'ACTION_SET_DATE'
export const SET_TIME          = 'ACTION_SET_TIME'

export const SET_SORT          = 'ACTION_SET_SORT'
export const SET_ORDER         = 'ACTION_SET_ORDER'
export const SORT              = 'ACTION_SORT'

export const ADD_FILTER        = 'ACTION_ADD_FILTER'
export const REMOVE_FILTER     = 'ACTION_REMOVE_FILTER'
export const FILTER            = 'ACTION_FILTER'

export const SEARCH            = 'ACTION_SEARCH'
export const RESTORE_SEARCH    = 'ACTION_RESTORE_SEARCH'

const ACTION_TYPES = {
    setFromStation : SET_FROM_STATION,
    setToStation   : SET_TO_STATION,
    swapStation    : SWAP_STATION,
    setDate        : SET_DATE,
    setTime        : SET_TIME,

    setSort        : SET_SORT,
    setOrder       : SET_ORDER,
    sort           : SORT,

    addFilter      : ADD_FILTER,
    removeFilter   : REMOVE_FILTER,
    filter         : FILTER,

    search         : SEARCH,
    restoreSearch  : RESTORE_SEARCH,
}

export default ACTION_TYPES

