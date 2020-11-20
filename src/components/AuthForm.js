import React from 'react';

function AuthForm(props) {

  return(
    <>
      <form action="submit" onSubmit={props.onSubmit} className="auth__form" name={`${props.name}`} noValidate>
        <h2 className="auth__heading">{props.title}</h2>
          {props.children}
        <button className="auth__button">{props.title}</button>
        <p className="auth__note">{props.note}</p>
      </form>
    </>
  )
}

export default AuthForm;