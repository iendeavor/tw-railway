import { combineReducers } from 'redux'

import sort from './reducers/sort'
import station from './reducers/station'


export default combineReducers({
    sort,
    station,
})
