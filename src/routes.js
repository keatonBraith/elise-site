import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from '.components/pages/About';
import Auth from './components/pages/Auth';
import Search from './components/pages/Search';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/about' component={About} />
        <Route path='/search' component={Search} />
    </Switch>
)

