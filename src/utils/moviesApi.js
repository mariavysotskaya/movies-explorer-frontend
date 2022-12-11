const BEATAPI_URL = 'https://api.nomoreparties.co/beatfilm-movies'

const handleResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  return response.json()
  .then(res => {
    return res
  })
}

export const getBeatMovies = () => {
  return fetch(`${BEATAPI_URL}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(handleResponse)
}