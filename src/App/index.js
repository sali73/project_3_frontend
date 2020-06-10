import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import MainNav from '../MainNav'
import { routes } from "./routes";

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
      </Switch> 
        </main>
        <aside></aside>
      </div>
    )
  }
}
export default App;
