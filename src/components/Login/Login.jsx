import React, { useState } from "react"
// import {  Navigate, useNavigate } from 'react-router-dom'

import './Login.css'
import * as authService from '../../services/authService'

function Login (props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  console.log(props.user)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  } 

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
    <div class="login-form">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div class="space">
          <label htmlFor="username" class="space" >Username</label>
          <input 
            type="username" 
            name="username" 
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div class="space">
          <label htmlFor="password" class="space" >Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button>Enter</button>
      </form>
    </div>
    </>
  )
}

export default Login