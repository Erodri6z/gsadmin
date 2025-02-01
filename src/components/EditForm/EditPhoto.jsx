import { useLocation } from "react-router-dom"
import { useState } from "react"

const EditPhoto = (props) => {
  const drinkData = props.drink
  // const [drinkData, setDrinkData] = useState(drink)
  const [photoData, setPhotoData] = useState({})
  
  const handleSubmitImage = (e) => {
    e.preventDefault()
    try {
      console.log(drinkData, photoData)
      console.log(props)
      props.handleUpdateImage(photoData, drinkData)
    } catch (err) {
      console.log("Error submitting image:", err)
    }
  }
  
  const handleChangePhoto = (e) => {
    setPhotoData(e.target.files[0])
  }

  return (
    <>
    <h2>Change image</h2>
    <form onSubmit={handleSubmitImage}>
        <div class="form-entry">
          <label>Image</label>
          <input 
          type="file" 
          name="image" 
          // value={drinkData.image}
          onChange={handleChangePhoto} />
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default EditPhoto