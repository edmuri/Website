import HomePage from "./Pages/HomePage";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<HomePage />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;