import HomePage from "./Pages/HomePage";
import Projects from "./Pages/ProjectsPage";
import Activities from "./Pages/ActivitiesPage";
import Gallery from "./Pages/GalleryPage";
import About from "./Pages/AboutPage";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router,Routes, Route} from "react-router-dom";
import "./Pages/Styles/App.css";

function App(){
    return(

        <div className="mainDiv">
            <div className="background">
                <div className="swirl-1-container">
                    <div className="swirl-1"></div>
                </div>
                <div className="swirl-2-container">
                    <div className="swirl-2"></div>
                </div>
                <div className="swirl-3-container">
                    <div className="swirl-3"></div>
                </div>
                <div className="swirl-4-container">
                    <div className="swirl-4"></div>
                </div>
                <div className="siwlr-5-container">
                    <div className="swirl-5"></div>
                </div>
            </div>

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/Website" element = {<HomePage />} />
                    <Route path="/Projects" element = {<Projects/>}/>
                    <Route path="/Activities" element={<Activities/>}/>
                    {/* <Route path="/Skills" element={<Skills/>}/> */}
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/About" element={<About/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;