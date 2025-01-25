import React, { useState } from "react"


const Drinks = (props) => {

  const cocktails = props.drinks

  return(
    <>
    <div>
      <h2>The Drinks</h2>
      {cocktails.map(c => 
        <h3>{c.name}</h3>
      )}
      <div>
      
      </div>
    </div>
    </>
  )
}


export default Drinks