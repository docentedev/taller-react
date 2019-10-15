import React, { useState, useEffect } from 'react';

import Input from './components/input/Input';

import { getAll, getById } from './services/todo.service';

const App = () => {
    
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [todo, setTodo] = useState({});

    useEffect(() => {
        setLoading(true);
        getAll()
        .then(json => {
            setTodos(json);
            setLoading(false);
        })
    }, []);
    
    const handler = (event) => {
        setLoading(true);
        const id = event.target.dataset.id;
        getById(id).then(json => {
            setTodo(json);
            setLoading(false);
        });
    } 

    return (
        <div className="app">
            <pre>
            {JSON.stringify(todo, null, 2)}
            </pre>
            {loading ? (<strong>Cargando...</strong>) : (<span />)}
            <Input value={name} setMethod={setName} title="Nombre" />
            <div>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <li>{todo.title}</li>
                        <button data-id={todo.id} onClick={handler}>Ver detalle</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;