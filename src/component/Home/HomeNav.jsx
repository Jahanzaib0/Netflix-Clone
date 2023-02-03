
import { Link, useNavigate,  } from 'react-router-dom'
import logo from "../../img/logo.png"

import "../../Home-Nav.css"
const HomeNav = () => {

  const navigate = useNavigate();
 const logOut = () => {
   navigate("/");
   localStorage.clear();
 }

  return (
    <div>
      <nav className="header">

<img src={logo} alt="logo" />

<div>
    <Link to="/home" >TV Shows</Link>
    <Link to="/home" >Movies</Link>
    <Link to="/home" >Recently Added</Link>
    <Link to="/home" >My List</Link>
</div>
<p className='log-div'>
<button className='logOut' onClick={logOut}>LogOut</button>
</p>
</nav>
    </div>
  )
}

export default HomeNav
