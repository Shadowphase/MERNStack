import React, {Component, PureComponent} from "react";

export default class Name extends Component {
    constructor(props){
        super(props);

        this.state={
            title:"Starting title"
        }

        this.title = React.createRef();
    }

    componentDidMount(){
        console.log("Welcome");
    }
    getSnapshotBeforeUpdate(prevState, prevProps){
        if(prevState.title != this.state.title){
            return true;
        }
        
        return false;
    }
    componentDidUpdate(prevState, prevProps){}
    componentWillUnmount(){
        alert("Good Bye");
    }

    onClickFunc = (event)=>{
        this.setState({title:event.target.value});
    }

    render(){
        return(<>
            <div align="center">{this.state.title} {this.props.myName}</div>
            <ChildName clickFunc={this.onClickFunc} title={this.title}></ChildName>
        </>);
    }
}

export class ChildName extends PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        return(<>
            <input type="text" onChange={this.props.clickFunc} ref={this.props.title}></input>
        </>);
    }
}

//Coding Test 3
//Create a component with your name (first)
//Show all lifecycle hooks that have been discussed
//Create another example with Pure component
//Make that pure component child of first component
//Pass an event/function as a prop to Child component and use it to send data back, and show update 
//use ref keyword to access one element in first component