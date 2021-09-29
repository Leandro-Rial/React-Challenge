import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from '../components/UserList';
import PageNotFound from '../utils/PageNotFound';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={UserList} />
                
                <Route exact path="*" component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter
