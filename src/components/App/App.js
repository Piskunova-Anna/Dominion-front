import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
//import CardDesc from '../CardDesc/CardDesc';
import * as auth from '../../utils/Auth.js';
import {/*infoMessage,*/ errorMessage, authErrors, succesOk} from '../../utils/constants';
import ModalInfo from '../ModalInfo/ModalInfo'
import AddNewFlats from '../AddCard/AddNewFlats'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import api from '../../utils/Api.js';
import SelectObject from '../AddCard/SelectObject'
import NotFound from '../NotFound/NotFound'
import FlatsList from '../Flats/FlatsList';
import {ProtectedRoute} from  '../ProtectedRoute'
import ConfirmList from "../Confirm/ConfirmList";
import CardDesc from '../CardDesc/CardDesc'
import ImageBlocks from '../Auxiliary/ImageBlocks'
import ImagePopup from '../Auxiliary/ImagePopup'

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  const [showImagePopup,setShowImagePopup] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [showModal,setShowModal] = React.useState(false);
  const [iconVisual,setIconVisual] = React.useState(false);
  const [textsucces, setTextsucces] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [showCardModal,setShowCardModal] = React.useState(false);
  const [showSelectModal,setShowSelectModal] = React.useState(false);
  const [object, setObject ] = React.useState('') 
  let authUser = JSON.parse(localStorage.getItem('authUser'));
  
    /* //Получение данных с сервера
     React.useEffect(() => { 
      if(loggedIn) {
       auth.getContent()
        .then(([ userData, cardlist]) => {
          setCards(cardlist)
          setCurrentUser(userData);
        })
        .catch(err => console.log(`Ошибка при загрузке профиля: ${err}`))
        }else {
        }
     
    }, [loggedIn])*/

    //Получение токена при какждом мониторовании
    React.useEffect(()=>{
    tokenCheck()
    getCards() 
  },[])
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
     tokenCheck()
     setShowModal(true)
     setIconVisual(true)
     setTextsucces(res.message)
     navigate('/profile');
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
    if(res){
      setLoggedIn(true)
      localStorage.setItem("authUser", JSON.stringify(res));
      setCurrentUser({
        name: res.name,
        email: res.email,
        surname: res.surname,
        agency: res.agency, 
        phone: res.phone,
        access: res.access,
        admin: res.admin,
        _id: res._id
      })
    }
  })
  .catch(err => console.log(`Зарегистрируйтесь или войдите в систему: ${err}`))  
}

//Выход из системы
function onSignOut(){
  auth.signOut()
  .then(()=> {
    navigate('/signin');
    setLoggedIn(false)
    localStorage.clear();
    setCurrentUser({})
  })
  .catch(err => console.log(`Не удалось выйти из системы: ${err}`)) 
}

function getCards () {
  api.getCards()
  .then((cardlist) => { 
    setCards(cardlist)
  })
  .catch(err => console.log(`Не удалось получить карточки: ${err}`))   
}
//закрытие модального окна
function handlerClose() {
  setShowModal(false)
  setShowCardModal(false)
  setShowSelectModal(false)
  setShowImagePopup(false)
}
function handlerOpenAddModal() {
  setShowSelectModal(false)
  setShowCardModal(true)
}

function handlerOpenModal() {
 
  setShowSelectModal(true)
}
function hanldNewcard(values) {
 api.createNewCard(values)
 .then((newCard) => {
  setCards([newCard, ...cards]); 
  setShowCardModal(false)
})
.catch(err => console.log(`Ошибка при добавлении карточки: ${err}`))
}

function handleDeleteCard(card) {
  api.deleteCard(card._id)
  .then(() => {
    setCards(()=> cards.filter((c) => c._id !== card._id))
  })
  .catch(err => console.log(`Ошибка при загрузке профиля: ${err}`))
}
function handleChange(event) {
  setObject(event.target.value)
}

function handleImageOpenPopup(image) {
  
  setShowImagePopup(image)
}
console.log(showImagePopup)
  return (
    <CurrentUserContext.Provider  value={currentUser}>
    <div className="page">
        {/*<Header />
      <Routes> 
        <Route exact path="/" element={<Landing />} />
        <Route path="/signup" element={<Register onRegister={onRegister}/>} />
        <Route path="/signin" element={<Login onLogin={onLogin} />} />
        <Route path="/flats" element={<FlatsList cards={cards} onCardDelete={handleDeleteCard} />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} authUser={authUser} cards={cards} logOut={onSignOut} onCardDelete={handleDeleteCard} onClick={handlerOpenModal} />} />
        <Route path="/:id" element={<CardDesc onCardClick={handleImageOpenPopup} cards={cards}/>} />
        
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer /> 
      <AddNewFlats
      /*isOpen={showCardModal}
      onClose={handlerClose}*/
      title='Добавить новый объект'
      name='flats'
      /*onCardData={hanldNewcard}
      object={object}*/
        />
        {/*<SelectObject 
        isOpen={showSelectModal}
        onClose={handlerClose}
        onNext={handlerOpenAddModal}
        object={object}
        onChange={handleChange}
        name='object'
      />
    <ModalInfo 
          isOpen={showModal}
    textError={textsucces}
    onClose={handlerClose}
      icon={iconVisual}
     />
     <ImagePopup 
    onClose={handlerClose}
    card={showImagePopup !==null && showImagePopup}
     />
    </div>
   
  </CurrentUserContext.Provider>
  );
}

export default App;
