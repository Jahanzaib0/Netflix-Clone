import React from 'react'
import kids from '../img/kids.png'
import "../kids.css"
const KidsSection = () => {
  return (
      <div>
      <div className='kids'>
      <div className="kids-left-container">
         <h1>Create profiles for kids.</h1>
         <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>

      </div>
      <div className="kids-right-container">
       <img className='kids-logo' src={kids} alt="tvPic" />
      </div>
    </div>
    </div>
  )
}

export default KidsSection
