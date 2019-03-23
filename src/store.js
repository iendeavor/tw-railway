import { createStore } from 'redux'

import reducer from './reducer'
import {
    SORT_BY,
    ORDER_BY,
} from './constants/keys'
import {
    ARRIVE,
    FIRST,
} from './constants/sortTypes'

const default_state = {
    sort: {
        [SORT_BY]: ARRIVE,
        [ORDER_BY]: FIRST,
    },
}

const store = createStore(
    reducer,
    default_state,
)

export default store

