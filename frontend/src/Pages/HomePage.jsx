import NavBar from "./Components/NavBar";
import Line from "./Components/Line";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/HomePage.css";

const HomePage = () =>{
    return (
            <div id="main-content">
                <section id="description-container">
                <h1>HELLO!</h1>
                </section>

                <section id="photo-container">
                    <div>{<Line/>}</div>
                    <div id="photo-div">
                    {/* <img src="photos/funDog.jpg"> */}
                    <p>HOW ARE YOU</p>
                    </div>
                    <div>{<Line/>}</div>
                </section>

                <div>{<NavBar/>}</div>
            </div>
            
    )
}

export default HomePage