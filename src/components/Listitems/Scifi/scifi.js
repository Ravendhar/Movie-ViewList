import React from "react";
import "./scifi.css";
import movie1 from "../../../assets/sfimovie (1).jpg";
import movie2 from "../../../assets/sfimovie (2).jpg";
import movie3 from "../../../assets/sfimovie (3).jpg";
import movie4 from "../../../assets/sfimovie (4).jpg";
import movie5 from "../../../assets/sfimovie (5).jpg";
import movie6 from "../../../assets/sfimovie (6).jpg";

const Scifi=() =>{
    console.log("action called");
    return(
        <div className="cardsContainer">
            <div className="cardImgs">
                <div className="imgContainer">
                        <img src={movie1} alt=" " className="singleImg" />
                        <h2>Avengers <br/>EndGame</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie2} alt=" " className="singleImg" />
                        <h2>Iron Man III</h2>
                </div>
                <div className="imgContainer">   
                        <img src={movie3} alt=" " className="singleImg" />
                        <h2>Interstellar</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie4} alt=" " className="singleImg" />
                        <h2>No one <br/>will save you</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie5} alt=" " className="singleImg" />
                        <h2>The Creator</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie6} alt=" " className="singleImg" />
                        <h2>Transformers <br/>Rise of Beasts</h2>
                </div> 
            </div>
        </div>
    );
}

export default Scifi;