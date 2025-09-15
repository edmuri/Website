import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Components/ProjectNavbar.css";

const ProjectNavbar = ({activeProject, onProjectChange, projects}) => {

    const projectNames = {
        Naldooshi:"Naldooshi",
        Somnus: "Somnus",
        Systrum: "Systrum",
        Commuter_Connect:"Commuter Connect",
        OneGram: "OneGram",
        Arcade_Simulator: "Arcade Simulator"
    };

    return(
        <div className="project-nav-div">
            <ul className="projectsNav">
                {projects.map(projectKey=> (
                    <li 
                        key={projectKey}
                        className={`projectButton ${activeProject === projectKey ? 'active' :''}`}
                        onClick={() => onProjectChange(projectKey)}
                        >
                            {projectNames[projectKey] || projectKey}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectNavbar