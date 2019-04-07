import TYPES from './actionTypes'
import KEYS from './keys'
import store from '../store'
import { getTimetable } from '../resources/timetable'


const dispatch = store.dispatch

const handleSetDate = date => {
    dispatch({
        type: TYPES.setDate,
        payload: {
            [KEYS.departureDate]: date,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const handleSetFromStation = ID => {
    dispatch({
        type: TYPES.setFromStation,
        payload: {
            [KEYS.fromStation]: ID,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const handleSetToStation = ID => {
    dispatch({
        type: TYPES.setToStation,
        payload: {
            [KEYS.toStation]: ID,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const handleSwapStation = () => {
    dispatch({ type: TYPES.swapStation, })
}

const handleSearchRequest = () => {
    const from = store.getState().station[KEYS.fromStation]
    const to = store.getState().station[KEYS.toStation]
    const on = store.getState().date[KEYS.departureDate]
    getTimetable(from, to, on).then(timetable => {
        dispatch({
            type: TYPES.search,
            payload: {
                [KEYS.schedules]: timetable,
            },
        })
        handleSetSort(store.getState().sort[KEYS.sortBy])
    })
}

const handleRestoreSearch = () => {
    dispatch({
        type: TYPES.restoreSearch,
    })
}

const handleSetSort = value => {
    dispatch({
        type: TYPES.setSort,
        payload: {
            [KEYS.sortBy]: value
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
    handleRestoreSearch()
    handleSort()
    handleFilter()
}

const handleSort = () => {
    dispatch({
        type: TYPES.sort,
        payload: {
            [KEYS.sortBy]: store.getState().sort[KEYS.sortBy],
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const handleFilter = () => {
    dispatch({
        type: TYPES.filter,
        payload:{
            [KEYS.selectedFilters]: store.getState().filter[KEYS.selectedFilters],
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const handleAddingFilter = value => {
    dispatch({
        type: TYPES.addFilter,
        payload: {
            [KEYS.selectedFilter]: value,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
    handleFilter()
    handleSort()
}

const handleRemovingFilter = value => {
    dispatch({
        type: TYPES.removeFilter,
        payload: {
            [KEYS.selectedFilter]: value,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
    handleRestoreSearch()
    handleFilter()
    handleSort(store.getState().schedule[KEYS.schedules])
}

const CREATORS = Object.freeze({
    handleSetDate,

    handleSetFromStation,
    handleSetToStation,
    handleSwapStation,

    handleSearchRequest,
    handleRestoreSearch,

    handleAddingFilter,
    handleRemovingFilter,
    handleFilter,

    handleSetSort,
    handleSort,
})

export default CREATORS

