import TYPES from './actionTypes'
import KEYS from './keys'
import store from '../store'
import { getTimetable } from '../resources/timetable'


const dispatch = store.dispatch

const handleChangeDate = date => {
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
    handleSort()
    handleFilter(store.getState().schedule[KEYS.schedules])
}

const handleSort = schedules => {
    if (schedules === undefined) {
        schedules = store.getState().schedule[KEYS.originalSchedules]
    }
    dispatch({
        type: TYPES.sort,
        payload: {
            [KEYS.sortBy]: store.getState().sort[KEYS.sortBy],
            [KEYS.schedules]: schedules,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const handleFilter = schedules => {
    if (schedules === undefined) {
        schedules = store.getState().schedule[KEYS.originalSchedules]
    }
    dispatch({
        type: TYPES.filter,
        payload: {
            [KEYS.selectedFilters]: store.getState().filter[KEYS.selectedFilters],
            [KEYS.schedules]: schedules,
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
    handleSort(store.getState().schedule[KEYS.schedules])
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
    handleFilter()
    handleSort(store.getState().schedule[KEYS.schedules])
}

const CREATORS = Object.freeze({
    handleChangeDate,
    handleSetFromStation,
    handleSetToStation,
    handleSwapStation,
    handleSearchRequest,
    handleAddingFilter,
    handleRemovingFilter,
    handleSetSort,
    handleFilter,
    handleSort,
})

export default CREATORS

