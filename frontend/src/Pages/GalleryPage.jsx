import NavBar from "./Components/NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/GalleryPage.css";

const Gallery = () =>{
    return(
        <div className="wholePage">
            <div className="topSection">

            </div>
            <footer className="NavBar">
                <div>
                    {<NavBar/>}
                </div>
            </footer>
        </div>
    )
}

export default Gallery