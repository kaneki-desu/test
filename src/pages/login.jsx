import { useState } from "react"
import "./Styling/registration.css"
import { Navigate } from "react-router-dom"

const Login = () => {
    const [user,setUser]= useState({
        password:"",
        phone:"",
      })
    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value;
        setUser({
          ...user,
          [name]:value,
        })
      }
    const handleSubmit=async(e)=>{
    e.preventDefault();
     try {
        const response= await fetch("http://localhost:5000/api/auth/sign-in",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
            }
            )
        console.log(response)
        if (response.ok) {
            setUser({
                password:"",
                phone:"",
              })
            Navigate({to:"/home"})
        }
     } catch (error) {
        console.log({"message":error})
     }
    }


  return (
    <div><div className="registration-box">
    <form  method="get" onSubmit={handleSubmit}>
    <ul className="ul-input">

      <li>
        <input   
              type="number" 
              name="phone" 
              placeholder=" Phone" 
              id="phone" 
              required 
              autoComplete="off" 
              value={user.phone} 
              onChange={handleInput}
        /></li>
      <li>
      <input   
              type="text" 
              name="password" 
              placeholder=" Enter your Password" 
              id="password" 
              required 
              autoComplete="off" 
              value={user.password} 
              onChange={handleInput}
        />
      </li>
      <li><button type="submit">Login</button></li>
    </ul>
    </form>
      </div>
      </div>
  )
}

export default Login