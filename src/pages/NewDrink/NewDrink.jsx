import DrinkForm from "../../components/DrinkForm/DrinkForm"

const NewDrink = (props) => {
  const handlePostDrink = props.handlePostDrink
  return (
    <>
    <h1>New Drink</h1>
    <DrinkForm handlePostDrink={handlePostDrink} />
    </>
  )
}

export default NewDrink