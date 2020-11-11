import { data } from "autoprefixer";

class Api {
  constructor({baseURL, headers}) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _checkResponse(res) {
    return (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));
  }

  getInitialCards() {
    return fetch(`${this._baseURL}/cards`, {
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
  }

  getProfileInfo() {
    return fetch(`${this._baseURL}/users/me`, {
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
  }

  getAppInfo() {
    return Promise.all([this.getProfileInfo(), this.getInitialCards()])
  }

  setProfileInfo(data) {
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then ( res => this._checkResponse(res))
  }

  createCard(data) {
    return fetch(`${this._baseURL}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then ( res => this._checkResponse(res))
  }

  deleteCard(cardID) {
    return fetch(`${this._baseURL}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
  }

  cardLike(cardID) {
    return fetch(`${this._baseURL}/cards/likes/${cardID}`, {
      method: "PUT",
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
  }

  cardUnlike(cardID) {
    return fetch(`${this._baseURL}/cards/likes/${cardID}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
  }

  updateAvatar(url) {
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url.avatar
      })
    })
    .then ( res => this._checkResponse(res))
  }
}

const api = new Api({baseURL: "https://around.nomoreparties.co/v1/group-3",
  headers: {authorization: "85b65791-c6f6-4567-a451-befb44448843",
    "Content-Type": "application/json"
  }
});

export default api;