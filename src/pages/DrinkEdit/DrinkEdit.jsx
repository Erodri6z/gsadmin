import { useLocation } from "react-router-dom"
import DrinkEdit from "../../components/EditForm/EditForm"

const DrinkEditPage = () => {
  const location = useLocation()
  console.log(location.state.thisDrink)

  const drink = location.state.thisDrink

  return (
    <>
    <h2>Drink Edit</h2>
    <DrinkEdit drink={drink}/>
    </>
  )
}

export default DrinkEditPage