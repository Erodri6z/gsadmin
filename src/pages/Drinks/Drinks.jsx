import React, { useState } from "react"
import DrinksCard from "../../components/DrinkCard/DrinkCard"


const Drinks = (props) => {

  const cocktails = props.drinks

  return(
    <>
    <div className=''>
      <h1>The Drinks</h1>
      {cocktails.map(c => 
        <DrinksCard cocktails={c} />
      )}
      
    </div>
    </>
  )
}


export default Drinks