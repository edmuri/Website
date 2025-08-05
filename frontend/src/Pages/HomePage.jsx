import NavBar from "./Components/NavBar";
import Line from "./Components/Line";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/HomePage.css";
import Pfp from "./photos/rainbow_self_photo.jpg";

const HomePage = () =>{
    return (
            <div id="main-content">
                <div className="top-container">
                    <section id="description-container">
                    <h1 className="Text">HELLO!</h1>
                    <p className="Text">My name is Eduardo Murillo. How are you.</p>
                    </section>

                    <section id="photo-container">
                        <div className="Line">{<Line/>}</div>
                        <div id="photo-div">
                            <img 
                                src={Pfp}
                                alt="Description" />
                        </div>
                        <div className="Line">{<Line/>}</div>
                    </section>
                </div>

                <footer className = "NavBar">
                <div>{<NavBar/>}</div>
                </footer>
            </div>
            
    )
}

export default HomePage