import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import { Router, Switch, Route } from 'react-router';

import { history, store } from './history';
import * as routes from './routes';

import './assets/scss/main.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                {Object.keys(routes).map(x => {
                    const route = routes[x];
                    return (
                        <Route path={route.path} exact={route.exact} component={route.component} key={`key-${route.path}`} />
                    );
                })}
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
