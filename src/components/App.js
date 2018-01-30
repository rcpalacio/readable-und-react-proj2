import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import HomePage from '../pages/home/Home.page';
import NotFoundPage from '../pages/notFound/NotFound.page';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route
                  key="Pagina home"
                  exact path="/"
                  component={HomePage}
              />
              <Route path='/not-found' component={NotFoundPage} />
              <Redirect to="/not-found" />
          </Switch>
      </div>
    );
  }
}

export default App;
