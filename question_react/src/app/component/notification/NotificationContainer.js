import React, { useEffect, useRef, useState } from "react";
import NotificationComponent from "./NotificationComponent";
import * as Notifications from "../../common/Notifications";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

let NotificationContainerComponent = (props)=>{
    let notifications = useSelector((state)=>state.notificationReducer.notifications);
    let [showNotification, toggleNotification] = useState(null);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

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

    function clickNotification(notif){
        toggleNotification(!showNotification);
        console.log(notif);
        navigator(notif.url);
    }

    return (<>
        <button onClick={()=>{toggleNotification(!showNotification)}}>Notifications</button>
        {(showNotification)?
            <ul className="overlay" ref={wrapperRef}>
            {(notifications && notifications.length > 0)?
                notifications.map((notif)=>{
                    return <li className="overlay-element" key={notif.name} onClick={()=>clickNotification(notif)} value={notif}><NotificationComponent noteName={notif.name}/></li>
                })
            :""}
            </ul>
        :""}
    </>);
}

export default NotificationContainerComponent;