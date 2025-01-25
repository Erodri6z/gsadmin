import { useLocation } from "react-router-dom"

const DrinksView =  () => {
  const location = useLocation()
  const thisDrink = location.state.drink
  console.log(location.state.drink.name)

  return (
    <>
    <div>
      <h1>{thisDrink.name}</h1>
      <div>
          <h2>Main Spirit: {thisDrink.mainSpirit}</h2>
          <h4>Method: {thisDrink.method.map(m => m + " ")}</h4>
          <h4>Recommended In : {thisDrink.recommendedGlasses.map(m => m + " ")}</h4>
          <h4>Garnish: {thisDrink.garnish.map(m => m + " ")}</h4>
      </div>
      <div>
      <p>{thisDrink.ingredients.map(c => c + " ")}</p>
      <p>{thisDrink.measurementsOz.map(m => m + " ")}</p>
      <p>{thisDrink.bitters}</p>
      </div>
      <p>Vibe: {thisDrink.vibe}</p>
    
    </div>
    </>
  )
}

export default DrinksView