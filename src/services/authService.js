import * as tokenService from  "./tokenService"

const BASE_URL = "http://localhost:5047"


async function login(formData) {
  // console.log(JSON.stringify(formData))
  try {
    const res = await fetch(`${BASE_URL}/profiles/login`, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData),
    })
    const json = await res.json()
    console.log(json)
    if (json.token) {
      tokenService.setToken(json.token)
    }
    console.log(json)
    if (json.error) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err  
  }
}

async function getUser() {
  return tokenService.getUserFromToken
}

async function logout() {
  tokenService.removeToken()
}


export { login, getUser, logout }