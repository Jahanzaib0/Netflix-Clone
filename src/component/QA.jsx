import React from 'react'
import { useState } from 'react'
import "../Q_A.css"
const QA = () => {
  const [hide, sethide] = useState("none");
  const [hide1, sethide1] = useState("none");
  const [hide2, sethide2] = useState("none");
  const [hide3, sethide3] = useState("none");
  const [hide4, sethide4] = useState("none");
  const [hide5, sethide5] = useState("none");
  const HandleShowClick = () => {
  console.log("click")
  hide === "none" ? sethide("block") : sethide("none");
sethide1("none")
sethide2("none")
sethide3("none")
sethide4("none")
sethide5("none")
  }
  const HandleShowClick1 = () => {
  console.log("click")
  hide1 === "none" ? sethide1("block") : sethide1("none");
  sethide("none")
sethide2("none")
sethide3("none")
sethide4("none")
sethide5("none")
  }
  const HandleShowClick2 = () => {
  console.log("click")
  hide2 === "none" ? sethide2("block") : sethide2("none");
  sethide1("none")
  sethide("none")
  sethide3("none")
  sethide4("none")
  sethide5("none")
  }
  const HandleShowClick3 = () => {
  console.log("click")
  hide3 === "none" ? sethide3("block") : sethide3("none");
  sethide1("none")
sethide2("none")
sethide("none")
sethide4("none")
sethide5("none")

  }
  const HandleShowClick4 = () => {
  console.log("click")
  hide4 === "none" ? sethide4("block") : sethide4("none");
  sethide1("none")
sethide2("none")
sethide3("none")
sethide("none")
sethide5("none")
  }
  const HandleShowClick5 = () => {
  console.log("click")
  hide5 === "none" ? sethide5("block") : sethide5("none");
  sethide1("none")
sethide2("none")
sethide3("none")
sethide4("none")
sethide("none")
  }
  return (
    <div className="QA-box">
      <h1 className='QA-h1'>Frequently Asked Questions</h1>
        <div className="QA-textbox">
          <h3 className='QA-textbox-text'>What is Netflix?</h3>
          <button className='QAbtn' onClick={HandleShowClick}>+</button>
        </div>
        <div className='AnswerBox' style={{display : hide}}>
          <h3>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
          </h3>
          <h3>
          You can watch as much as you want, whenever you want without a single commercial  all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </h3>
        </div>
        <div className="QA-textbox">
          <h3 className='QA-textbox-text'>How Much Does Netflix Cost?</h3>
          <button className='QAbtn' onClick={HandleShowClick1}>+</button>
        </div>
        <div className='AnswerBox' style={{display : hide1}}>
          <h3>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.
          </h3>
        </div>
        <div className="QA-textbox">
          <h3 className='QA-textbox-text'>Where Can I Watch?</h3>
          <button className='QAbtn' onClick={HandleShowClick2}>+</button>
        </div>
        <div className='AnswerBox' style={{display : hide2}}>
          <h3>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
          </h3>
          <h3>
          You can watch as much as you want, whenever you want without a single commercial  all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </h3>
        </div>
        <div className="QA-textbox">
          <h3 className='QA-textbox-text'>How Do I Cancel?</h3>
          <button className='QAbtn' onClick={HandleShowClick3}>+</button>
        </div>
        <div className='AnswerBox' style={{display : hide3}}>
          <h3>
          Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees  start or stop your account anytime.
          </h3>
          
        </div>

        <div className="QA-textbox">
          <h3 className='QA-textbox-text'>What Can I Watch On Netflix?</h3>
          <button className='QAbtn' onClick={HandleShowClick4}>+</button>
        </div>
        <div className='AnswerBox' style={{display : hide4}}>
          <h3>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </h3>
          
        </div>
        <div className="QA-textbox">
          <h3 className='QA-textbox-text'>Is Netflix Good For Kids?</h3>
          <button className='QAbtn' onClick={HandleShowClick5}>+</button>
        </div>
        <div className='AnswerBox' style={{display : hide5}}>
          <h3>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
          </h3>
          <h3>
          You can watch as much as you want, whenever you want without a single commercial  all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </h3>
        </div>
        <div className="first-textBox">
        <p>Ready To watch? Enter Your Email To Create or restart Your MemberShip</p>
      <div className="first-input">
        <input type="text" />
        <button>Get Started <span style={{marginLeft : "9px", width : "60%"}}> {">"} </span></button>
      </div> 
      </div>
    </div>
        
  )
}

export default QA
