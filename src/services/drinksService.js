
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

async function PostDrink(drinkData) {
  try{
    const res = await fetch(`${BASE_URL}/drinks`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(drinkData)
    })
    return await res.json()

  } catch (err) {
    throw err
  }
}

async function DeleteDrink(drinkId) {
  try{
    const res = await fetch(`${BASE_URL}/drinks/${drinkId}`,{
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json()
  } catch (err) {
    throw err
  }
}

async function addPhoto(photoData, drinkId) {
  const res = await fetch(`${BASE_URL}/${drinkId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}



export { GetDrinks, DeleteDrink, PostDrink , addPhoto}