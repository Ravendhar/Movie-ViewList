import React,{useState} from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import contactImg from "../../assets/contact.png"
import menu from "../../assets/menu.png"

const Navbar=() => {
    const [search,SetSearch]=useState(false);
    const Handlesearch=()=>{
        SetSearch(!search)
       }
    const [showMenu, setShowMenu] = useState(false);
    console.log("navbar rendered");
    return(
        <nav className="navbar">
            <Link activeClass="active" to="/" spy={true} duration={500} ><img src={logo} alt="Logo"  className='logo'/></Link>
            
            {/* centre navbar */}
            <div className="desktopMenu">
                <Link activeClass="active" to="/" spy={true} duration={500} className="desktopMenuListItem" >Home</Link>
                <div className="searchcontainer">
                    <form className="form">   
                        <input type='text' placeholder='Movie Name' className="searchbox"/>
                        <button type="submit" className="searchBtn">Search</button>
                    </form>
                </div>
            </div>
            {/* <button className="desktopMenuBtn" onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt="" className="contactBtn" />Login/Signup
            </button> */}
            <div1>
                <Link activeClass="active" to="/LoginSignup" spy={true} duration={500} className="desktopMenuBtn" >Login  / Signup</Link>
            </div1>
            
            <div className="mobMenuContainer">
                <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
                <div className="navMenu" style={{display: showMenu?'flex':'none'}}>
                    <Link activeClass="active" to="/Intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                    <Link activeClass="active" to="/LoginSignup" spy={true} duration={500} className="desktopMenuBtn" >Login  / Signup</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;