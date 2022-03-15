import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";
import User from "./common/UserComponent";
import Header from "./common/HeaderComponent";
import Name from "./common/NameComponent";
import "./app.css";

export default class AppComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            myName:"Cody"
        }
    }

    render(){
        return (
        <Router>
        <Header/>
            <Routes>
                <Route path="/user" element={<User />} />
                <Route path="/name" element={<Name myName={this.state.myName}></Name>} />
            </Routes>
        </Router>
        );
    }
}