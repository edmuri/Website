import NavBar from "./Components/NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/ActivitiesPage.css";

const Activities = () =>{
    return(
        <div className="mainContent">
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

export default Activities