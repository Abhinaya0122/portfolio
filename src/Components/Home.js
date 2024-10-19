import React from 'react'
import '../css/homepage.css'
import 'animate.css';
function Home() {
  return (
    <>
    
    <div className='home-container'  >
    <div className='home-left' id='home'>
    <div className='home-left animate__animated animate__fadeInLeft'>
        <h3>Hey there!!, I am</h3>
        <h2>ABHINAYA SHRINIVASAN</h2>

       
        <div className='home-left-container'>
            <span>
                Web Developer <br></br>
                MERN stack Developer<br></br>
                AI influencer<br></br>
                Salesforce Developer<br></br>
            </span>
        </div>

        <div className='home-social-container'>
        <li><a href="https://www.instagram.com/itz__me__abhinaya_/" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/instagram.png")} alt="instagram" className = "left-social-icon"></img></a></li>
        <li><a href="https://www.linkedin.com/in/abhinaya-shrinivasan-a2b015243/" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/linkedin.png")} alt="linkedin" className = "left-social-icon"></img></a></li>
                    <li><a href="https://github.com/Abhinaya0122" target = "_blank" rel="noreferrer"><img src={require("../../src/Sources/github.png")} alt="github" className = "left-social-icon"></img></a></li>
        </div>
        </div>
        </div>
        <div>
                <img src={require("../../src/Sources/Abhinaya.jpg")} alt="Profile" className = "home-right-profile"></img>
            </div>

    </div>
   
    </>
  )
}

export default Home