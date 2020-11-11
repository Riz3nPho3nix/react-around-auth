import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
  const [name, setName] = React.useState();
  const [link, setLink] = React.useState();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddCard({
      name, link
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return(
    <PopupWithForm name='new-card' title='New Place' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className='modal__input' name='name' type="text" placeholder="Title" minLength="1" maxLength="30" required value={name} onChange={handleNameChange} />
      <input className='modal__input' name='link' type="url" placeholder="Image link" required value={link} onChange={handleLinkChange} />
    </PopupWithForm>
  )
}

export default AddPlacePopup;