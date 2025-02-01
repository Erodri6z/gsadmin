import { useLocation } from "react-router-dom"
import DrinkEdit from "../../components/EditForm/EditForm"

const DrinkEditPage = (props) => {
  const location = useLocation()
  // console.log(location.state.thisDrink)

  const drink = location.state.thisDrink
  const { image, ...drinkNoImg } = drink
  console.log(drink)
  console.log(drinkNoImg)

  return (
    <>
    <h2>Drink Edit</h2>
    <DrinkEdit drink={drinkNoImg} handleUpdateImage={props.handleUpdateImage} handleUpdateDrink={props.handleUpdateDrink}/>
    </>
  )
}

export default DrinkEditPage