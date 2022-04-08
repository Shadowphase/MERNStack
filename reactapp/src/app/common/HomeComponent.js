import React, { Component } from "react";
import {PropTypes} from "prop-types";
import Cars from "./CarComponent";
import Student from "./StudentComponent";

export default class Home extends Component{
    constructor(props, context){
        super(props);

        this.state = {
            cars:{
                car1:"Avalon",
                car2:"Crossfire",
                car3:"Firebird"
            },
            
            student : {
                name:"Cellestria",
                age:42,
                gpa:3.8
            },

            address : { 
                street:"123 fake st.",
                city:"town",
                state:"home"
            }
        }
    }

    changeVal = (event)=>{
        console.log(event.target);
        this.setState({username:event.target.value});
    }

    updateStreet = (event)=>{
        const addr = this.state.address;
        addr.street = event.target.value;
        this.setState({addr})
    }

    updateCity = (event)=>{
        const addr = this.state.address;
        addr.city = event.target.value;
        this.setState({addr})
    }

    updateState = (event)=>{
        const addr = this.state.address;
        addr.state = event.target.value;
        this.setState({addr})
    }

    render(){
        return(
            <>
                <h1>{this.props.title}</h1>
                <input type="button" onClick={()=>this.props.updateTitle("New title")} value="Click Me"></input>
                <p>{this.state.username}</p>
                <input type={"text"} value={this.state.username} onChange={this.changeVal}></input>
                {this.props.children[0]}
                {this.props.children[1]}
                <h3>{this.props.defaultVar}</h3>
                <h2>Address</h2>
                <p>Street: {this.state.address.street}</p>
                <p>City: {this.state.address.city}</p>
                <p>State: {this.state.address.state}</p>
                <input type={"text"} value={this.state.address.street} onChange={this.updateStreet}/>
                <input type={"text"} value={this.state.address.city} onChange={this.updateCity}/>
                <input type={"text"} value={this.state.address.state} onChange={this.updateState}/><br/>
                {/* <Cars cars={this.state.cars}/>
                <Student studentDetails={this.state.student}/> */}
            </>
        )
    };
}

Home.defaultProps = {
    defaultVar : "Default Value"
}

Home.propTypes = {
    title : PropTypes.string.isRequired
}