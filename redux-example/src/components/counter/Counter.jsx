import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const number = useSelector((store) => store.counter.number);
    const dispatch = useDispatch();

    const add = () => {
        dispatch({
            type: 'ADD',
            payload: null,
        });
    }

    const subs = () => {
        dispatch({
            type: 'SUBS',
            payload: null,
        });
    }
    return (
        <div className="counter">
            <button onClick={subs}>-</button>
            <p>{number}</p>
            <button onClick={add}>+</button>
        </div>
    );
};


export default Counter;

/*
import React, { useState} from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const subs = () => {
        setCount(count - 1);
    }
    return (
        <div className="counter">
            <button onClick={subs}>-</button>
            <p>{count}</p>
            <button onClick={add}>+</button>
        </div>
    );
};


export default Counter;
*/