import * as tokenService from  "./tokenService"

const BASE_URL = `${import.meta.env.BACK_END_SERVER_URL}/profiles`


async function login(credentials) {
  try {
    const res = await fetch (`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(credentials)
    })
    const json = await res.json()
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

async function getUser() {
  return tokenService.getUserFromToken
}

async function logout() {
  tokenService.removeToken()
}


export { login, getUser, logout }