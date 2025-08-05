import React from "react";
import ReactDOM from "react-dom/client";
import "../Styles/Description.css";

const Description = () => {
    return(
        <div>
            <h1 className="Text">HELLO!</h1>
            <p className="Text">
                My name is Eduardo Murillo. 
                I am a Computer Science student at UIC graduating in May 2026. My interests include Video Games and Cyber Security!
            </p>
            <p className="Text">
                I currently have my hands full juggling three different projects:
            </p>
            <p className="Text">
                SYSTRUM: A full stack project that incorporates Spotify's API to break down user's input sentences selected 
                filters and create playlists for them. Our team is currently expanding to create more options for users.
            </p>
            <p className="Text">
                SOMNOS: A full stack project that allows users to share their dreams upon awaking with other 
                users to create an interactive experience to relating to one another and getting interspective on the meanings
                for your nights!
            </p>
            <p className="Text">
                NAME TBA: A new horror game that depicts a man discovering the existance of creatures existing in his local state park!
            </p>
            <p className="Text">
                Take a look around my page! For more info about the projects above and previous projects, head to my projects tab. 
                To see my contributions to UIC's first and only Cyber Security competition, take a look at my activities tab!
            </p>
        </div>
    )
}

export default Description