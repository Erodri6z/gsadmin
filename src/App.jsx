import { useState } from 'react'
import './App.css'
import './components/Login/Login.jsx'
import * as authService from './services/authService.js'
import Login from './components/Login/Login.jsx'

function App() {
  const [user, setUser] = useState(authService.getUser())


  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <p className="read-the-docs">
        If you do not know what this is youre in the wrong place.
      </p>
      <Login handleSignupOrLogin={handleSignupOrLogin} />
    </>
  )
}

export default App
