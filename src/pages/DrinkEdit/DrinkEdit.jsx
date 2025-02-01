import { useLocation } from "react-router-dom"
import { useState } from "react"
import DrinkEdit from "../../components/EditForm/EditForm"
import EditPhoto from "../../components/EditForm/EditPhoto"

const DrinkEditPage = (props) => {
  const location = useLocation()
  // console.log(location.state.thisDrink)
  const [drinkSwitch, setDrinkSwitch] = useState(true)
  const drink = location.state.thisDrink
  const { image, ...drinkNoImg } = drink

  const switchForm = () => {
    drinkSwitch === true?setDrinkSwitch(false):setDrinkSwitch(true)
  }
  
  console.log(drink)
  console.log(drinkNoImg)

  return (
    <>
    <button onClick={() => switchForm() }>Switch Between Image/JSON</button>
    <h2>Drink Edit</h2>
    {drinkSwitch===true?
    <DrinkEdit drink={drinkNoImg} handleUpdateDrink={props.handleUpdateDrink}/>
    :
    <EditPhoto drink={drink} handleUpdateImage={props.handleUpdateImage}/>
    }
    </>
  )
}

export default DrinkEditPage