import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import MainNav from '../MainNav';
import { routes } from "./routes";
import Edit from '../Edit';
import Show from '../Show';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav></MainNav>
        <main>
          <Switch>
            {routes.map((route)=> {
                return (
                    <Route
                      path={route.path} 
                      component={route.component}
                      key={route.name}
                    ></Route>
                )
            })}
            <Route
              path="/edit/:slug"
              component={Edit}
            ></Route>
            <Route
              path="product/:slug"
              component={Show}
            ></Route>
          </Switch> 
        </main>
      </div>
    )
  }
}
export default App;
