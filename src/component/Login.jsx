
import "../login.css"
// import { Link } from 'react-router-dom'
import LoginNav from './LoginNav'
import { useEffect, useState } from 'react'
import {useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
const[email, setEmail] = useState("");
const [password, setPassword] = useState("");
const checkLog = () => {
if (email === "") {
   alert("please Enter Email Adress")
}
else if (password === "") {
  alert("please Enter Password")
}
else {
  const user = {email, password};
  fetch('https://apingweb.com/api/login',{
      method: 'POST',
      headers: new Headers({
       'Authorization': 'Basic ',
          'Content-Type': 'application/json'
      }),
      body:JSON.stringify(user)
  })
  .then(response => response.json())
  .then(result => {
      console.log(result)
     localStorage.setItem("auth_Token", result.token);
     localStorage.setItem("password", password);
     console.log(result.token)
     navigate("/home")
    })
    .catch(error => console.error(error))
   
}


}
useEffect(()=>{
  let login = localStorage.getItem("auth_Token");
  if (login) {
   navigate("/home")
  }
});
     
  return (
    <div className='log'>
      <LoginNav/>
      <div className="Login-UI">
        <div className='UI-container'>
            <h3 className='UI-h3'>Sign In</h3>
            <div className="in-UI">
              
            <input type="text" value={email} onChange={(e)=>{
             setEmail(e.target.value)
            }}/>
            <input type="password" value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            </div>
            <div className="UI-btn">
              <div  >
                <button type='submit' className={"btn-sigIn"} onClick={checkLog}>Sign In</button>
                </div>
            </div>
            <hr />
           <div className="New-to-Netflix">
            <h4> This is for practice</h4>
            <p>we are using fake user Authentication Api </p>
            <p>which give us single user </p>
            <p>Email : superman@gmail.com</p>
            <p>password : 12345</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Login
