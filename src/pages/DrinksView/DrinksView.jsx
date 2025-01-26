import { useLocation } from "react-router-dom"    
import './DrinksView.css'

const DrinksView =  () => {
  const location = useLocation()
  const thisDrink = location.state.drink
  console.log(location.state.drink.name)

  return (
    <>
    <div>
      <h1>{thisDrink.name}</h1>
      {thisDrink.image?
      <img src={thisDrink.image} alt="drink-image" />
      :
      <p>no image</p>
      }
      <div>
          <h2>Main Spirit: {thisDrink.mainSpirit}</h2>
          <h4>Method: {thisDrink.method.map(m => m + " ")}</h4>
          <h4>Recommended In : {thisDrink.recommendedGlasses.map(m => m + " ")}</h4>
          <h4>Garnish: {thisDrink.garnish.map(m => m + " ")}</h4>
      </div>
      <div class="ingredients-div">
        <div class="ingredients">
          {thisDrink.ingredients.map(c => 
            <p>{c}</p>
          )} 
        </div>
        <div class="ingredients">
          {thisDrink.measurementsOz.map(m => 
            <p>{m}</p>
          )}
        </div>
      </div>
      <p>{thisDrink.bitters}</p>
      <p>Vibe: {thisDrink.vibe}</p>
    
    </div>
    </>
  )
}

export default DrinksView