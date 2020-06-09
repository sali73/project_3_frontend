import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';

const root = document.getElementById("root");
let hist = createBrowserHistory();

ReactDOM.render((
    <BrowserRouter history={hist}>
       <App />
    </BrowserRouter>
), root);
