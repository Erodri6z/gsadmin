import { useEffect, useState } from 'react'
import './App.css'
import './components/Login/Login.jsx'
import * as authService from './services/authService.js'
import Login from './components/Login/Login.jsx'
import jwtDecode from 'jwt-decode'

function App() {
  const [user, setUser] = useState(authService.getUser())

  console.log(user)

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
    console.log("auth service get user reached")
  }

  return (
    <>
      <p className="read-the-docs">
        If you do not know what this is youre in the wrong place.
      </p>
      <Login user={user} handleSignupOrLogin={handleSignupOrLogin} />
    </>
  )
}

export default App
