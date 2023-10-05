


















import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [fName,setfName] = useState('')
  const [lName,setlName] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(fName,lName,email,password)
    fetch("http://localhost:8080/register",{
      method:"POST",
      body : JSON.stringify({
        fName,
        lName,
        email,
        password
      }),
    }).then((res)=>res.json())
    .then((data)=>{console.log(data,"userRegister")})

  }



  return (
    <div className='Signup-Wrapper'>
        <form  onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e)=>setfName( e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e)=>setlName( e.target.value)}

            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e)=>setemail( e.target.value)}
             
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e)=>setpassword(e.target.value)}
              

            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered 
            <Link to='/logIn'>
            <a href='./LogIn'>Log in?</a>
            </Link>
          </p>
        </form>
    </div>
  )
}

export default SignUp