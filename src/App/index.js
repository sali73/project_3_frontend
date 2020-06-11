import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import MainNav from '../MainNav';
import { routes } from "./routes";

import Edit from '../Edit'
import Show from '../Show'
import Footer from '../Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
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
              path="/show/:slug"
              component={Show}
            ></Route>
          </Switch> 
        </main>
        <Footer />
      </div>
    )
  }
}
export default App;
