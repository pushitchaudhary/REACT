import React from 'react'
import FooterBar from '../Components/FooterBar'
import Navbar from '../Components/Navbar'
import './About.css'


function About() {
  return (
    <div>
       <header>
        <h1>About Us</h1>
       <Navbar/>
    </header>
    <div className="container">
        <div className="content">
            <h2>Our Story</h2>
            <p>We are a passionate team of web developers dedicated to creating amazing online experiences. Our mission is to make the web a better place through beautiful and functional websites.</p>
        </div>
    </div>
        <FooterBar/>
    </div>
  )
}

export default About
