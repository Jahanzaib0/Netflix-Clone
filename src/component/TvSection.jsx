import React from 'react'
import logo2 from "../img/tvLogo.jpg"
import "../Tv.css"
const TvSection = () => {
  return (
    <div className='Tv'>
      <div className="tv-left-container">
         <h1>Enjoy On Your TV.</h1>
         <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>

      </div>
      <div className="tv-right-container">
       <img className='tv-logo' src={logo2} alt="tvPic" />
      </div>
    </div>
  )
}

export default TvSection
