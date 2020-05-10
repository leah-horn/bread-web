import React from 'react';
import Header from './Header'
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Routes from './Routes'
import Login from './Login'
import './App.css';

const history = createBrowserHistory();
function App() {
  return (
      <div className="App">
          <Router history={history}>
          <Header />
              <div>
                  <Switch>
                      <Route exact path={Routes.home}>
                          <div className="App-header">
                              Hello World
                              <p />
                              <Link to={Routes.newUser}>New User</Link> | <Link to={Routes.recipies}>Recipies</Link>
                          </div>
                      </Route>
                      <Route path={Routes.newUser}>
                          <div className="App-header">New User</div>
                      </Route>
                      <Route path={Routes.recipies}>
                          <div className="App-header">Recipies</div>
                      </Route>
                      <Route path={Routes.login}>
                          <Login />
                      </Route>
                      <Route path={Routes.logout}>
                      </Route>
                      <Route path={Routes.profile}>
                      </Route>
                  </Switch>
              </div>
          </Router>
    </div>
  );
}

export default App;
