
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
    console.log(drinkData)
    const res = await fetch(`${BASE_URL}/drinks`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(drinkData)
    })
    return await res.json()

  } catch (err) {
    throw err
  }
}


async function UpdateDrink(drinkData) {
  try {
    // console.log(drinkData.id)
    const res = await fetch(`${BASE_URL}/drinks/${drinkData.id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: {...drinkData, image: ""}
    })
    // console.log({...drinkData, image: ""})
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
  console.log("sending", drinkId)
  console.log(`${BASE_URL}/drinks/image/${drinkId}`)
  const res = await fetch(`${BASE_URL}/drinks/image/${drinkId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  const data = await res.json();
  console.log("Image uploaded successfully!", data);
  return data;  
}



export { GetDrinks, DeleteDrink, PostDrink, UpdateDrink, addPhoto}