import NavBar from "./Components/NavBar";
import Line from "./Components/Line";
import Description from "./Components/Description";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/HomePage.css";
import Pfp from "./photos/pfp/rainbow_self_photo_2.jpg";
// import Pfp from "./photos/pfp/funDog.jpg";

const HomePage = () =>{
    return (
            <div id="main-content">
                <div className="top-container">
                    <section className="description-container">
                    <Description/>
                    </section>
                    <section id="photo-container">
                        <div className="Line">{<Line/>}</div>
                        <div id="photo-div">
                            <img src={Pfp} alt="Description" />
                        </div>
                        <div className="Line">{<Line/>}</div>
                    </section>
                </div>

                <footer className = "NavBar">
                    <NavBar/>
                </footer>
            </div>
            
    )
}

export default HomePage