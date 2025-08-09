import React from "react";
import ReactDOM from "react-dom/client";
import "../Styles/Favorites.css";

import Line from "../Components/Line";
import MayhemCover from "../photos/mayhem_cover.jpeg";
import FameMonsterCover from "../photos/famemonster_cover.jpeg";
import ThankUNextCover from "../photos/thankunext_cover.jpeg";
import PlayButton from "../photos/play-button.png";


const Favorites = () => {
    return(
        // <div className="mainFavoritesSection">
            <div className="favSongs">
                <Line/>
                <div className="song">
                    <div className="cover-container">
                        <img className="albumCover" src={MayhemCover}/>
                    </div>
                    <div className="descAndLink">
                        <div className="desc">
                            <section className="songSection"><h1>The Beast</h1></section>
                            <section className="songSection"><p>Mayhem</p></section>
                            <section className="songSection"><p>Lady Gaga</p></section>
                        </div>
                        <div className="playButton">
                            <a href="https://youtu.be/GMIIpxW-7Zw?si=4CEx_W3IK5CijYtP" target="_blank"><img className="play" src={PlayButton}/></a>
                        </div>
                    </div>
                </div>
                <Line/>
                <div className="song">
                    <div className="cover-container">
                        <img className="albumCover" src={ThankUNextCover}/>
                    </div>
                    <div className="descAndLink">
                        <div className="desc">
                            <section className="songSection"><h1>in my head</h1></section>
                            <section className="songSection"><p>thank u, next</p></section>
                            <section className="songSection"><p>Ariana Grande</p></section>
                        </div>
                        <div className="playButton">
                            <a href="https://youtu.be/6GcpNvYFMGE?si=9MsRhqDQgba8CVcP" target="_blank"><img className="play" src={PlayButton}/></a>
                        </div>
                    </div>
                </div>
                <Line/>
                <div className="song">
                    <div className="cover-container">
                        <img className="albumCover" src={FameMonsterCover}/>
                    </div>
                    <div className="descAndLink">
                        <div className="desc">
                            <section className="songSection"><h1>Monster</h1></section>
                            <section className="songSection"><p>The Fame Monster</p></section>
                            <section className="songSection"><p>Lady Gaga</p></section>
                        </div>
                        <div className="playButton">
                        <a href="https://youtu.be/uuOzxj-qNJU?si=NfEGywf9oD9upb8F" target="_blank"><img className="play" src={PlayButton}/></a>
                        </div>
                    </div>
                </div>
                <Line/>
            </div>

    )
}

export default Favorites