import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from '../../store/todo.reducer';

import { getAllActionCreatorAsync } from '../../store/apiTodos.action';


const addTodoActionCreator = (todos, name, index) => {
    const todo = {
        name: name,
        id: index,
    };
    todos.push(todo);
    return {
        type: ADD_TODO,
        payload: todos,
    };
};

const removeTodoActionCreator = (todos, removeIndex) => {
    const newTodos = todos.filter(todo => todo.id !== removeIndex);
    return {
        type: REMOVE_TODO,
        payload: newTodos,
    };
};


const Todos = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todo.todos);
    const index = useSelector((store) => store.todo.index);
    const apiTodos = useSelector((store) => store.todo.apiTodos);

    useEffect(() => {
        dispatch(getAllActionCreatorAsync());
    }, []);

    const handlerChange = (event) => {
        const value = event.target.value;
        setName(value);
    }



    const handlerAdd = () => {
        setName('');
        dispatch(addTodoActionCreator(todos, name, index));
    }

    const handlerDelete = (event) => {
        const id = Number.parseInt(event.target.dataset.id);
        dispatch(removeTodoActionCreator(todos, id));
    }

    return (
        <div>
            <hr />
            <input value={name} onChange={handlerChange} />
            <button onClick={handlerAdd}>Add</button>
            <hr />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.id} - {todo.name}
                        <button data-id={todo.id} onClick={handlerDelete}>Delete</button>
                    </li>
                ))}
                <hr />
                {apiTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.id} - {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;