import NavBar from "./Components/NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/AboutPage.css";

const About = () => {
    return(
        <div className="mainSection">
            <div className="topSection">
                <div>

                </div>
                <div className="favorites">

                </div>
            </div>
            <footer className="NavBar">
            <div>
                {<NavBar/>}
            </div>
            </footer>
        </div>
    )
}

export default About