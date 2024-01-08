import React from "react";
import "./fantasy.css";
import movie1 from "../../../assets/fanmovie (1).jpg";
import movie2 from "../../../assets/fanmovie (2).jpg";
import movie3 from "../../../assets/fanmovie (3).jpg";
import movie4 from "../../../assets/fanmovie (4).jpg";
import movie5 from "../../../assets/fanmovie (5).jpg";
import movie6 from "../../../assets/fanmovie (6).jpg";

const Fantasy=() =>{
    console.log("fantasy called");
    return(
        <div className="cardsContainer">
            <div className="cardImgs">
                <div className="imgContainer">
                        <img src={movie1} alt=" " className="singleImg" />
                        <h2>Avengers <br/>EndGame</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie2} alt=" " className="singleImg" />
                        <h2>AntMan<br/>Quantumania</h2>
                </div>
                <div className="imgContainer">   
                        <img src={movie3} alt=" " className="singleImg" />
                        <h2>Dungeons and <br/>Dragons</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie4} alt=" " className="singleImg" />
                        <h2>Eternals</h2>
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

export default Fantasy;