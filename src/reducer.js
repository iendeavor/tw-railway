import { combineReducers } from 'redux'

import sort from './reducers/sort'
import station from './reducers/station'
import filter from './reducers/filter'
import date from './reducers/date'


export default combineReducers({
    sort,
    station,
    filter,
    date,
})
