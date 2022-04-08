import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, resetData } from "../../state/user/UserAction";

const User = (props)=>{
    let user = useSelector((state)=>state.userReducer.user);
    let userDispatcher = useDispatch();
    let navigator = useNavigate();
    
    if(user._id!=""){
        navigator("/");
    }

    let [username, setUsername] = useState(user.username);
    let [password, setPassword] = useState(user.password);
    let [age, setAge] = useState(user.age);
    let [email, setEmail] = useState(user.email);
    let [phone, setPhone] = useState(user.phone);
    let [address, setAddress] = useState(user.address);

    const loginUserFunc = ()=>{
        let userObj = {
            username,
            password,
            age,
            email,
            phone,
            address
        }
        console.log("login with ", userObj);
        userDispatcher(loginUser(userObj));
    }

    return (
        <Fragment>
            <h1>User Login Page</h1>
            <section className="componentClass">
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Username</b>
                        <input type="text" className="form-control col-md-6" value={username}
                            onChange={(evt)=>setUsername(evt.target.value)} maxLength={40} placeholder="Username"/>
                    </div>
                    <div className="col-md-12">
                        <b>Password</b>
                        <input type="password" className="form-control col-md-6" value={password}
                            onChange={(evt)=>setPassword(evt.target.value)} maxLength={40} />
                    </div>
                    <div className="col-md-12">
                        <b>Age</b>
                        <input type="number" className="form-control col-md-6" value={age}
                            onChange={(evt)=>setAge(evt.target.value)} maxLength={3} />
                    </div>
                    <div className="col-md-12">
                        <b>Email</b>
                        <input type="text" className="form-control col-md-6" value={email}
                            onChange={(evt)=>setEmail(evt.target.value)} placeholder="Example@email.com"/>
                    </div>
                    <div className="col-md-12">
                        <b>Phone</b>
                        <input type="number" className="form-control col-md-6" value={phone}
                            onChange={(evt)=>setPhone(evt.target.value)} maxLength={20} />
                    </div>
                    <div className="col-md-12">
                        <b>Address</b>
                        <input type="text" className="form-control col-md-6" value={address}
                            onChange={(evt)=>setAddress(evt.target.value)}/>
                    </div>
                </div>
                <input type="button" className="btn btn-primary col-md-3 saveUser" value="Create/Login" onClick={()=>loginUserFunc()} />
            </section>
        </Fragment>
    )
}

export default User;