import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App.jsx'
import store from './store'
import './i18n';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/taiwan-railway-search" component={App} />
        </Router>
    </Provider>
, document.getElementById('root'));

