import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>

        <Switch>
            <Route path="/ask/:page" component={(props) => (
                <App type={"ask"} {...props} />
            )}/>
            <Route path="/ask">
                <App type={"ask"}/>
            </Route>
            <Route path="/show/:page" component={(props) => (
                <App type={"show"} {...props} />
            )}/>
            <Route path="/show">
                <App type={"show"}/>
            </Route>
            <Route path="/jobs/:page" component={(props) => (
                <App type={"jobs"} {...props} />
            )}/>
            <Route path="/jobs">
                <App type={"job"}/>
            </Route>
            <Route path="/newest/:page" component={(props) => (
                <App type={"new"} {...props} />
            )}/>
            <Route path="/newest" component={(props) => (
                <App type={"new"} {...props} />
            )}/>
            <Route path="/best/:page" component={(props) => (
                <App type={"best"} {...props} />
            )}/>
            <Route path="/best">
                <App type={"best"}/>
            </Route>
            <Route path="/news/:page" component={(props) => (
                <App type={"top"} {...props} />
            )}/>
            <Route path="/news">
                <App type={"top"}/>
            </Route>
            <Route path="/">
                <App type={"top"}/>
            </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
