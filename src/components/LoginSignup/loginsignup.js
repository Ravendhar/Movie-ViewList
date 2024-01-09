import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import "./loginsignup.css";
import { Link } from "react-router-dom";


const LoginSignup = () => {
    const [login,setLogin]=useState(true);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleClick=()=>{
        setLogin(!login);
    }

    const navigateHome = () => {

        // Perform login validation
        if (login) {   
            try {
                if (username.trim() === '') throw  new Error("*Enter the User Name Correctly");    
                if(password.trim() === '')  throw new Error("*Enter the password Correctly");
                alert("login Successfully");
                navigate('/');    
            } catch (error) {
                document.getElementById("loginFeild").innerText=error.message
            }            
        } else {   
            try {           
                if (username.trim() === '') throw  new Error("*Enter the User Name Correctly");
                if(email.trim() === '') throw new Error("*Enter the Email Correctly");       
                if(password.trim() === '')  throw new Error("*Enter the Password Correctly");
                alert("Register Successfully");
                navigate('/');               
            } catch (error) {               
                document.getElementById("registerFeild").innerText=error.message         
            }  
        }
    };

return (
    <div>
      {login ? (
        <div className="Container">
          <div className="headercontainer">
            <h1 className='header'>Login</h1>
            <hr className="underscore" />
            <p id="loginFeild" className="error"></p>
            <div className="userContainer">
              <label htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="userinput"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter Username..."
              />
            </div>
            <div className="passwordContainer">
              <label htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="passwordinput"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter Password..."
              />
            </div>
            <div className="others">
              <div className='otherbuttons'>
                <button className="userbutton" onClick={handleClick}>New User?</button>
                <button className="forgotbutton">Forgot Password?</button>
              </div>
            </div>
            <div className="submitContainer">
              <button
                onClick={navigateHome}
                type="submit"
                className="submitbutton"
              >
                Login
                <hr className='underscore'></hr>
              </button>
            </div>
          </div>
          <iframe src="https://embed.lottiefiles.com/animation/144103" title="login animation"></iframe>
        </div>
      ) : (
        <div className="Container">
          <div className="headercontainer">
            <h1 className="header">Register</h1>
            <hr className="underscore" />
            <p id="registerFeild" className="error"></p>
            <div className="userContainer">
              <label htmlFor="username">
                Name
              </label>
              <input
                type="text"
                id="username"
                className="userinput"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter Username..."
              />
            </div>
            <div className="mailContainer">
              <label htmlFor="email" className="block text-base mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="mailinput"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Email..."
              />
            </div>
            <div className="passwordContainer">
              <label htmlFor="password" className="block text-base mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="passwordinput"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter Password..."
              />
            </div>
            <div className="textdisplay">
              <div>
                {/* <a href="/" className="text-indigo-800 font-semibold" onClick={handleClick}>              
                </a>*/}
                <Link activeClass="active" to="/" spy={true} duration={500} className="text" >Existing User?</Link>
              </div>
            </div>
            <div className="submitContainer">
              <button
                onClick={navigateHome}
                type="submit"
                className="submitbutton"
              >
                Register
              </button>
            </div>
          </div>
          <iframe src="https://embed.lottiefiles.com/animation/144103" title="register animation" className='imageanimation'></iframe>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;