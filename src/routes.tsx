import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from './history';
import { isAuthenticated } from './services/auth';
import Login from './pages/Login';
import Main from './pages/Main';

const PrivateRoute = ({component: Component, ...rest}: any) => {
    return (
        <Route 
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location }}} />
                )

            }
        />
    );
}

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={() => <Login />} />
            <PrivateRoute path='/app' component={() => <Main />} />
            <Route path='*' component={() => <h1>Page not found</h1>} />
        </Switch>
    </Router>
);

export default Routes;