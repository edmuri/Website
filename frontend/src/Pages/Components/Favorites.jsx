import React from "react";
import ReactDOM from "react-dom/client";
import "../Styles/Components/Favorites.css";

import Line from "../Components/Line";
import MayhemCover from "../photos/album_covers/mayhem_cover.jpeg";
import FameMonsterCover from "../photos/album_covers/famemonster_cover.jpeg";
import ThankUNextCover from "../photos/album_covers/thankunext_cover.jpeg";
import PlayButton from "../photos/icons/play-button.png";


const Favorites = () => {

    const favSongs = {
        song1 : {
                album_cover: MayhemCover,
                songName: "The Beast",
                album_name: "Mayhem",
                artist: "Lady Gaga",
                link: "https://youtu.be/GMIIpxW-7Zw?si=4CEx_W3IK5CijYtP"
        },
        song2 : {
                album_cover: ThankUNextCover,
                songName: "in my head",
                album_name: "thank u next",
                artist: "Ariana Grande",
                link: "https://youtu.be/6GcpNvYFMGE?si=9MsRhqDQgba8CVcP"
        },
        song3 : {
                album_cover: FameMonsterCover,
                songName: "Monster",
                album_name: "The Fame Monster",
                artist: "Lady Gaga",
                link: "https://youtu.be/uuOzxj-qNJU?si=NfEGywf9oD9upb8F"
        }
    };

    return(
        // <div className="mainFavoritesSection">
            <div className="favSongs">
                <Line/>
                {
                    Object.values(favSongs).map(song => (
                        <div className="song">
                            <div className="cover-container">
                                <img className="albumCover" src={song.album_cover}/>
                            </div>
                            <div className="descAndLink">
                                <div className="desc">
                                    <section className="songSection"><h1>{song.songName}</h1></section>
                                    <section className="songSection"><p>{song.album_name}</p></section>
                                    <section className="songSection"><p>{song.artist}</p></section>
                                </div>
                                <div className="playButton">
                                    <a href={song.link} target="_blank"><img className="play" src={PlayButton}/></a>
                                </div>
                            </div>
                        </div>
                    // <Line/>
                    ))
                }
                <Line/>
            </div>

    )
}

export default Favorites