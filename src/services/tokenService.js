import jwt_decode from 'jwt-decode'

function setToken(token) {
  localStorage.setItem('token', token)
}

function getToken() {
  let token = localStorage.getItem('token')
  console.log(token)
  if (token) {
    const payload = jwt_decode(token)
    // console.log(payload.exp < Date.now() / 1000)
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      token = null
    }
  } else {
    localStorage.removeItem('token')
  }
  return token
}

function getUserFromToken() {
  const token = getToken()
  console.log(jwt_decode(token).UserId)
  return token ? jwt_decode(token).UserId : null
}

function removeToken() {
  localStorage.removeItem('token')
}

export { setToken, getToken, getUserFromToken, removeToken }
