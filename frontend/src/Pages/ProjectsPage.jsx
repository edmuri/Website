import NavBar from "./Components/NavBar";
import {usestate} from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import ProjectNavbar from "./Components/ProjectNav";
import "./Styles/ProjectsPage.css";

const Projects = () => {

    const [activeProject, setActiveProject] = useState();

    const renderProject = () =>{
        
    };

    return (
        <div className="wholePage">
            <div className="topProjectsPage">
                <ProjectNavbar/>
                <section className="projectDisplay">

                </section>
            </div>
            <footer className = "NavBar">
                <NavBar/>
            </footer>
        </div>
    )
}

export default Projects