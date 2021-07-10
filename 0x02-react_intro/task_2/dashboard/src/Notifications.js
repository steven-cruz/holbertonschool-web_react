import React from 'react';
import './Notifications.css';
import imgClose from './close-icon.png';
import { getLatesNotification } from './utils';
 
const buttonStyle = {
    float: 'right',
    border: 'none',
    backgroundColor: 'transparent',
}

function Notifications() {
    return (
        <div className="Notifications">
            <button
                aria-label="close"
                style={buttonStyle}
                onClick={() => console.log("Close button has been clicked")}
            ><img style={{width:'10px'}} src={imgClose} alt="img close"></img></button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatesNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications;
