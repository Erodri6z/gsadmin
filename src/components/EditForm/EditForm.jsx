import { useEffect, useState } from "react"
// import { parsePath, useLocation } from "react-router-dom"

const DrinkEdit = (props) => {
  // const location = useLocation()
  const drink = props.drink
  const [drinkData, setDrinkData] = useState(drink)
  const [photoData, setPhotoData] = useState({})
  
  
  console.log(drinkData)
  
  const toList = (str) => {
    return str.split(",")
  }

  const toIntList = (str) => {
    return str.split(",").map(n => parseFloat(n))
  }

  const handleChange = (e) => {
    setDrinkData({...drinkData,
      [e.target.name] : e.target.value
    })           
    if (
      e.target.name === "ingredients" || 
      e.target.name === "bitters" ||
      e.target.name === "notes" ||
      e.target.name === "garnish" ||
      e.target.name === "recommendedGlasses" || 
      e.target.name === "method"){
      const value = toList(e.target.value)
      setDrinkData({...drinkData,
        [e.target.name] : value
      })
    }

    if (e.target.name === "measurementsOz"){
      console.log(e.target.name)
      const value = toIntList(e.target.value)
      setDrinkData({...drinkData,
        [e.target.name] : value
      })
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      console.log(drinkData, photoData)
      props.handleUpdateDrink(drinkData, photoData)
    } catch (err) {
      console.log("Error submitting form:", err)
    }
  }
  
  const handleChangePhoto = (e) => {
    setPhotoData(e.target.files[0])
  }

  return (
    <>
    <div>
      <h2>Drink form</h2>
      {drinkData.image?
      <p>Theres already a Photo, adding a new one will replace it</p>
      :
      <p>Add a photo</p>
      }
      <p>Adding "," Separates Arrays</p>
      <form class="drink-form" autoComplete="off" onSubmit={handleSubmit}>
        <div class="form-entry">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            onChange={handleChange}
            value={drinkData.name}/> 
        </div>
        <div class="form-entry">
          <label>Main Spirit</label>
          <select 
            name="mainSpirit"
            onChange={handleChange}
            value={drinkData.mainSpirit}>
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
            // value={drinkData.image}
            onChange={handleChangePhoto} />
        </div>
        <div class="form-entry">
          <label>Ingredients</label>
          <input 
            type="text" 
            autoComplete="off"
            name="ingredients"
            value={drinkData.ingredients}
            onChange={handleChange}/>
        </div>
        <div class="form-entry">
          <label>Measurements</label>
          <input 
            type="text" 
            autoComplete="off"
            name="measurementsOz"
            value={drinkData.measurementsOz}
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Bitters</label>
          <input 
            type="text" 
            autoComplete="off" 
            name="bitters"
            value={drinkData.bitters}
            onChange={handleChange}/>
        </div>
        <div class="form-entry">
          <label>Garnisn Options</label>
          <input 
            type="text" 
            autoComplete="off" 
            name="garnish"
            value={drinkData.garnish}
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Color</label>
          <input 
            type="text" 
            autoComplete="off"
            name="color"
            value={drinkData.color}
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Recommended Glass</label>
          <input 
            type="text" 
            autoComplete="off"
            name="recommendedGlasses"
            value={drinkData.recommendedGlasses}
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Notes</label>
          <input 
            type="text" 
            autoComplete="off"
            name="notes"
            value={drinkData.notes}
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Method</label>
          <input 
            type="text" 
            autoComplete="off"
            name="method"
            value={drinkData.method}
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Credit</label>
          <input 
            type="text" 
            autoComplete="off"
            name="credit"
            value={drinkData.credit}
            onChange={handleChange}
          />
        </div>
        <div class="form-entry">
          <label>Vibe</label>
          <input 
            type="text" 
            autoComplete="off"
            name="vibe"
            value={drinkData.vibe}
            onChange={handleChange}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default DrinkEdit