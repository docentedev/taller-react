import React from 'react';

import './Input.css';
/**
 * Input...
 * 
 * @param {*} props
 * @param {string|number} props.value
 * @param {function} props.setMethod
 * @param {string} props.title 
 */
const Input = (props) => {
    return (
        <div className="input form-group">
            <label>{props.title}</label>
            <input className="form-control" value={props.value} onChange={(event) => props.setMethod(event.target.value)} />
        </div>
    );
};

export default Input;