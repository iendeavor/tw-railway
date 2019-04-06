import {
    SET_DATE,
    SET_FROM_STATION,
    SET_TO_STATION,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SWAP_STATION,
} from './actionTypes'
import {
    FROM_STATION,
    TO_STATION,
    DEPARTURE_DATE,
    SCHEDULES,
} from './keys'

import store from '../store'
import { getTimetable } from '../resources/timetable'


const dispatch = store.dispatch

export const handleChangeDate = date => {
    dispatch({
        type: SET_DATE,
        payload: {
            [DEPARTURE_DATE]: date,
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
        type: SET_FROM_STATION,
        payload: {
            [FROM_STATION]: ID,
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
        type: SET_TO_STATION,
        payload: {
            [TO_STATION]: ID,
        },
        meta: {
            debounce: {
                leading: true,
            },
        },
    })
}

export const handleSwapStation = () => {
    dispatch({ type: SWAP_STATION, })
}

export const handleSearchRequest = () => {
    const from = store.getState().station[FROM_STATION]
    const to = store.getState().station[TO_STATION]
    const on = store.getState().date[DEPARTURE_DATE]
    getTimetable(from, to, on).then(timetable => {
        dispatch({
            type: SEARCH_SUCCESS,
            payload: {
                [SCHEDULES]: timetable,
            },
        })
    })
}

export const handleSearchSuccess = () => {}

