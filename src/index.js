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
            <Route path="/ask" component={(props) => (
                <App type={"ask"} {...props} />
            )}/>
            <Route path="/show/:page" component={(props) => (
                <App type={"show"} {...props} />
            )}/>
            <Route path="/show" component={(props) => (
                <App type={"show"} {...props} />
            )}/>
            <Route path="/jobs/:page" component={(props) => (
                <App type={"jobs"} {...props} />
            )}/>
            <Route path="/jobs" component={(props) => (
                <App type={"jobs"} {...props} />
            )}/>
            <Route path="/newest/:page" component={(props) => (
                <App type={"new"} {...props} />
            )}/>
            <Route path="/newest" component={(props) => (
                <App type={"new"} {...props} />
            )}/>
            <Route path="/best/:page" component={(props) => (
                <App type={"best"} {...props} />
            )}/>
            <Route path="/best" component={(props) => (
                <App type={"best"} {...props} />
            )}/>
            <Route path="/news/:page" component={(props) => (
                <App type={"top"} {...props} />
            )}/>
            <Route path="/news" component={(props) => (
                <App type={"top"} {...props} />
            )}/>
            <Route path="/" component={(props) => (
                <App type={"top"} {...props} />
            )}/>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
