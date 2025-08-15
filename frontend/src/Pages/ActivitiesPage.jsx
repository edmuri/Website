import NavBar from "./Components/NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import "./Styles/ActivitiesPage.css";

import ActivityNavbar from "./Components/ActivityNav";
import ActivityDisplay from "./Components/ActivityDisplay";
// import Teaching_Assistant from "./Components/Activities/Teaching_Assistant";
// import Capture_The_Flame from "./Components/Activities/Capture_The_Flame";
// import WICYS from "./Components/Activities/WICYS";

const Activities = () =>{

    const [activeActivity, setActiveActivity] = useState('Teaching_Assistant');

    const activities = {
        Teaching_Assistant:"",
        Capture_The_Flame: "",
        WICYS:""
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
                    <ActivityDisplay 
                    activeActivity={activeActivity}
                    onActivityChange={setActiveActivity}
                    activities = {Object.keys(activities)} 
                    />
                </section>
            </div>
            <footer className = "NavBar">
                <NavBar/>
            </footer>
        </div>
    )
}

export default Activities