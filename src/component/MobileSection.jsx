import React from 'react'
import mb from "../img/mb.jpeg"
import '../mobile.css'
const MobileSection = () => {
  return (
    <div>
      <div className='mobile'>
      <div className="mobile-left-container">
         <h1>Download Your Shows To Watch Offline.</h1>
         <h3>Save your favorites easily and always have something to watch..</h3>

      </div>
      <div className="mobile-right-container">
       <img className='mobile-logo' src={mb} alt="tvPic" />
      </div>
    </div>
    </div>
  )
}

export default MobileSection
