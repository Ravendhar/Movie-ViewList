import React from "react";
import "./action.css";
import movie1 from "../../../assets/actmovie (1).jpg"
import movie2 from "../../../assets/actmovie (2).jpg"
import movie3 from "../../../assets/actmovie (3).jpg"
import movie4 from "../../../assets/actmovie (4).jpg"
import movie5 from "../../../assets/actmovie (5).jpg"
import movie6 from "../../../assets/actmovie (6).jpg"

const Action=() =>{
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
                        <h2>Mission <br/>Impossible</h2>
                </div>
                <div className="imgContainer">   
                        <img src={movie3} alt=" " className="singleImg" />
                        <h2>FastX</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie4} alt=" " className="singleImg" />
                        <h2>JohnWick 3</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie5} alt=" " className="singleImg" />
                        <h2>Loki</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie6} alt=" " className="singleImg" />
                        <h2>Transformers <br/>Rise of Beasts</h2>
                </div> 
            </div>
        </div>
    );
}

export default Action;