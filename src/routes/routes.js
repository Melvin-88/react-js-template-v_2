import React from 'react';
import { Route } from 'react-router';
import App from '../components/App';
import Home from '../components/home/Home/Home';
import Dashboard from '../components/dashboard/Dashboard/Dashboard';
import {
    Switch
} from 'react-router-dom'

export default (
    <App>
        <div>
            <Route exact={true} path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
        </div>
    </App>
)
