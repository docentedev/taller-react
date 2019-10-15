import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const refInputName = useRef();

  useEffect(() => {
    console.log("Update App");
    console.log(refInputName.current)
  });

  useEffect(() => {
    console.log("Mount App");
  }, []);

  useEffect(() => {
    console.log("Update name");
    if (refInputName.current.value.length > 10) {
      refInputName.current.style.color = "red";
    } else {
      refInputName.current.style.color = "green";
    }
  }, [name]);

  return (
    <div className="App">
      <input ref={refInputName} value={name} onChange={(event) => setName(event.target.value)}/><br />
      <input value={age} onChange={(event) => setAge(event.target.value)} type="number"/><br />
    </div>
  );
}

export default App;
