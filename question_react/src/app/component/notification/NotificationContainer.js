import React, { useEffect, useRef, useState } from "react";
import * as Notifications from "../../common/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeNotification, updateNotification } from "../../state/notifications/NotificationActions";
import NotificationComponent from "./NotificationComponent";
import BellIcon from "./NotificationIcon";

let NotificationContainerComponent = (props)=>{
    console.log("load notif container");
    let notifications = useSelector((state)=>state.notificationReducer.notifications);
    let [showNotification, toggleNotification] = useState(null);
    let [notifQty, setNotifQty] = useState(null);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    let dispatcher = useDispatch();
    let navigator = useNavigate();

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    toggleNotification(!showNotification);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, showNotification]);
    }

    useEffect(()=>{
        let sum = 0;
        for(let notif of notifications){
            sum+=notif.qty;
        }
        setNotifQty(sum);
    });

    function clickNotification(notif){
        toggleNotification(!showNotification);
        console.log(notif);
        if(notif.qty<=1){
            dispatcher(removeNotification(notif.name));
        }else{
            dispatcher(updateNotification(notif.name, notif.qty-1, true));
        }
        navigator(notif.url);
    }

    return (<div className="notification">
        <button onClick={()=>{toggleNotification(!showNotification)}} style={{padding:'4px'}}><BellIcon qty={notifQty}/></button>
        {(showNotification && notifications && notifications.length > 0)?
            <ul className="overlay" ref={wrapperRef}>
                {notifications.map((notif)=>{
                    return notif.viewed?
                        <li className="overlay-element" key={notif.name} onClick={()=>clickNotification(notif)} value={notif}>
                        <NotificationComponent noteName={notif.name} noteQty={notif.qty}/></li>:
                        <li className="overlay-element green" key={notif.name} onClick={()=>clickNotification(notif)} value={notif}>
                        <NotificationComponent noteName={notif.name} noteQty={notif.qty}/></li>
                })}
            </ul>
        :null}
    </div>);
}

export default NotificationContainerComponent;