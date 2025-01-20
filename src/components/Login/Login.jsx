import { useState } from "react"
import './Login.css'

function Login (props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
  }


  return (
    <>
    <div class="login-form">
      <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div class="space">

      <label htmlFor="email" class="space" >Username</label>
      <input type="text" name="email" />
      </div>
      <div class="space">
      <label htmlFor="password" class="space" >Password</label>
      <input type="password" name="password" />
      </div>
      <button>Enter</button>
      </form>
    </div>
    </>
  )
}

export default Login