import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleClick(e) {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleCardDelete(e) {
    props.onCardDelete(props.card);
    e.stopPropagation();
  }

  const isOwner = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `card__delete-btn ${isOwner ? 'card__delete-btn_visible' : 'card__delete-btn_hidden'}`
  );
  
  const cardLikeButtonClassName = (
    `card__heart ${isLiked ? 'card__liked':''}`
  );

  return (
    <li className="card">
      <div className="card__image" style={{backgroundImage: `url(${props.card.link})` }} onClick={handleClick}>
        <button className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
      </div>
      <div className="card__label">
        <h2 className="card__heading">{props.card.name}</h2>
        <div className="card__likes">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;