import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import MainNav from '../MainNav';
import { routes } from "./routes";
import UserContext from './UserContext'
import Edit from '../Edit'
import Show from '../Show'
import Footer from '../Footer'

function App () {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  return (
    <div className="App">
      <UserContext.Provider value={{userData, setUserData}}>
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
      </UserContext.Provider>
    </div>
  )
}

export default App;
