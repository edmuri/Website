import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Components/ProjectNavbar.css";

const ProjectNavbar = () => {

    const handleSystrum = () =>{

    };

    const handleSomnus = () => {

    };

    const handleCommuterConnect = () =>{

    };

    const handleArcadeSimulator = () => {

    };

    return(
        <div className="project-nav-div">
            <ul className="projectsNav">
                <li className="projectButton" onClick={handleSystrum}>Systrum</li>
                <li className="projectButton" onClick={handleSomnus}>Somnus</li>
                <li className="projectButton" onClick={handleCommuterConnect}>Commuter Connect</li>
                <li className="projectButton" onClick={handleArcadeSimulator}>Arcade Simulator</li>
            </ul>
        </div>
    )
}

export default ProjectNavbar