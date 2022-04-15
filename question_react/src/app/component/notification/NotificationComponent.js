import React from "react";

let NotificationComponent = (props)=>{
    let noteName = props.noteName;
    let noteQty = props.noteQty;

    return (<>
        <span>{noteName} {noteQty}</span>
    </>);
}

export default NotificationComponent;