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
  console.log(drinkData)
  
  const toList = (str) => {
    return str.split(",")
  }

  const toIntList = (str) => {
    return parseInt(str).split(",")
  }
  
  const handleChange = (e) => {
    setDrinkData({...drinkData,
      [e.target.name] : e.target.value
    })

    console.log(e.target.name)
    if (e.target.name === "ingredients"){
      const value = toList(e.target.value)
      setDrinkData({...drinkData,
        [e.target.name] : value
      })
    }
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
          <input 
            type="text" 
            name="name" 
            onChange={handleChange}/> 
        </div>
        <div class="form-entry">
          <label>Main Spirit</label>
          <select 
            name="mainSpirit"
            onChange={handleChange}>
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
          <input 
            type="file" 
            name="image" 
            onChange={handleChange} />
        </div>
        <div class="form-entry">
          <label>Ingredients</label>
          <input 
            type="text" 
            autoComplete="off"
            name="ingredients"
            onChange={handleChange}/>
        </div>
        <div class="form-entry">
          <label>Measurements</label>
          <input 
            type="text" 
            autoComplete="off"
            name="measurementOz"/>
        </div>
        <div class="form-entry">
          <label>Bitters</label>
          <input 
            type="text" 
            autoComplete="off" 
            name="bitters"
            onChange={handleChange}/>
        </div>
        <div class="form-entry">
          <label>Garnisn Options</label>
          <input 
            type="text" 
            autoComplete="off" 
            name="garnish"
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Color</label>
          <input 
            type="text" 
            autoComplete="off"
            name="color"
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Recommended Glass</label>
          <input 
            type="text" 
            autoComplete="off"
            name="recommendedGlass"
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Notes</label>
          <input 
            type="text" 
            autoComplete="off"
            name="notes"
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Method</label>
          <input 
            type="text" 
            autoComplete="off"
            name="method"
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Credit</label>
          <input 
            type="text" 
            autoComplete="off"
            name="credit"
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Vibe</label>
          <input 
            type="text" 
            autoComplete="off"
            name="vibe"
            onClick={handleChange}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default DrinkForm