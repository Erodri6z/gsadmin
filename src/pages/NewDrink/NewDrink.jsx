import DrinkForm from "../../components/DrinkForm/DrinkForm"

const NewDrink = (props) => {
  return (
    <>
    <h1>New Drink</h1>
    <DrinkForm handlePostDrink={props.handlePostDrink} />
    </>
  )
}

export default NewDrink