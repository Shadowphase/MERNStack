import React, { Fragment } from "react";
import BellIcon from "../../images/bell-icon.png";
import CircleIcon from "../../images/circle.png";

const imgStyle = {
    width:'25px',
    height:'25px',
    marginBottom:'-6px'
}

const circleStyle = {
    position:'absolute',
    width: '15px',
    height: '15px',
    marginLeft: '-13px',
    marginTop: '-2px'
}

const numberStyle = {
    position:'absolute',
    width: '15px',
    height: '15px',
    marginLeft: '-13px',
    marginTop: '-2px',
    fontSize: '11px',
}

const NotificationIcon = ({qty})=>{
    return (<>
        <img src={BellIcon} style={imgStyle} alt="Notifications"/>
        {qty>0?
        <Fragment>
            <img src={CircleIcon} style={circleStyle}/><span style={numberStyle}>{qty}</span>
        </Fragment>
        :null}
    </>)
}

export default NotificationIcon;