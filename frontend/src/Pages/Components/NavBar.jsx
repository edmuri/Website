import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Components/navbar.css";



const NavBar = () => {

    let navigate = useNavigate();
    let path = "";

    const handleToHome = () =>{
        path="/Website";
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
            <nav className = "navbar">
                <p className="navbarText">{'<'}</p>
                <ul className = "navLinks">
                    <li className="navbarText" onClick={handleToHome}>HOME</li>
                    <li className="navbarText" onClick={handleToProjects}>PROJECTS</li>
                    <li className="navbarText" onClick={handleToActivities}>ACTIVITIES</li>
                    <li className="navbarText" onClick={handleToAbout}>ABOUT</li>
                    {/* <li onClick={handleToGallery}>GALLERY</li> */}
                </ul>
                <p className="navbarText" >{'>'}</p>
            </nav>
    )
}

export default NavBar