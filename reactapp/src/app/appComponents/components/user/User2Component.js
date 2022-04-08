import React, { Component, Fragment } from "react";

export default class User2 extends Component{
    constructor(props, context){
        super(props);

        this.state = {
            username: props.user2.username,
            password: props.user2.password,
            age: props.user2.age,
            email: props.user2.email,
            phone: props.user2.phone
        }

        this.username = React.createRef();
        this.password = React.createRef();
        this.age = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
    }

    onTextChange = (event)=>{
        let target = event.target;
        let value = target.value;
        let classList = target.classList;

        if(classList.contains("username")){
            this.setState({username:value});
        }else if(classList.contains("password")){
            this.setState({password:value});
        }else if(classList.contains("age")){
            this.setState({age:value});
        }else if(classList.contains("email")){
            this.setState({email:value});
        }else if(classList.contains("phone")){
            this.setState({phone:value});
        }
    }

    loginUser = ()=>{
        this.props.login(this.state);
    }

    componentWillUnmount(){
        this.props.reset();
    }

    render(){
        return (
            <Fragment>
                <h1>User2 Login Page</h1>
                <section className="componentClass">
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Username</b>
                            <input type="text" className="form-control col-md-6 username" ref={this.state.username}
                                onChange={this.onTextChange} maxLength={40} />
                        </div>
                        <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 password" ref={this.state.password}
                                onChange={this.onTextChange} maxLength={40} />
                        </div>
                        <div className="col-md-12">
                            <b>Age</b>
                            <input type="number" className="form-control col-md-6 age" ref={this.state.age}
                                onChange={this.onTextChange} maxLength={3} />
                        </div>
                        <div className="col-md-12">
                            <b>Email</b>
                            <input type="text" className="form-control col-md-6 email" ref={this.state.email}
                                onChange={this.onTextChange} />
                        </div>
                        <div className="col-md-12">
                            <b>Phone</b>
                            <input type="number" className="form-control col-md-6 phone" ref={this.state.phone}
                                onChange={this.onTextChange} maxLength={20} />
                        </div>
                    </div>
                    <input type="button" className="btn btn-primary col-md-3 saveUser" value="Create/Login" onClick={this.loginUser} />
                </section>
            </Fragment>
        )
    }
}
