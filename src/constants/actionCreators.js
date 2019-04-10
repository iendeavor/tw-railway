import TYPES from './actionTypes'
import KEYS from './keys'
import store from '../store'
import { getTimetable } from '../resources/timetable'
import { getFare } from '../resources/fare'


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

const handleSetFromCountry = ID => {
    dispatch({
        type: TYPES.setFromCountry,
        payload: {
            [KEYS.fromCountry]: ID,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const handleSetToCountry = ID => {
    dispatch({
        type: TYPES.setToCountry,
        payload: {
            [KEYS.toCountry]: ID,
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

const handleAddingMessage = message => {
    dispatch({
        type: TYPES.addMessage,
        payload: {
            [KEYS.message]: message,
        }
    })
}

const handleRemovingMessage = message => {
    dispatch({
        type: TYPES.removeMessage,
    })
}

const handleSearchRequest = () => {
    const from = store.getState().station[KEYS.fromStation]
    const to = store.getState().station[KEYS.toStation]
    const on = store.getState().date[KEYS.departureDate]
    getFare(from, to)
        .then(fares => {
            dispatch({
                type: TYPES.setFare,
                payload: {
                    [KEYS.fares]: fares,
                },
            })
        })
        .then(() => {
            getTimetable(from, to, on).then(timetable => {
                dispatch({
                    type: TYPES.search,
                    payload: {
                        [KEYS.schedules]: timetable,
                    },
                })
                handleSetSort(store.getState().sort[KEYS.sortBy])
            })
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
    handle()
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
    handle()
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
    handle()
}

const handleSetDepartureTime = time => {
    dispatch({
        type: TYPES.setDepartureTime,
        payload: {
            [KEYS.departureTime]: time,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
    handle()
}

const handleSetArrivalTime = time => {
    dispatch({
        type: TYPES.setArrivalTime,
        payload: {
            [KEYS.arrivalTime]: time,
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
    handle()
}

const handle = () => {
    handleRestoreSearch()
    handleFilter()
    handleSort()
    handleFilterDepartureTime()
    handleFilterArrivalTime()
}

const handleFilterDepartureTime = () => {
    dispatch({
        type: TYPES.filterDepartureTime,
        payload: {
            [KEYS.departureTime]: store.getState().time[KEYS.departureTime],
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const handleFilterArrivalTime = () => {
    dispatch({
        type: TYPES.filterArrivalTime,
        payload: {
            [KEYS.arrivalTime]: store.getState().time[KEYS.arrivalTime],
        },
        meta: {
            debounce: {
                time: 300,
                leading: true,
            },
        },
    })
}

const CREATORS = Object.freeze({
    handleSetDate,
    handleSetArrivalTime,
    handleSetDepartureTime,

    handleSetFromCountry,
    handleSetToCountry,
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

    handleAddingMessage,
    handleRemovingMessage,
})

export default CREATORS

