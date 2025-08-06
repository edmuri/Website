import HomePage from "./Pages/HomePage";
import Projects from "./Pages/ActivitiesPage";
import Activities from "./Pages/ActivitiesPage";
import Gallery from "./Pages/GalleryPage";
import About from "./Pages/AboutPage";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/Projects" element = {<Projects/>}/>
            <Route path="/Activities" element={<Activities/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/About" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;