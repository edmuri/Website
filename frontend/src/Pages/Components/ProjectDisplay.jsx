import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import "../Styles/Components/ProjectDisplay.css";
import Github from "../photos/icons/github_icon.png";

import Tester from "../photos/projectPhotos/tester.png";

const ProjectDisplay = ({activeProject, onProjectChange, projects}) => {

    const projectDetails = {     
        Somnus: {
                    title: "Somnus",
                    date:"August 2025 - Present",
                    summary: "",
                    description: "This is a full stack app that ",
                    role:"Project Manager, Frontend Developer, Backend Developer",
                    tech:"",
                    features:"",
                    link:"https://github.com/edmuri/Somnus",
                    images:Tester
        },
        Systrum: {
                    title: "Systrum",
                    date: "July 2025 - Present",
                    summary: "",
                    description: "A full stack interactive app",
                    role: "Project Manager, Backend Developer",
                    tech: "Flask, React, HTML, CSS, JavaScript, Python, SQL, Spotify API",
                    features:"",
                    link:"https://github.com/edmuri/Systrum",
                    images:Tester
        },
        Commuter_Connect: {
                    title: "Commuter Connect",
                    date: "February 2025 - May 2025",
                    summary: "",
                    description: "This is a project that I worked on for my Advanced Data Structures class in Spring of 2025.",
                    role: "Backend Developer",
                    tech: "Flask, React, HTML, CSS, JavaScript, Python, Google Firebase, Google Maps API, Google Routes API",
                    features:"",
                    link:"https://github.com/edmuri/Commuter-Connect",
                    images:Tester
        },
        OneGram: {
                    title: "OneGram",
                    date: "February 8 2025",
                    summary: "Your go-to app for all things social featuring full customizable color palettes and community pages!",
                    description: "This is a project that I contributed to for a UIC's annual Hackathon Sparkhacks! ",
                    role: "Backend Developer",
                    tech: "HTML, CSS, JavaScript, Python, Google Firebase",
                    features: "",
                    link: "https://github.com/edmuri/OneGram",
                    images:Tester
                    
        },
        Arcade_Simulator: {
                    title: "Arcade Simulator",
                    date: "October 2023 - December 2023",
                    summary: "A C++ based Arcade emulator that allows users to play up to three different games!",
                    description: "This was my very first outside of class project. It solidified my love for creating games.",
                    role: "Sole Contributor",
                    tech: "C++, SDL2",
                    features:"",
                    link:"https://github.com/edmuri/Arcade-Simulator",
                    images: Tester
        },
        None: {
            title: "",
            description: "",
            date:""
        }
    };

    return(
        <div className="project-display-div">
            <div className="project-title-date-summary-container">
                <h1 className="Project-title">{projectDetails[activeProject].title}</h1>
                <h4 className="Project-dates">{projectDetails[activeProject].date}</h4>
                <p className="Project-summary">{projectDetails[activeProject].summary}</p>
                <p className="Project-role">Role: {projectDetails[activeProject].role}</p>
                <div className="Link-icon-container">
                    <a className="Project-link" target="_blank" href={projectDetails[activeProject].link}><img src={Github}/></a>
                </div>
            </div>

            <section className="photo-carousel">
                <p>{'<'}</p>
                <div className="Project-img-container">
                    <img className="Project-img" src={projectDetails[activeProject].images}/>
                </div>
                <p>{">"}</p>
            </section>

            <div className="Project-description-div">
                <p className="Project-description">{projectDetails[activeProject].description}</p>
                <p className="Project-features">{projectDetails[activeProject].features}</p>
                <p className="Project-tech">Tech: {projectDetails[activeProject].tech}</p>
            </div>

        </div>
    )
}

export default ProjectDisplay