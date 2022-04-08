import React from "react";

let hoverOver = (event)=>{
    event.target.style = "background:green;font-size:72px;";
}

let hoverOut = (event)=>{
    event.target.style = "background:white;";
}

let Footer = ()=>{
    return (
        <>
            <br/><b onMouseOver={hoverOver} onMouseOut={hoverOut}>This is the footer element</b>
        </>
    )
}

export default Footer;