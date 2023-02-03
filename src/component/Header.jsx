import React from 'react'
import logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header1'>
      <img src={logo} alt="logo"  className="logo1"/>
      <Link to={"/Login"}>
      <button className='signIn-Btn'> Signin</button>
      </Link>
    </div>
  )
}

export default Header
