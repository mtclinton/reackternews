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
            <Route path="/ask">
                <App type={"ask"}/>
            </Route>
            <Route path="/show">
                <App type={"show"}/>
            </Route>
            <Route path="/jobs">
                <App type={"job"}/>
            </Route>
            <Route path="/newest">
                <App type={"new"}/>
            </Route>
            <Route path="/best">
                <App type={"best"}/>
            </Route>
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
