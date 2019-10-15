import React, { useState, useEffect } from 'react';

import Input from './components/input/Input';

const App = () => {
    
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'get',
        })
        .then(response => response.json())
        .then(json => setTodos(json))
    }, []);
    

    return (
        <div className="app">
            <Input value={name} setMethod={setName} title="Nombre" />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;