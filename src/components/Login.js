import React from 'react';
import AuthForm from './AuthForm';

function Login(props) {

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
  }

  function handleNameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

return (
<AuthForm name='signin' title='Log in' onSubmit={handleSubmit} note='Not a member yet? Sign up here!'>
  <input className='auth__input' name='username' type='email' value={username} onChange={handleNameChange} placeholder="Email" required/>
  <input className='auth__input' name='password' type='password' value={password} onChange={handlePasswordChange} placeholder="Password" required/>
</AuthForm>
)
}

export default Login;