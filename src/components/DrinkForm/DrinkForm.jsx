const DrinkForm = () => {
  return (
    <>
    <div>
      <h2>Drink form</h2>
      <form class="drink-form">
        <label>Name</label>
        <input type="text" name="name" /> 
        <label>Main Spirit</label>
        <select name="mainSpirit">
          <options value="">Pick One</options>
          <options value="Whiskey">Whiskey</options>
          <options value="Vodka">Vodka</options>
          <options value="Tequila">Tequila</options>
          <options value="Gin">Gin</options>
          <options value="Rum">Rum</options>
          <options value="Other">Other</options>
        </select>
        <label>Image</label>
        <input type="file" />
        <label>Ingredients</label>
        <input type="text" />
        <label>Measurements</label>
        <input type="text" />
        <label>Bitters</label>
        <input type="text" />
        <label>Garnisn Options</label>
        <input type="text" />
        <label>Color</label>
        <input type="text" />
        <label>Recommended Glass</label>
        <input type="text" />
        <label>Notes</label>
        <input type="text" />
        <label>Method</label>
        <input type="text" />
        <label>Credit</label>
        <input type="text" />
        <label>Vibe</label>
        <input type="text" />


      </form>
    </div>
    </>
  )
}

export default DrinkForm