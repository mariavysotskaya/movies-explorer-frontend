class MainApi {
    constructor(url, headers) {
      this._url = url;
      this._headers = headers;
    }
  
    _makeRequest(promise) {
      return promise.then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json();
      })
      .then((obj) => {
        return obj;
      });
    }

    getUser() {
      const promise = fetch(`${this._url}users/me`, {
        method: 'GET',
        headers: this._headers
      });
      return this._makeRequest(promise);
    }

    editUser(data) {
      const promise = fetch(`${this._url}users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          email: data.email,
          name: data.name
        })
      });
      return this._makeRequest(promise);
    }
  
    getSavedMovies() {
      const promise = fetch(`${this._url}movies`, {
        method: 'GET',
        headers: this._headers
      });
      return this._makeRequest(promise);
    }
  
    addMovie(data) {
      const promise = fetch(`${this._url}movies`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: `https://api.nomoreparties.co${data.image.url}`,
          trailerLink: data.trailerLink,
          thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
        })
      });
      return this._makeRequest(promise);
    }
  
    deleteMovie(movieID) {
      const promise = fetch(`${this._url}movies/${movieID}`, {
        method: 'DELETE',
        headers: this._headers
      });
      return this._makeRequest(promise);
    }
  
    setHeaders(token) {
      this._headers['Authorization'] = `Bearer ${token}`
    }
  }
  
  // http://localhost:5000/
  // https://api.movieget.nomoredomains.icu/
  const mainApi = new MainApi('https://api.movieget.nomoredomains.icu/', {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  });
  
  export default mainApi;