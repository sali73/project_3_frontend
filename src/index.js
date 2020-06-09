import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import Test from "./Test";

const routes = [
    {
        path:"/contact-us",
        component: Contact,
        name: "Contact_Us"
    },
    {
        path:"/about",
        component: About,
        name: "About"
    },
    {
        path:"/",
        component: App,
        name: "Home"
    }
]

const root = document.getElementById("root");
let hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
       <Switch>
           < Route path = {'/test/:id'} component={Test}></Route>
        {
            routes.map((route)=> {
                return (
                    <Route 
                      path={route.path} 
                      component={route.component}
                      key={route.name}
                    ></Route>
                )
            })
        }
      </Switch> 
    </Router>, root
);
export{
    routes
}