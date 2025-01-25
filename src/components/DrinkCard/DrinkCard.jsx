import { Link } from "react-router-dom"


const DrinksCard = (props) => {
  const drink = props.cocktails 

  return (
    <>
    <div>
      <Link to="/drink" key={drink.id} state={{ drink }}>
      <h4>{drink.name}</h4>
      </Link>
    </div>
    </>  
  )
}

export default DrinksCard