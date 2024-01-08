import React from "react";
import "./drama.css";
import movie1 from "../../../assets/drmmovie (1).jpg";
import movie2 from "../../../assets/drmmovie (2).jpg";
import movie3 from "../../../assets/drmmovie (3).jpg";
import movie4 from "../../../assets/drmmovie (4).jpg";
import movie5 from "../../../assets/drmmovie (5).jpg";
import movie6 from "../../../assets/drmmovie (6).jpg";

const Drama=() =>{
    console.log("drama called");
    return(
        <div className="cardsContainer">
            <div className="cardImgs">
                <div className="imgContainer">
                        <img src={movie1} alt=" " className="singleImg" />
                        <h2>The Theory <br/>of Everything</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie2} alt=" " className="singleImg" />
                        <h2>Begin Again</h2>
                </div>
                <div className="imgContainer">   
                        <img src={movie3} alt=" " className="singleImg" />
                        <h2>Genius</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie4} alt=" " className="singleImg" />
                        <h2>A star is born</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie5} alt=" " className="singleImg" />
                        <h2>Love at first sight</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie6} alt=" " className="singleImg" />
                        <h2>Oppenheimer</h2>
                </div> 
            </div>
        </div>
    );
}

export default Drama;