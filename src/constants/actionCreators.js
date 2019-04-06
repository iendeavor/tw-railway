import {
    SET_DATE,
} from './actionTypes'
import {
    DEPARTURE_DATE,
} from './keys'

import store from '../store'


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

