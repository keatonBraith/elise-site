import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Search from './components/Search';
import { Switch, Route } from 'react-router-dom'


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
    </Switch>
)


