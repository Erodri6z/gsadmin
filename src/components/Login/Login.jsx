import { useState } from "react"
import './Login.css'

function Login (props) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })


  return (
    <>
    <div class="login-form">
      <h4>Login</h4>
      <div class="space">
      <label htmlFor="email">Username</label>
      <input type="text" name="email" />
      </div>
      <div class="space">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      </div>
      <button>Enter</button>
    </div>
    </>
  )
}

export default Login