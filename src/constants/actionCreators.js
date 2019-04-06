import ACTION_TYPES from './actionTypes'
import KEYS from './keys'

import store from '../store'
import { getTimetable } from '../resources/timetable'


const dispatch = store.dispatch

export const handleChangeDate = date => {
    dispatch({
        type: ACTION_TYPES.setDate,
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

export const handleSetFromStation = ID => {
    dispatch({
        type: ACTION_TYPES.setFromStation,
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

export const handleSetToStation = ID => {
    dispatch({
        type: ACTION_TYPES.setToStation,
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

export const handleSwapStation = () => {
    dispatch({ type: ACTION_TYPES.swapStation, })
}

export const handleSearchRequest = () => {
    const from = store.getState().station[KEYS.fromStation]
    const to = store.getState().station[KEYS.toStation]
    const on = store.getState().date[KEYS.departureDate]
    getTimetable(from, to, on).then(timetable => {
        dispatch({
            type: ACTION_TYPES.search,
            payload: {
                [KEYS.schedules]: timetable,
            },
        })
    })
}

