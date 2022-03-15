import React from "react";
import {NavLink} from "react-router-dom";

let Header = (props)=>{
    return(
        <>
            <hr/>
            <NavLink to="/name" className="button" activeclassname="success" >Name </NavLink> 
            <NavLink to="/user" className="button" activeclassname="success" >User </NavLink>
            <hr/>
        </>
    )
}

export default Header;

//Coding Test 2
//create navigations for your own name page
// also move to that page on button click
// make a route with path params in it