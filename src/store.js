import { createStore } from 'redux'

import reducer from './reducer'
import {
    SORT_BY,
    ORDER_BY,
} from './constants/keys'
import {
    ARRIVAL,
    FIRST,
} from './constants/sortTypes'

const default_state = {
}

const store = createStore(
    reducer,
    default_state,
)

export default store

