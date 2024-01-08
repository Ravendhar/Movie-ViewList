import React from "react";
import "./horror.css";
import movie1 from "../../../assets/hrrmovie (1).jpg";
import movie2 from "../../../assets/hrrmovie (2).jpg";
import movie3 from "../../../assets/hrrmovie (3).jpg";
import movie4 from "../../../assets/hrrmovie (4).jpg";
import movie5 from "../../../assets/hrrmovie (5).jpg";
import movie6 from "../../../assets/hrrmovie (6).jpg";

const Horror=() =>{
    console.log("horror called");
    return(
        <div className="cardsContainer">
            <div className="cardImgs">
                <div className="imgContainer">
                        <img src={movie1} alt=" " className="singleImg" />
                        <h2>The Conjuring <br/>Annabelle</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie2} alt=" " className="singleImg" />
                        <h2>Evil Dead Rise</h2>
                </div>
                <div className="imgContainer">   
                        <img src={movie3} alt=" " className="singleImg" />
                        <h2>No one will <br/>save you</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie4} alt=" " className="singleImg" />
                        <h2>Insidious <br/> The Last key</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie5} alt=" " className="singleImg" />
                        <h2>The Conjuring</h2>
                </div>
                <div className="imgContainer">
                        <img src={movie6} alt=" " className="singleImg" />
                        <h2>The Nun II</h2>
                </div> 
            </div>
        </div>
    );
}

export default Horror;