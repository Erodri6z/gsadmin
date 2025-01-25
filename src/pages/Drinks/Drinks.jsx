import React, { useState } from "react"


const Drinks = (props) => {

  const cocktails = props.drinks

  return(
    <>
    <div className=''>
      <h1>The Drinks</h1>
      {cocktails.map(c => 
        <div>
          <h3>{c.name}</h3>
        </div>
      )}
      
    </div>
    </>
  )
}


export default Drinks