import React from 'react';

function AuthForm(props) {

  return(
    <>
      <form action="submit" onSubmit={props.onSubmit} className="modal__form modal__form_auth" name={`${props.name}`} noValidate>
        <h2 className="modal__heading modal__heading_auth">{props.title}</h2>
          {props.children}
        <button className="modal__button modal__button_auth button">{props.title}</button>
        <p className="modal__note">{props.note}</p>
      </form>
    </>
  )
}

export default AuthForm;