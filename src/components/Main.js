import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
        <section className="profile">
            <div className="profile__avatar">
              <img alt="Profile portrait" className="profile__picture" src={currentUser.avatar}/>
              <button className="profile__overlay" onClick={props.onEditAvatar}></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__job">{currentUser.about}</p>
              <button className="profile__edit link" aria-label="Edit Profile" onClick={props.onEditProfile}></button>
            </div>
            <button className="profile__add-btn link" onClick={props.onAddPlace}></button>
        </section>
        <ul className="cards">
          {props.cards.map((card) => {
            return <Card key={card._id} card={card} onCardLike={(card) => {props.onCardLike(card)}} onCardClick={(card) => {props.onCardClick(card)}} onCardDelete={(card) => {props.onCardDelete(card)}} />
          })}
        </ul>
    </main>
  )
}

export default Main;