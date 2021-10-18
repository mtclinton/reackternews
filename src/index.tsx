import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';

import history from './history';

import Ask from './pages/Ask';
import Show from './pages/Show';
import Jobs from './pages/Jobs';
import Newest from './pages/Newest';
import Best from './pages/Best';
import News from './pages/News';

function NotFound() {
    return (
        <div>
            <h1>That page was not found</h1>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Switch>
                <Route
                    path="/ask/:page(\d+)?"
                    component={Ask}
                />
                <Route
                    path="/show/:page(\d+)?"
                    component={Show}
                />
                <Route
                    path="/jobs/:page(\d+)?"
                    component={Jobs}
                />
                <Route
                    path="/newest/:page(\d+)?"
                    component={Newest}
                />
                <Route
                    path="/best/:page(\d+)?"
                    component={Best}
                />
                <Route
                    path="/news/:page(\d+)?"
                    component={News}
                />
                <Route
                    exact
                    path="/"
                    component={News}
                />
                <Route path="" component={NotFound} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
