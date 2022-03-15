// //this is the entry point of our application
// console.log("this is the entry file of our project");

import React from "react";
import {render} from "react-dom";
import AppComponent from "./app/ApplicationComponent";

render(
    <AppComponent/>,
    document.getElementById("root")
)