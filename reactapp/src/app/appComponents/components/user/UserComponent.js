import React, { Component, Fragment } from "react";

export default class UserComponenet extends Component{
    constructor(props, context){
        super(props);

        this.state = {
            username:props.user.username,
            password:props.user.password,
            street:props.user.street,
            mobile:props.user.mobile
        }
    }

    onTextChange = (event)=>{
        let target = event.target;
        let value = target.value;
        let classList = target.classList;

        if(classList.contains("username")){
            this.setState({username:value});
        } else if (classList.contains("pass")){
            this.setState({password:value});
        } else if (classList.contains("street")){
            this.setState({street:value});
        } else if (classList.contains("mobile")){
            this.setState({mobile:value});
        }
    }

    loginUser = ()=>{
        //alert("logging in with " + JSON.stringify(this.state));
        this.props.addUserToStoreDB(this.state);
    }

    render(){
        return (
        <Fragment>
            <h1>User Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" value={this.state.username}
                            placeholder="User Name" onChange={this.onTextChange} maxLength={40} />
                    </div>
                    <div className="col-md-12">
                        <b>Password</b>
                        <input type="password" className="form-control col-md-6 pass" value={this.state.password}
                            placeholder="Password" onChange={this.onTextChange} maxLength={40} />
                    </div>
                    <div className="col-md-12">
                        <b>Street</b>
                        <input type="text" className="form-control col-md-6 street" value={this.state.street}
                            onChange={this.onTextChange} />
                    </div>
                    <div className="col-md-12">
                        <b>Mobile</b>
                        <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile}
                            onChange={this.onTextChange} maxLength={11} />
                    </div>
                </div>
                <input type="button" className={"btn btn-primary col-md-2 saveUser"} value={"Create/Login"} onClick={this.loginUser} />
            </section>
        </Fragment>
        )
    }
}