import { useLocation } from "react-router-dom"
import DrinkEdit from "../../components/EditForm/EditForm"

const DrinkEditPage = (props) => {
  const location = useLocation()
  console.log(location.state.thisDrink)

  const drink = location.state.thisDrink
  const { image, ...drinkNoImg } = drink

  return (
    <>
    <h2>Drink Edit</h2>
    <DrinkEdit drink={drinkNoImg} handleUpdateDrink={props.handleUpdateDrink}/>
    </>
  )
}

export default DrinkEditPage