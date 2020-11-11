import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`display modal ${props.card !== '' ? 'modal__open' : ''}`} onClick={props.onClose}>
        <div className="modal__window display__window">
          <button className="modal__close link" onClick={props.onClose}></button>
          <figure>
            <img className="display__image" src={`${props.card.link}`} />
            <figcaption className="display__caption">{props.card.name}</figcaption>
          </figure>
        </div>
      </div>
  )
}

export default ImagePopup;