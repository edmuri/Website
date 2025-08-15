import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import "../Styles/Components/ProjectDisplay.css";

const ActivityDisplay = ({activeActivity, onActivityChange, Activity}) => {

    const activityDetails = {     
        Teaching_Assistant: {
                    title: "Teaching Assistant",
                    description: ""
        },
        Capture_The_Flame: {
                    title: "Capture The Flame",
                    description: ""
                    
        },
        WICYS: {
                    title: "WICYS",
                    description: ""
        },
        None: {
            title: "",
            description: "",
        }
    };

    return(
        <div className="activity-display-div">
            <h1 className="activity-title">{activityDetails[activeActivity].title}</h1>
        </div>
    )
}

export default ActivityDisplay