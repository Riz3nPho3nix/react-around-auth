import React from 'react';
import { render } from '@testing-library/react';

function PopupWithForm(props) {

  return(
<div className={`${props.name} modal ${props.isOpen ? 'modal__open' : ''}`}>
        <div className="modal__window">
          <button className="modal__close link" onClick={props.onClose}></button>
          <form action="submit" onSubmit={props.onSubmit} className="modal__form" name={`${props.name}`} noValidate>
            <h2 className="modal__heading">{props.title}</h2>
            {props.children}
            <button className="modal__button button">Save</button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;