import React, { Component } from "react";

class MyName extends PureComponent{
    name = "Cody";
    render(){return (
        <>
            <b>My name is {name}</b>
        </>
    )}
}

export default MyName;