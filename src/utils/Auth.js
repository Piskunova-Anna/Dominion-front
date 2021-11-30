export const BASE_URL = 'http://localhost:3002';

const getResponsData = (res)=> {
    if(res.ok) {
      return res.json()
    
     }else {
       return Promise.reject(res.status)
     } 
  }

  export const register = (name, email, surname, phone, agency, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({name, email, surname, phone, agency, password})
    })
    .then(getResponsData)
  };

  export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify({email, password})
    })
    .then(getResponsData);
  }; 

  export const getContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
    })
    .then(getResponsData);
  } 

  /*export const editContent = (email, name) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({email, name})
    })
    .then(getResponsData);
  }*/

  export const signOut = () => {
    return fetch(`${BASE_URL}/signout`, {
      method: "POST",
      credentials: "include",
    })
    .then(getResponsData);
  }