import React from "react";
import ReactDOM from "react-dom/client";
import {useState, useEffect} from "react";
import "../Styles/Components/ProjectDisplay.css";
import Github from "../photos/icons/github_icon.png";
import Line from "../Components/Line";

import Tester from "../photos/projectPhotos/tester.png";

{/* SYSTRUM ASSETS */}

{/* COMMUTER CONNECT ASSETS */}
import Commuter_Login from "../photos/projectPhotos/Commuter_Connect/Commuter_Connect_Login.png";
import Commuter_Landing from "../photos/projectPhotos/Commuter_Connect/Commuter_Connect_Landing.png";
import Commuter_Schedule from "../photos/projectPhotos/Commuter_Connect/Commuter_Connect_Schedule.png";
import Commuter_Friends from "../photos/projectPhotos/Commuter_Connect/Commuter_Connect_Friends.png";
import Commuter_Friends_2 from "../photos/projectPhotos/Commuter_Connect/Commuter_Connect_Friends2.png";

{/* ONEGRAM ASSETS */}
import OneGram_1 from "../photos/projectPhotos/OneGram/OneGram_1.png";
import OneGram_2 from "../photos/projectPhotos/OneGram/OneGram_2.png";
import OneGram_3 from "../photos/projectPhotos/OneGram/OneGram_3.png";
import OneGram_4 from "../photos/projectPhotos/OneGram/OneGram_4.png";

{/* ARCADE SIMULATOR ASSETS */}
import ArcadeMenu from "../photos/projectPhotos/Arcade_Simulator/Simulator_Landing.png";
import AsteroidShooter from "../photos/projectPhotos/Arcade_Simulator/Asteroid_Shooter.png";
import TargetShooter from "../photos/projectPhotos/Arcade_Simulator/Target_Shooter.png";
import GuessNumber from "../photos/projectPhotos/Arcade_Simulator/Guess_The_Number.png";

const ProjectDisplay = ({activeProject, onProjectChange, projects}) => {
    let index=0;

    const [activeIndex,setIndex] = useState(0);

    useEffect(() => {
    setIndex(0);
    }, [activeProject]);


    const imageToggleLeft = () => {
        let size = projectDetails[activeProject].images.length;
        if(activeIndex == 0){
            setIndex(size-1);
        }
        else{
            setIndex(activeIndex-1);
        }
    };

    const imageToggleRight = () =>{
        let size = projectDetails[activeProject].images.length;
        if(activeIndex == (size-1)){
            setIndex(0);
        }
        else{
            console.log("Inside else");
            setIndex(activeIndex+1)
        }
    };

    const projectDetails = {     
        Somnus: {
                    title: "Somnus",
                    date:"August 2025 - Present",
                    summary: "PlaceHolder",
                    description: "This is a full stack app that ",
                    role:"Project Manager, Frontend Developer, Backend Developer",
                    tech:[""],
                    features:[""],
                    link:"https://github.com/edmuri/Somnus",
                    images:[Tester]
        },
        Systrum: {
                    title: "Systrum",
                    date: "July 2025 - Present",
                    summary: "A fun new way to create platlists for spotify",
                    description: "A full stack interactive app",
                    role: "Project Manager, Backend Developer",
                    tech: ["Flask", "React", "HTML", "CSS", "JavaScript", "Python", "SQL", "Spotify API"],
                    features:["Uses Spotify's API to create playlists based on user input", "Uses a SQL database to optimize data management",
                                "Incorporates User Authentication through Spotify","Dynamic frontend rendering for playlist selection"],
                    link:"https://github.com/edmuri/Systrum",
                    images:[Tester]
        },
        Commuter_Connect: {
                    title: "Commuter Connect",
                    date: "February 2025 - May 2025",
                    summary: "A full stack project that allows",
                    description: `Commuter Connect was created for my Advanced Data Structures class in Spring of 2025. Our group consisted of three people, one project manager,
                                    one frontend developer, and one backend developer. Commuter Connect was made for the UIC Student Themed Application to solve
                                    a student problem. With UIC being a commuter school, a commuter app would be the most obvious choice! We used two of Google's APIs to create routes 
                                    with stops and saved them to create a scheduled week with all the user's planned routes. 
                                    Our second biggest feature was the ability to add friends and share your routes to travel together!`,
                    role: "Backend Developer",
                    tech: ["Flask", "React", "HTML", "CSS", "JavaScript", "Python", "Google Firebase", "Google Maps API", "Google Routes API"],
                    features:["User route tracking, route sharing, and filtering for daily use and recording",
                                "Backend developed with Flask and Python to pull data from Google's Routes and Maps APIs and Firebase database",
                                "Implementation of a Priority Queue for destination sorting",
                                "Implementation of Tries for autocomplete in friend lookup"],
                    link:"https://github.com/edmuri/Commuter-Connect",
                    images:[Commuter_Login,Commuter_Landing,Commuter_Schedule,Commuter_Friends,Commuter_Friends_2]
        },
        OneGram: {
                    title: "OneGram",
                    date: "February 8 2025",
                    summary: "Your go-to app for all things social featuring full customizable color palettes and community pages!",
                    description: `OneGram was made within 24 hours for UIC's hackathon: Sparkhacks help in February of 2025. This was for the Make it Make
                                    Sense Tier: "You'll take an existing app or website and transform it into something better. Your goal is to develop new 
                                    or improved features that elevate the UI." Our team revamped Instagram by adding various customization options. We also created
                                    a communities tab to allow for users to create group forums to connect with others that share mutual interests. Our backend consists 
                                    of data management through Google Firebase to communicate user settings. This was made in my first ever hackathon and this was my 
                                    first time working as a backend developer!`,
                    role: "Backend Developer",
                    tech: ["HTML", "CSS", "JavaScript", "Flask", "Python", "Google Firebase"],
                    features: ["Profile customization with color themes, icon and layout management, and community joining", 
                                "Backend that handles user password, customizations, friends, and communities"],
                    link: "https://github.com/edmuri/OneGram",
                    images:[OneGram_1,OneGram_2,OneGram_3,OneGram_4]
                    
        },
        Arcade_Simulator: {
                    title: "Arcade Simulator",
                    date: "October 2023 - December 2023",
                    summary: "A C++ based Arcade emulator that allows users to play up to three different games!",
                    description: `Arcade Simulator is a 2D pixel art arcade emulator that features 3 different games: Asteroid Destroyer, Guess the Number, and Target Shooter. 
                                    This was built using C++ and SDL2 library for rendering. I made the pixel art for this, except for the ghost icons.
                                    The development of this project took place over the course of three months during the first year of my Computer Science degree. 
                                    This project allowed me to delve into object oriented programming and video game development.`,
                    role: "Sole Contributor",
                    tech: ["C++", "SDL2"],
                    features:["Entity collision and physics implemented through renderer coordinate system",
                                "Pixel art creation for components in the different games",
                                "Leaderboard through input and output of file to save user scores and names",
                                "Processing of user input for movement and game progression",
                                "Use of inheritence and polymorphism for entity components in game"],
                    link:"https://github.com/edmuri/Arcade-Simulator",
                    images: [AsteroidShooter,TargetShooter,GuessNumber,ArcadeMenu]
        },
        None: {
            title: "",
            description: "",
            date:""
        }
    };

    return(
        <div className="project-display-div">
            {/* TOP SECTION*/}
            <div className="project-title-date-summary-container">
                <div className="title-date-link">
                    <div className="title-date">
                        <h1 className="Project-title">{projectDetails[activeProject].title}</h1>
                        <h4 className="Project-dates">{projectDetails[activeProject].date}</h4>
                        <p className="Project-role">Role: {projectDetails[activeProject].role}</p>
                    </div> 
                   <div className="Link-icon-container">
                        <a className="Project-link" target="_blank" href={projectDetails[activeProject].link}><img src={Github}/></a>
                    </div>
                </div>
            </div>
            
            {/* BOTTOM SECTION */}
            <section className="projectDetails">
                <div className="Project-description-div">
                    <p className="Project-description">{projectDetails[activeProject].description}</p>
                </div>

                <section className="description-photo-section">
                <div className="carousel-container">
                    <div className="Line-container"><Line/></div>
                    <section className="photo-carousel">
                        <button className="projectImageToggle"
                                    onClick = {imageToggleLeft}
                        >{'<'}</button>
                        <div className="Project-img-container">
                            <img className="Project-img" src={projectDetails[activeProject].images[activeIndex]}/>
                        </div>
                        <button className="projectImageToggle"
                                    onClick={imageToggleRight}
                        >{">"}</button>
                    </section>
                    <div className="Line-container"><Line/></div>
                </div>  

                <div className="Project-extra-details-div">
                    <div className="Project-features">
                        <h3>Features</h3>
                        <ul className="Project-features-list">
                        {projectDetails[activeProject].features.map(feature => (
                            <li className="feature-list">
                                {feature}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="Project-tech">
                        <h3>Tech Stack</h3>
                        <ul className="tech-list">
                        {projectDetails[activeProject].tech.map(techs => (
                            <li className="tech-list-items">
                                {techs}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                </section>
            </section>
        </div>
    )
}

export default ProjectDisplay