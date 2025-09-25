import NavBar from "./Components/NavBar";
import AboutDesc from "./Components/AboutDesc";
import Favorites from "./Components/Favorites";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/AboutPage.css";
// import Pic from "./photos/pfp/funDog.jpg";
// import Pic from "./photos/pfp/ChromaticaSelfie.jpg";
// import Pic from "./photos/pfp/rainbow_self_photo_2.jpg";
// import Pic from "./photos/pfp/downstairs.jpg";
import Pic from "./photos/pfp/photo_2.jpg";

const About = () => {
    return(
        <div className="mainAboutSection">
            <div className="topSection">
                <AboutDesc/>
                <div className="right-container">
                    <div className="img-container"><img src={Pic} className="photoImage" alternative="Photo"/></div>
                    <div className="fav-title-container">
                        <h1>My favorite songs</h1>
                        <div className="favoritesContainer">
                            <Favorites/>
                        </div>
                    </div>
                </div>
            </div>
            <footer className = "NavBar">
                <NavBar/>
            </footer>
        </div>
    )
}

export default About