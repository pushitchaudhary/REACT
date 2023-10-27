import React from 'react'
import FooterBar from '../Components/FooterBar'
import Navbar from '../Components/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
       <header>
        <h1>Welcome to My Homepage</h1>
       <Navbar/>
    </header>
    <div className="container">
        <div className="content">
            <h2>About Me</h2>
            <p>Welcome to my personal homepage. I'm passionate about web development and love creating beautiful websites.</p>
        </div>
    </div>
    <FooterBar/>
    </div>
  )
}

export default Home
