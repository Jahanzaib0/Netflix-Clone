import React from 'react'
import '../first.css'
import Header from './Header'
import bg from '../img/coverPage.jpg'
import TvSection from './TvSection'
import MobileSection from './MobileSection'
import WatchEverywhere from './WatchEverywhere'
import KidsSection from './KidsSection'
import QA from './QA'
import Footer from './Footer'
const Unlimited = () => {
  return (
    <>
    <div className='first' style={{backgroundImage: bg}}>
      <Header/>
      <div className='first-textBox'>
        <h1>Unlimited Movies, Tv</h1>
        <h1>Shows and more</h1>
        <h3>Watch AnyWhere. Cancel AnyTime</h3>
        <p>Ready To watch? Enter Your Email To Create or restart Your MemberShip</p>
      <div className="first-input">
        <input type="text" />
        <button>Get Started <span style={{marginLeft : "9px"}}> {">"} </span></button>
      </div> 
      </div>
    </div>
    <TvSection/>
    <MobileSection/>
    <WatchEverywhere/>
    <KidsSection/>
   <QA/>
   <Footer/>
    </>
  )
}

export default Unlimited
