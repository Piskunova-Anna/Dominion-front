class Api {
  constructor ({address, headers}) {
    this._address = address;
    this._headers = headers;
  }
  
  _getResponseData(res) {
    if(res.ok) {
      return res.json()
    }else {
      return Promise.reject(res.status)
    } 
  }

  //Получение всех карточек
  getCards () {
    return fetch(`${this._address}/cards`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._getResponseData)
  }

  //Получение всех зарегистрированных пользователей
  getUsers () {
    return fetch(`${this._address}/users`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._getResponseData)
    }

  //Изменение прав доступа для юзера
  editContent (access, userId) {
    console.log(access)
    return fetch(`${this._address}/users/${userId}`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({access})
    })
    .then(this._getResponseData)
  }

  deleteCard(id) {
    return fetch(`${this._address}/profile/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include'
    })
    .then(this._getResponseData)
  }


  editCard(data) {
    return fetch(`${this._address}/profile/cards/${data.id}`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name: 'Квартира',
        image: data.imageBlob,
        description: data.values.info,
        price: data.values.price,
        adress: data.values.adress,
        transaction: data.values.transaction,
        floor: data.values.floor,
        rooms: data.values.rooms,
        cadastre: data.values.kadastr,
        balcony: data.values.balcony,
        elevator: data.values.elevator,
        repair: data.values.repair,
        metro: data.values.metro,
        totalarea: data.values.totalArea,
        kitchenarea: data.values.kitchenArea,
        district: data.values.district,
        commission: data.values.commission,
        active: true,
      })
    })
    .then(this._getResponseData)
  }

//Скрытие карточек
  hideCard (id, active) {
    return fetch(`${this._address}/profile/cards/${id}`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({active})
    })
    .then(this._getResponseData)
  }

  //Создание новой карточки
  createNewCard(data) {
    return fetch(`${this._address}/profile/cards`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.object,
        image: data.imageBlob,
        description: data.values.info,
        price: data.values.price,
        adress: data.values.adress,
        transaction: data.values.transaction,
        floor: data.values.floor,
        rooms: data.values.rooms,
        cadastre: data.values.kadastr,
        balcony: data.values.balcony,
        elevator: data.values.elevator,
        repair: data.values.repair,
        metro: data.values.metro,
        totalarea: data.values.totalArea,
        kitchenarea: data.values.kitchenArea,
        district: data.values.district,
        commission: data.values.commission,
        active: true,
      })
    })
    .then(this._getResponseData)
  }   
}

    const api = new Api({
      address: 'http://localhost:3002',
      headers: {
        'Content-Type': 'application/json'
    }
    });
    
    export default api  