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
// import DrinkEdit from './components/EditForm/EditForm.jsx';
import DrinkEditPage from './pages/DrinkEdit/DrinkEdit.jsx';
// import jwtDecode from 'jwt-decode'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [drinks, setDrinks] = useState([])
  const navigate = useNavigate()

  console.log(drinks)

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

  const handlePostDrink = async (drinkData, image) => {
    console.log(drinkData)
    const newDrink = await drinksService.PostDrink(drinkData)
    if (image) {
      console.log("image detected", newDrink)
      
      newDrink.image = await drinkPhotoHelper(image, newDrink.id)
    }
    setDrinks([...drinks, newDrink])
    navigate("/")
  }

  const drinkPhotoHelper = async (image, id) => {
    const photoData = new FormData()
    console.log("Received Image:", image)
    if (image && image.file) {
        photoData.append("image", image.file)
    } else {
        photoData.append("image", image)
    }
    return await drinksService.addPhoto(photoData, id)
  }

  const handleUpdateImage = async (image, drinkData) => {
    console.log("sending image")
    const imageUrl = await drinkPhotoHelper(image, drinkData.id)
    const updatedDrink = {...drinkData, image: imageUrl}
    setDrinks(prevDrinks =>
      prevDrinks.map(drink => 
        drink.id === updatedDrink.id ? updatedDrink : drink
      )
    );

    return updatedDrink;
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate("/")
  }

  const handleUpdateDrink = async (drinkData) => {
    const updatedDrink = await drinksService.UpdateDrink(drinkData)
    const newDrinkArray = drinks.map(
      drink => drink.id === updatedDrink.id ?
      updatedDrink : drink
    )
    setDrinks(newDrinkArray)
    navigate("/")
    }
  
  console.log(user)

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
    <Nav user={user} handleLogout={handleLogout}/>
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
      <NewDrink handlePostDrink={handlePostDrink}/>
    }
    />
    <Route 
    path='/drink-edit'
    element={
      <DrinkEditPage handleUpdateDrink={handleUpdateDrink} handleUpdateImager={handleUpdateImage}/>
    }
    />
    </Routes>
    </>
  )
}

export default App
