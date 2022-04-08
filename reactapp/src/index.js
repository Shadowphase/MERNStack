// //this is the entry point of our application
// console.log("this is the entry file of our project");

import React from "react";
import {render} from "react-dom";
import AppComponent from "./app/app";
import {Provider} from "react-redux";
import Store from "./app/state/Store";

render(
    <Provider store={Store}>
        <AppComponent/>
    </Provider>,
    document.getElementById("root")
)