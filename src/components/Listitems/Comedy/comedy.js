import React from "react";
import "./comedy.css";
import movie1 from "../../../assets/commovie (1).jpg";
import movie2 from "../../../assets/commovie (2).jpg";
import movie3 from "../../../assets/commovie (3).jpg";
import movie4 from "../../../assets/commovie (4).jpg";
import movie5 from "../../../assets/commovie (5).jpg";
import movie6 from "../../../assets/commovie (6).jpg";

const Comedy=() =>{
    console.log("Comedy called");
    return(
        <div className="cardsContainer">
            <div className="cardImgs">
                <div className="imgContainer">
                        <img src={movie1} alt=" " className="singleImg" />
                        <h2>Ted</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie2} alt=" " className="singleImg" />
                        <h2>Dumb and Dumber</h2>
                </div>
                <div className="imgContainer">   
                        <img src={movie3} alt=" " className="singleImg" />
                        <h2>Hangover Part II</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie4} alt=" " className="singleImg" />
                        <h2>The Mask</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie5} alt=" " className="singleImg" />
                        <h2>The Dictator</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie6} alt=" " className="singleImg" />
                        <h2>Due Date</h2>
                </div> 
            </div>
        </div>
    );
}

export default Comedy;