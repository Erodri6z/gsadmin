import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate, Route, Routes} from 'react-router';
import './App.css'
import './components/Login/Login.jsx'
import * as authService from './services/authService.js'
import * as drinksService from './services/drinksService.js'
import Login from './components/Login/Login.jsx'
import Nav from './components/Nav/Nav.jsx';
import Drinks from './pages/Drinks/Drinks.jsx'
import DrinksView from './pages/DrinksView/DrinksView.jsx';
import NewDrink from './pages/NewDrink/NewDrink.jsx';
// import jwtDecode from 'jwt-decode'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [drinks, setDrinks] = useState([])
  // const navigate = useNavigate()

  //TODO: add a way to have this update everytime state is updated without it becoming a infinite loop 
  useEffect(() => {
    const fetchDrinks = async () => {
      const drinkCollection = await drinksService.GetDrinks()
      setDrinks(drinkCollection)
    }
    fetchDrinks()
  }, [])

  const handleDeleteDrink = async (drinkId) => {
    const deletedDrink = await drinksService.DeleteDrink(drinkId)
    const newDrinkArray = drinks.filter(drink => drink.id !== deletedDrink.id)
    setDrinks(newDrinkArray)
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
        <>
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
      <DrinksView handleDeleteDrink={handleDeleteDrink} />
    }
    />
    <Route 
    path='/newDrink'
    element={
      <NewDrink />
    }
    />
    </Routes>
    </>
  )
}

export default App
