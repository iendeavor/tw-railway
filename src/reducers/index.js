import { combineReducers } from 'redux'

import sort from './sort'
import station from './station'
import filter from './filter'
import date from './date'
import schedule from './schedule'


export default combineReducers({
    sort,
    station,
    filter,
    date,
    schedule,
})
