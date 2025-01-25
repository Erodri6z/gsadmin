import { METHODS } from "http"
import * as tokenService from  "./tokenService"


const BASE_URL = "http://localhost:5047"

async function GetDrinks()  {
  try {
    const res = await (`${BASE_URL}/drinks`)

    console.log(await res.json())
    return await res.json()


  } catch (err) {
    throw err  
  }
}








export { GetDrinks }