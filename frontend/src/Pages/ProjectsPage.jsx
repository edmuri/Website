import NavBar from "./Components/NavBar";
import {useState} from "react";
import React from "react";
import ReactDOM from "react-dom/client";

import ProjectNavbar from "./Components/ProjectNav";
import "./Styles/ProjectsPage.css";

import Naldooshi from "./Components/Projects/Naldooshi";
import Commuter_Connect from "./Components/Projects/Commuter_Connect";
import Arcade_Simulator from "./Components/Projects/Arcade_Simulator";
import OneGram from "./Components/Projects/OneGram";
import Somnus from "./Components/Projects/Somnus";
import Systrum from "./Components/Projects/Systrum";



const Projects = () => {

    const [activeProject, setActiveProject] = useState('Somnus');

    const projects = {
        // Naldooshi: <Naldooshi/>,
        Somnus: <Somnus/>,
        Systrum: <Systrum/>,
        Commuter_Connect: <Commuter_Connect/>,
        OneGram: <OneGram/>,
        Arcade_Simulator: <Arcade_Simulator/>
    };

    return (
        <div className="wholePage">
            <div className="topProjectsPage">
                <ProjectNavbar
                    activeProject={activeProject}
                    onProjectChange={setActiveProject}
                    projects={Object.keys(projects)}
                />
                <section className="projectDisplay">
                    {projects[activeProject]}
                </section>
            </div>
            <footer className = "NavBar">
                <NavBar/>
            </footer>
        </div>
    )
}

export default Projects