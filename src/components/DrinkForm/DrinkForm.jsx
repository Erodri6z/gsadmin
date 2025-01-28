import "./DrinkForm.css"
import { useState } from "react"

const DrinkForm = () => {
  const [drinkData, setDrinkData] = useState({
    name: "",
    mainSpirit: "",
    image: "",
    ingredients: "",
    measurementOz: "",
    bitters: "",
    color: "",
    recommendedGlasses: "",
    notes: "",
    method: "",
    credit: "",
    vibe: ""
  })

  const handleChange = (e) => {
    setDrinkData({...drinkData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    try{
      // Leaving this blank until I set up the drink services
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
    <div>
      <h2>Drink form</h2>
      <form class="drink-form" autoComplete="off">
        <div class="form-entry">
          <label>Name</label>
          <input type="text" name="name" /> 
        </div>
        <div class="form-entry">
          <label>Main Spirit</label>
          <select name="mainSpirit">
            <option value="">Pick One</option>
            <option value="Whiskey">Whiskey</option>
            <option value="Vodka">Vodka</option>
            <option value="Tequila">Tequila</option>
            <option value="Gin">Gin</option>
            <option value="Rum">Rum</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-entry">
          <label>Image</label>
          <input type="file" />
        </div>
        <div class="form-entry">
          <label>Ingredients</label>
          <input type="text" autoComplete="off"/>
        </div>
        <div class="form-entry">
          <label>Measurements</label>
          <input type="text" autoComplete="off"/>
        </div>
        <div class="form-entry">
          <label>Bitters</label>
          <input type="text" autoComplete="off" />
        </div>
        <div class="form-entry">
          <label>Garnisn Options</label>
          <input type="text" autoComplete="off" />
        </div>
        <div class="form-entry">
          <label>Color</label>
          <input type="text" autoComplete="off"/>
        </div>
        <div class="form-entry">
          <label>Recommended Glass</label>
          <input type="text" autoComplete="off"/>
        </div>
        <div class="form-entry">
          <label>Notes</label>
          <input type="text" autoComplete="off"/>
        </div>
        <div class="form-entry">
          <label>Method</label>
          <input type="text" autoComplete="off"/>
        </div>
        <div class="form-entry">
          <label>Credit</label>
          <input type="text" autoComplete="off"/>
        </div>
        <div class="form-entry">
          <label>Vibe</label>
          <input type="text" autoComplete="off"/>
        </div>
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default DrinkForm