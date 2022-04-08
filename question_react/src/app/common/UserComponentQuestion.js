import React, { Component } from "react";

export default class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"user1",
            address:"123 Fake St.",
            age:42,
            sessionName:"React"
        }

        this.username = React.createRef();
        this.address = React.createRef();
        this.age = React.createRef();
        this.sessionName = React.createRef();
    }

    submitForm = (event)=>{
        const username = this.username.current.value == ''?this.state.username:this.username.current.value;
        const address = this.address.current.value==''?this.state.address:this.address.current.value;
        const age = this.age.current.value==''?this.state.age:this.age.current.value;
        const sessionName = this.sessionName.current.value==''?this.state.sessionName:this.sessionName.current.value;

        this.setState({
            username,
            address,
            age,
            sessionName
        });

        event.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.username == this.state.username
            && nextState.address == this.state.address
            && nextState.age == this.state.age
            && nextState.sessionName == this.state.sessionName) {
            return false;
        } else {
            return true;    
        }
    }

    render(){
        return (<>
            <label>
                Name: <>{this.state.username}</><br/>
                Address: <>{this.state.address}</><br/>
                Age: <>{this.state.age}</><br/>
                Session: <>{this.state.sessionName}</>
            </label>
            <form onSubmit={this.submitForm}>
            <table><tbody>
                <tr><td>Name</td><td><input ref={this.username}></input></td></tr>
                <tr><td>Address</td><td><input ref={this.address}></input></td></tr>
                <tr><td>Age</td><td><input ref={this.age}></input></td></tr>
                <tr><td>Session</td><td><input ref={this.sessionName}></input></td></tr>
                <tr><td colSpan={2} align="right"><input type="submit" label="Submit"></input></td></tr>
            </tbody></table>
            </form>
        </>);
    }
}

//Coding Test 1
// create a user class component with state 
// create react ref elements likes - name, address, age and seesionName
// use ref elements to create controlled component
// upon form submit set the values from these components to the state
// show the user typed values from state to multiple labels 
// list down benefits of controlled over uncontrolled components
//controlled doesn't need to be explicitly updated
//ucontrolled allows custom functionality and doesn't rerender unnecessarily
