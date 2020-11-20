import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header.js'
import Main from './Main.js';
import Footer from './Footer.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup.js';
import Login from './Login.js';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUserData] = React.useState({});
  const [isEditProfileModalOpen, toggleProfileModal] = React.useState(false);
  const [isAddPlaceModalOpen, togglePlaceModal] = React.useState(false);
  const [isEditAvatarModalOpen, toggleAvatarModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');
  const [cards, setCards] = React.useState([]);
  

  function handleEditAvatarClick() {
   toggleAvatarModal(true);
  }

  function handleEditProfileClick() {
   toggleProfileModal(true);
  }
 
  function handleAddPlaceClick() {
   togglePlaceModal(true);
  }

  function closeAllPopups() {
   toggleProfileModal(false);
   togglePlaceModal(false);
   toggleAvatarModal(false);
   setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userInfo) {
    api.setProfileInfo(userInfo)
    .then (data => {setCurrentUserData({...currentUser, name:data.name, about:data.about})
    })
    .then(() => {closeAllPopups()})
    .catch(err => console.log(err));
  }

  function handleUpdateAvatar(url) {
    api.updateAvatar(url)
    .then(res => {setCurrentUserData({...currentUser, avatar:res.avatar})})
    .then(() => {closeAllPopups()})
    .catch(err => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    let res;
    if (isLiked) {
      res = api.cardUnlike(card._id)
    } else {
      res = api.cardLike(card._id)
    }
    res.then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch( err => console.log(err));
}
function handleCardDelete(card) {
  api.deleteCard(card._id)
  .then (() => {
    const newArray = cards.filter(c => c._id !== card._id);
    setCards(newArray);
  })
  .catch( err => console.log(err))
}

function handleAddCard(cardInfo) {
  api.createCard(cardInfo)
  .then (newCard => setCards([...cards, newCard]))
  .then(() => {closeAllPopups()})
  .catch( err => console.log(err))
}

React.useEffect(() => {
  api.getProfileInfo()
  .then ((data) => {
    setCurrentUserData(data);
  })
  .catch( err => console.log(err));
}, []);

React.useEffect(() => {
  api.getInitialCards()
  .then (cards => {setCards(cards)})
  .catch( err => console.log(err));
}, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
          <div className="content">
          <div className="page">
        <Switch>
          <Route path="/signin">
            <Header link={'Signup'} />
            <Login />
          </Route>
          <Route exact path="/">
          <Header link={'Signout'}/>
      <Main 
      
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={(card) => handleCardClick(card)}
      selectedCard={selectedCard}
      onClose={closeAllPopups}
      cards={cards}
      onCardLike = {handleCardLike}
      onCardDelete = {handleCardDelete}
      />
          </Route>
        </Switch>
      <Footer />
    </div>
    </div>
      <EditProfilePopup isOpen={isEditProfileModalOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <AddPlacePopup isOpen={isAddPlaceModalOpen} onClose={closeAllPopups} onAddCard={handleAddCard} />
      <EditAvatarPopup isOpen={isEditAvatarModalOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />

    </CurrentUserContext.Provider>
  );
}

export default App;
