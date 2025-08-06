import NavBar from "./Components/NavBar";
import AboutDesc from "./Components/AboutDesc";
import Favorites from "./Components/Favorites";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/AboutPage.css";
import Pic from "./photos/funDog.jpg";

const About = () => {
    return(
        <div className="mainAboutSection">
            <div className="topSection">
                <AboutDesc/>
                <div className="right-container">
                    {/* <div className="embedded-container"> */}
                        {/* <div className="img-container">
                            <img src={Pic}/>
                        </div> */}
                        <div className="favoritesContainer">
                            <Favorites/>
                        </div>
                    {/* </div> */}
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