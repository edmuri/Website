import NavBar from "./Components/NavBar";
import {useState} from "react";
import React from "react";
import ReactDOM from "react-dom/client";

import ProjectNavbar from "./Components/ProjectNav";
import "./Styles/ProjectsPage.css";
import ProjectDisplay from "./Components/ProjectDisplay";

const Projects = () => {

    const [activeProject, setActiveProject] = useState('Systrum');

    const projects = {
        Somnus:"",
        Systrum:"",
        Commuter_Connect:"",
        OneGram:"",
        Arcade_Simulator:""
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
                <ProjectDisplay
                    activeProject={activeProject}
                    onProjectChange={setActiveProject}
                    projects={Object.keys(projects)}
                />
                </section>
            </div>
            <footer className = "NavBar">
                <NavBar/>
            </footer>
        </div>
    )
}

export default Projects