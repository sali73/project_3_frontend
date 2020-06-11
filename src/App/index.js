import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import MainNav from '../MainNav';
import { routes } from "./routes";
import UserContext from './UserContext'
import Edit from '../Edit'
import Show from '../Show'
import Footer from '../Footer'
import AuthNav from '../AuthNav';

function App () {

  // set initial user state
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  // check for login and handle jwt auth
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await axios.post(
        'http://localhost:3001/auth/validateToken',
        null,
        { headers: { 'x-auth-token': token },
      });
      if (tokenRes.data) {
        const userRes = await axios.get(
          'http://localhost:3001/auth/', 
          { headers: { 'x-auth-token': token },
        })
        setUserData({
          token,
          user: userRes.data,
        })
      }
    }
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{userData, setUserData}}>
        <MainNav />
        <AuthNav />
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
