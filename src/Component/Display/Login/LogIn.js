import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const LogIn = () => {
  return (
    <div className='Login-Wrapper'>
      <form >
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div>
            <input
              type="checkbox"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <Link to='/sign-up'>
          <a href="/sign-up">Sign Up</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default LogIn