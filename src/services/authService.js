import * as tokenService from  "./tokenService"

const BASE_URL = "http://localhost:5047"


async function login(formData) {
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

    if (json.error) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err  
  }
}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}


export { login, getUser, logout }