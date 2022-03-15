import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";
import Footer from "./common/FooterComponent";
import Home from "./common/HomeComponent";
import { MyName } from "./common/MyNameComponent";
import Header from "./common/HeaderComponent";
import About from "./common/AboutComponent";
import NotFound from "./common/NotFoundComponent";

export default class AppComponent extends Component{

    constructor ( props, context){
        super(props);

        this.state = {
            timeNow : (new Date()).toLocaleString()
        }
        this.updateTime();
    }

    updateTime = ()=>{setInterval(() => {
        this.setState({
            timeNow : (new Date()).toLocaleString()
        })
    }, 1000)};

    updateTitle = (val)=>{
        this.setState({title:val});
    }

    render(){
        let someJSValues = "My name is Cody";

        return (
            <>
                <Header/>
                <h1>This is the react view {this.state.title}</h1>
                <div>{this.state.timeNow}</div>
                <Routes>
                    <Route path="/home" element={
                    <Home title={"Home Component"} updateTitle={this.updateTitle}>
                        <h2>This is a child</h2>
                        <h2>This is second child</h2>
                    </Home>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer/>
            </>
        )
    }
}