import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import CardDesc from '../CardDesc/CardDesc';
import * as auth from '../../utils/Auth.js';
import {infoMessage, errorMessage, authErrors, succesOk} from '../../utils/constants';
import ModalInfo from '../ModalInfo/ModalInfo'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [showModal,setShowModal] = React.useState(false);
  const [iconVisual,setIconVisual] = React.useState(false);
  const [textsucces, setTextsucces] = React.useState('');
  

//Регистрация пользователя
function onRegister( name, email, surname, phone, agency, password ) {
  auth.register(name, email, surname, phone, agency, password)
  .then((res) => {
    navigate('/');
    setShowModal(true)
    setIconVisual(true)
    setTextsucces(succesOk.signinOk)
  })
  .catch(err => {
    if(err === authErrors.conflictErr) { 
      setShowModal(true)
      setIconVisual(false)
      setTextsucces(errorMessage.emailError)
    } else {
      setShowModal(true)
      setIconVisual(false)
      setTextsucces(errorMessage.registrError)
      
    }
  });
}
//Получение токена при какждом мониторовании
/*React.useEffect(()=>{
  tokenCheck();
}, [])*/

//Вход в профиль
function onLogin(email,password){
 // setSubmitBlock(true)
  auth.authorize(email, password)
  .then((res) => {
    if(res.succes === 'no') {
    setShowModal(true)
    setIconVisual(false)
    setTextsucces(res.message)
  } else if(res.succes === 'ok') {
    tokenCheck();
    setShowModal(true)
    setIconVisual(true)
    setTextsucces(res.message)
   //navigate('/profile');
  }
   
  })
  .catch(err => { 
    if(err === authErrors.unauthorizedErr) { 
      setIconVisual(false)
      setShowModal(true)
      setTextsucces(errorMessage.emailandPasswordError)
      
    } else {
      setIconVisual(false)
      setShowModal(true)
      setTextsucces(errorMessage.tokenError) 
    }
  });
}

//Получение данных пользователя, email
function tokenCheck() {
  auth.getContent()
  .then((res) => {
    console.log(res)
    if(res){
      setCurrentUser({
        name: res.name,
        email: res.email,
        surname: res.surname,
        agency: res.agency, 
        phone: res.phone,
        access: res.access,
        admin: res.admin,
        _id: res._id
      });
      setLoggedIn(true)
    }
  })
  .catch(err => console.log(`Зарегистрируйтесь или войдите в систему: ${err}`))  
}


//закрытие модального окна
function handlerClose() {
  setShowModal(false)
  
}

  return (
    <CurrentUserContext.Provider>
    <div className="page">
      <Routes> 
      <Route path="/" element={<><Header /><Landing /> <Footer /> </>} />
      <Route path="/signup" element={<><Header /><Register onRegister={onRegister}/> <Footer /> </>} />
      <Route path="/signin" element={<><Header /><Login onLogin={onLogin} /> <Footer /> </>} />
      <Route path="/profile" element={<><Profile /> <Footer /> </>} />
      <Route path="/CardDesc" element={<><Header /><CardDesc /><Footer /></>} />
      </Routes>
    <ModalInfo 
    isOpen={showModal}
    textError={textsucces}
    onClose={handlerClose}
    icon={iconVisual} />
    </div>
   
  </CurrentUserContext.Provider>
  );
}

export default App;
