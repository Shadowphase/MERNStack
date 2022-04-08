import React, { useRef, useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInUser } from "../../../state/user/UserAction";

let UserHook = ()=>{
    let inputUsername = useRef(null);
    let inputPassword = useRef(null);
    let inputMobile = useRef(null);
    let inputStreet = useRef(null);

    let user = useSelector((state)=>state.userReducer.user);
    let dispatchUser = useDispatch()

    useEffect(()=>{
        inputUsername.current.value = user.username;
        inputPassword.current.value = user.password;
        inputMobile.current.value = user.mobile;
        inputStreet.current.value = user.street;
    });

    let handleSubmit = (event)=>{
        let userObj = {
            username: inputUsername.current.value,
            password: inputPassword.current.value,
            mobile: inputMobile.current.value,
            street: inputStreet.current.value
        }

        event.preventDedault();
        dispatchUser(signInUser(userObj));
    }

    return(<>
        <h1>User Hook</h1>
        <form className={"form col-md-10 userHook"} onSubmit={handleSubmit}>
            <label>
                <b>User Name</b>
                <input type="text" className="form-control col-md-12" ref={inputUsername}
                    placeholder="User Name" onChange={this.onTextChange} maxLength={40} />
            </label>
            <label>
                <b>Password</b>
                <input type="password" className="form-control col-md-12" ref={inputPassword}
                    placeholder="Password" onChange={this.onTextChange} maxLength={40} />
            </label>
            <label>
                <b>Street</b>
                <input type="text" className="form-control col-md-12" ref={inputStreet}
                    onChange={this.onTextChange} />
            </label>
            <label>
                <b>Mobile</b>
                <input type="number" className="form-control col-md-12" ref={inputMobile}
                    onChange={this.onTextChange} maxLength={11} />
            </label>
            <input type="button" className={"btn btn-primary col-md-2 saveUser"} value={"Create/Login"} onClick={this.loginUser} />
        </form>
    </>)
}

export default UserHook;