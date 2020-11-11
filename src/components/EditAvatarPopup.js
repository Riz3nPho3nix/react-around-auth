import React from 'react';
import PopupWithForm from './PopupWithForm.js';



class EditAvatarPopup extends React.Component {
  constructor(props) {
    super(props);
    this.avatarInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.avatarInput.current.value);
    this.props.onUpdateAvatar({
      avatar: this.avatarInput.current.value
    });
  }

  render() {
    return(
      <>
      <PopupWithForm name='new-avatar' title='Change Profile Picture' isOpen={this.props.isOpen} onClose={this.props.onClose} onSubmit={this.handleSubmit}>
        <input className='modal__input' name='avatar' type="url" placeholder="Image link" ref={this.avatarInput} required />
      </PopupWithForm>
      </>
    )
  }
}

export default EditAvatarPopup;