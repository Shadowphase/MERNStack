import React from "react";

let NotificationComponent = (props)=>{
    let noteName = props.noteName;

    return (<>
        <span>{noteName}</span>
    </>);
}

export default NotificationComponent;