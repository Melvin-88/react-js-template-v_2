import React from 'react';
import { Route } from 'react-router';
import App from '../components/App';
import Home from '../components/home/Home/Home';
import Dashboard from '../components/dashboard/Dashboard/Dashboard';

export default (
  <App>
    <div>
      <Route exact={true} path='/' component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route render={()=><h3>Page not found</h3>} />
    </div>
  </App>
)
