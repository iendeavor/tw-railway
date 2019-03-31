import { createStore, applyMiddleware } from 'redux'
import createDebounce from 'redux-debounced'

import reducer from './reducer'

const store = createStore(
    reducer,
    applyMiddleware(createDebounce()),
)

export default store

