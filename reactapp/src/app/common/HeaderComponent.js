import React from "react";
import { NavLink } from "react-router-dom";

let Header = {
    render(){
        return(
            <>
            <h1>HEADER</h1>\
            <NavLink to="/home" className="button" activeClassName="success">Home</NavLink>
            <NavLink to="/about" className="button" activeClassName="success">About</NavLink>
            </>
        )
    }
}

export default Header;