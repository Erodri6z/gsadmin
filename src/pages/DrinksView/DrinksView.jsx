import { useLocation } from "react-router-dom"

const DrinksView =  () => {
  const location = useLocation()
  const thisDrink = location.state.drink

  return (
    <>
    <div>
      <h3>{thisDrink.name}</h3>
      <p>{ingredients}</p>
      <p>{measurementsOz}</p>
    
    </div>
    </>
  )
}

export default DrinksView