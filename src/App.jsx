import { useEffect, useState } from 'react'
import { Navigate, Route, Routes} from 'react-router';
import './App.css'
import './components/Login/Login.jsx'
import * as authService from './services/authService.js'
import * as drinksService from './services/drinksService.js'
import Login from './components/Login/Login.jsx'
import Nav from './components/Nav/Nav.jsx';
import Drinks from './pages/Drinks/Drinks.jsx'
import DrinksView from './pages/DrinksView/DrinksView.jsx';
// import jwtDecode from 'jwt-decode'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const fetchDrinks = async () => {
      const drinks = await drinksService.GetDrinks()
      setDrinks(drinks)
    }
    fetchDrinks()
  }, [])

  const handleDeleteDrink = async (drinkId) => {
    const deletedDrink = await drinksService.DeleteDrink(drinkId)
    const newDrinkArray = drinks.filter(drink => drink.id !== deletedDrink.id)
    setDrinks(newDrinkArray)
    Navigate(["/"])
  }

  console.log(user)

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
    <Nav user={user} />
    <Routes>
    <Route 
    path = "/"
    element={
      <>
      {!user?
        <><p className="read-the-docs">
            If you do not know what this is youre in the wrong place.
          </p>
          <Login user={user} handleSignupOrLogin={handleSignupOrLogin} /></>
      :
      <>
      <Drinks drinks={drinks} />
      </>
      }
      </>
    }
    />
    <Route
    path='/drink'
    element={
      <DrinksView />
    }
    />
    
    </Routes>
    </>
  )
}

export default App
