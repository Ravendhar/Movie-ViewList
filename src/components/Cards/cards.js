import React, {useEffect} from "react";
import "./cards.css";
import $ from 'jquery';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import action from "../../assets/Action.jpg";
import horror from "../../assets/Horror.jpg";
import drama from "../../assets/Romance.jpg";
import comedy from "../../assets/Comedy.jpg";
import scifi from "../../assets/Scifi.jpg";
import fantasy from "../../assets/Fantasy.jpg";

function Cards() {
    
    useEffect(() => {
        console.log('useEffect triggered');
        // jQuery code for fade-in animation
        $(".imgContainer").each(function () {
            setTimeout(function() {
                $('.imgContainer').fadeToggle(1000);
              }, 1000);
          });
        }, []);

    const navigate = useNavigate();
    const handleClick = () => {
        console.log('handleclick triggered');
        navigate.push("/Listitems/Action");
      };

    return(
        <div className="cardsContainer">
            <div className="cardImgs">
                <div className="imgContainer">
                    <Link to="/Action" className="link">
                        <img src={action} alt=" " className="singleImg" />
                        <h2>Action</h2>
                    </Link>
                </div>
                <div className="imgContainer">
                    <Link to="/Horror" className="link">
                        <img src={horror} alt=" " className="singleImg" />
                        <h2>Horror</h2>
                    </Link>
                </div>
                <div className="imgContainer">   
                    <Link to="/Drama" className="link">
                        <img src={drama} alt=" " className="singleImg" />
                        <h2>Drama</h2>
                    </Link>
                </div>
                <div className="imgContainer">
                    <Link to="/Comedy" className="link">
                        <img src={comedy} alt=" " className="singleImg" />
                        <h2>Comedy</h2>
                    </Link>
                </div>
                <div className="imgContainer">
                    <Link to="/Scifi" className="link">
                        <img src={scifi} alt=" " className="singleImg" />
                        <h2>Sci-Fi</h2>
                    </Link>
                </div>
                <div className="imgContainer">
                    <Link to="/Fantasy" className="link">
                        <img src={fantasy} alt=" " className="singleImg" />
                        <h2>Fantasy</h2>
                    </Link>
                </div> 
            </div>
        </div>
    );
}

export default Cards;