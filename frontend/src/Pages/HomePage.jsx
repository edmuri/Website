import NavBar from "./Components/NavBar";
import Line from "./Components/Line"
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
                    </div>
                    <div>{<Line/>}</div>
                </section>

                <div>{<NavBar/>}</div>
            </div>
            
    )
}

export default HomePage