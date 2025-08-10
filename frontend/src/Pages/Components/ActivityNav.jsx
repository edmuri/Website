import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import "../Styles/Components/ActivityNavbar.css";

const ActivityNavbar = ({activeActivity, onActivityChange, activities}) => {

    const activityNames = {
        Teaching_Assistant: "Teaching Assistant",
        Capture_The_Flame: "Capture The Flame",
        WiCys: "WiCys"
    };

    return(
        <div className="activities-nav-div">
            <ul className="activitiesNav">
                {activities.map(activityKey=> (
                    <li 
                        key={activityKey}
                        className={`activityButton ${activeActivity === activityKey ? 'active' :''}`}
                        onClick={() => onActivityChange(activityKey)}
                        >
                            {activityNames[activityKey] || activityKey}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ActivityNavbar