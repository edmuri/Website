import NavBar from "./Components/NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import "./Styles/ActivitiesPage.css";

import ActivityNavbar from "./Components/ActivityNav";
import Teaching_Assistant from "./Components/Activities/Teaching_Assistant";
import Capture_The_Flame from "./Components/Activities/Capture_The_Flame";
import WICYS from "./Components/Activities/WICYS";

const Activities = () =>{

    const [activeActivity, setActiveActivity] = useState('Teaching_Assistant');

    const activities = {
        Teaching_Assistant: <Teaching_Assistant/>,
        Capture_The_Flame: <Capture_The_Flame/>,
        WICYS:<WICYS/>
    };
    return(
        <div className="mainContent">
            <div className="topSection">
                <ActivityNavbar
                    activeActivity={activeActivity}
                    onActivityChange={setActiveActivity}
                    activities = {Object.keys(activities)}
                />
                <section className="activityDisplay">
                    {activities[activeActivity]}
                </section>
            </div>
            <footer className = "NavBar">
                <NavBar/>
            </footer>
        </div>
    )
}

export default Activities