
import * as tokenService from  "./tokenService"


const BASE_URL = "http://localhost:5047"

async function GetDrinks()  {
  try {
    const res = await fetch(`${BASE_URL}/drinks`)
    return await res.json()
  } catch (err) {
    throw err  
  }
}




export { GetDrinks }