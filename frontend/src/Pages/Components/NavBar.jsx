import React from "react";
import ReactDOM from "react-dom/client";
import "../Styles/navbar.css";

const NavBar = () => {
    return(
        <footer>
            <nav className = "navbar">
                <p>{'<'}</p>
                <ul className = "navLinks">
                    <p>HOME</p>
                    <p>PROJECTS</p>
                    <p>ACTIVITIES</p>
                </ul>
                <p>{'>'}</p>
            </nav>
        </footer>
    )
}

export default NavBar