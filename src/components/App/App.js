import React from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import Login from '../Login/Login';
import * as auth from '../../utils/Auth.js';
import {infoMessage, errorMessage, authErrors, succesOk} from '../../utils/constants';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory(); 
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
//Регистрация пользователя
function onRegister( name, email, password, surname, agency, phone ) {
  auth.register(name, email, password, surname, agency, phone)
  .then((res) => {
    if(res){
      //setShowModal(true);
      console.log('Регистрация прошла успешно, ожидайте подтверждения')
      //history.push('/');
    }
    //setShowModal(true)
    //setIconVisual(true)
    //setTextsucces(succesOk.signinOk)
 
  })
  .catch(err => {
    if(err === authErrors.conflictErr) { 
      //setShowModal(true)
      //setIconVisual(false)
      //setTextsucces(errorMessage.emailError)
    } else {
      //setShowModal(true)
      //setIconVisual(false)
      //setTextsucces(errorMessage.registrError)
      
    }
  });
}
//Получение токена при какждом мониторовании
React.useEffect(()=>{
  tokenCheck();
}, [])

//Вход в профиль
function onLogin(email,password){
 // setSubmitBlock(true)
  auth.authorize(email, password)
  .then(() => {
    tokenCheck();
  })
  .catch(err => { 
    /*if(err === authErrors.unauthorizedErr) { 
      setIconVisual(false)
      setShowModal(true)
      setTextsucces(errorMessage.emailandPasswordError)
      
    } else {
      setIconVisual(false)
      setShowModal(true)
      setTextsucces(errorMessage.tokenError) 
    } */
  });
}

//Получение данных пользователя, email
function tokenCheck() {
  auth.getContent()
  .then((res) => {
    if(res){
      setCurrentUser({
        name: res.name,
        email: res.email,
        surname: res.surname,
        agency: res.agency, 
        phone: res.phone,
        _id: res._id
      });
      setLoggedIn(true)
    }
  })
  .catch(err => console.log(`Зарегистрируйтесь или войдите в систему: ${err}`))  
}

  return (
    <CurrentUserContext.Provider>
    <div className="page">
      <Routes> 
      <Route path="/" element={<><Header /><Landing /> <Footer /> </>} />
      <Route path="/signup" element={<><Header /><Register onRegister={onRegister}/> <Footer /> </>} />
      <Route path="/signin" element={<><Header /><Login onLogin={onLogin} /> <Footer /> </>} />
      </Routes>
    
    </div>
   
  </CurrentUserContext.Provider>
  );
}

export default App;
