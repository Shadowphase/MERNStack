import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";

let Header = (props)=>{
    let username = props.user && props.user.username ? props.user.username : "Alias";
    username = props.user2 && props.user2.username ? props.user2.username : username;
    return(
        <>
        <h1>Hi, {username}</h1>
        <NavLink to="/home" className="button" activeclassname="success">Home</NavLink>
        <NavLink to="/about" className="button" activeclassname="success">About</NavLink>
        <NavLink to="/hooks" className="button" activeclassname="success">Hooks</NavLink>
        <NavLink to="/user" className="button" activeclassname="success">User</NavLink>
        <NavLink to="/user2" className="button" activeclassname="success">User2</NavLink>
        </>
    )
}

let mapStateToProps= (state)=>{
    return{
        user : state.UserReducer.user,
        user2 : state.user2Reducer.user2
    }
}

export default connect(mapStateToProps, null)(Header);