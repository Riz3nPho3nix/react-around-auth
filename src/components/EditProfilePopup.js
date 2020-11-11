import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] =React.useState('');


  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name, about:description
    });
  }

return(
<PopupWithForm name='profile-edit' title='Edit Profile' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
  <input className='modal__input' name='name' type="text" minLength="2" maxLength="40" required defaultValue={currentUser.name} onChange={handleNameChange} />
  <input className='modal__input' name='about' type="text" minLength="2" maxLength="200" required defaultValue={currentUser.about} onChange={handleDescriptionChange} />
</PopupWithForm>

)}

export default EditProfilePopup;