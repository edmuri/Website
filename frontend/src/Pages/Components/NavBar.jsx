import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/navbar.css";



const NavBar = () => {

    let navigate = useNavigate();
    let path = "";

    const handleToHome = () =>{
        path="/";
        navigate(path);
    };

    const handleToProjects = () =>{
        path="/Projects";
        navigate(path);
    };

    const handleToActivities = () =>{
        path="/Activities";
        navigate(path);
    };

    const handleToAbout = () =>{
        path="/About";
        navigate(path);
    };

    const handleToGallery = () =>{
        path="/Gallery";
        navigate(path);
    };

    return(
        <footer>
            <nav className = "navbar">
                <p>{'<'}</p>
                <ul className = "navLinks">
                    <li onClick={handleToHome}>HOME</li>
                    <li onClick={handleToProjects}>PROJECTS</li>
                    <li onClick={handleToActivities}>ACTIVITIES</li>
                    <li onClick={handleToAbout}>ABOUT</li>
                    <li onClick={handleToGallery}>GALLERY</li>
                </ul>
                <p>{'>'}</p>
            </nav>
        </footer>
    )
}

export default NavBar