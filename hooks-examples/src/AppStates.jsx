import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(21);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handlerOnRegister = () => {
    const data = {
      age,
      name,
      lastName,
      email,
      password
    };
    console.log(data);
  }

  const isDisabled = () => {
    return age < 21 || name === '' || lastName === '' || email === '' || password === '' || password !== passwordConfirm;
  }

  const passwordValidator = () => password === passwordConfirm;
  const ageValidator = () => age >= 21;

  return (
    <div className="App">
      <input value={age} onChange={(event) => setAge(event.target.value)} placeholder="Edad"  type="number" max="99" min="12"/><br />
      {ageValidator() ? (<span>OK</span>) : (<span>Edad debe ser mayor o igual a 21</span>)}<br />
      <input value={name} onChange={(event) => setName(event.target.value)}/><br />
      <input value={lastName} onChange={(event) => setLastName(event.target.value)}/><br />
      <input value={email} onChange={(event) => setEmail(event.target.value)}/><br />
      <input value={password} onChange={(event) => setPassword(event.target.value)}/><br />
      <input value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)}/><br />
      {!passwordValidator() ? (<span>Contraseñas deben ser iguales</span>) : (<span/>)}<br />
      <button disabled={isDisabled()} onClick={handlerOnRegister}>Register</button>
    </div>
  );
}

export default App;
