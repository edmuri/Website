import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import "../Styles/Components/ProjectDisplay.css";

const ActivityDisplay = ({activeActivity, onActivityChange, Activity}) => {

    const activityDetails = {     
        Somnus: {
                    title: "Somnus",
                    description: ""
        },
        Systrum: {
                    title: "Systrum",
                    description: ""
                    
        },
        Commuter_Connect: {
                    title: "Commuter Connect",
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