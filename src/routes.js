import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Search from './components/Search';


export default (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
    </Router>
)


