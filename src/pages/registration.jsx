import { useState } from "react";
import "./Styling/registration.css"
export const Registration = () => {
  const [user,setUser]= useState({
    Firstname:"",
    Lastname:"",
    username:"Sicksib",
    emailId:"",
    password:"",
    phone:"",
  })

  const handleInput=(e)=>{
    console.log(e)
    let name=e.target.name
    let value=e.target.value
    console.log(name,value)
    setUser({
      ...user,
      [name]:value,
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault;
   alert(user) 
  }
  return (
    <div className="background-image">
    <div className="registration-box">
      <form action="./login" method="post" onSubmit={handleSubmit}>
      <ul className="ul-input">
        <li>
          <ul className="flex  ">
            <li  className="">
            <input   
                type="text" 
                name="Firstname" 
                placeholder="Firstname" 
                id="Firstname" 
                required 
                autoComplete="off" 
                value={user.Firstname} 
                onChange={handleInput}
          /></li >
        <li className="">
          
        <input   
                type="text" 
                name="Lastname" 
                placeholder="Lastname" 
                id="Lastname" 
                required 
                autoComplete="off" 
                value={user.Lastname} 
                onChange={handleInput}
          />
        </li>
          </ul>
          
        </li>
        <li>
          <input   
                type="text" 
                name="username" 
                placeholder="Username" 
                id="username" 
                required 
                autoComplete="off" 
                value={user.username} 
                onChange={handleInput}
          /></li>
        <li>
        <input   
                type="text" 
                name="emailId" 
                placeholder=" Enter your Email Address" 
                id="emailId" 
                required 
                autoComplete="off" 
                value={user.emailId} 
                onChange={handleInput}
          />
        </li>
        <li>
        <input   
                type="text" 
                name="password" 
                placeholder=" Password" 
                id="password"  
                required 
                autoComplete="off" 
                value={user.password} 
                onChange={handleInput}
          />
        </li>
        <li>
        <input   
                type="number" 
                name="phone" 
                placeholder=" Phone number" 
                id="phone" 
                required 
                autoComplete="off" 
                value={user.phone} 
                onChange={handleInput}
          />
        </li>
        <li><button className="registration-button" type="submit">Register</button></li>

      </ul>

      
      </form>
    </div>
    </div>
  )
}

export default Registration;