import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
    localStorage.setItem('login', '1');
}

const logout = () => {
    localStorage.removeItem('login');
}

const Home = () => {

    return (<div>
        HOME
        <Link to={'/private'}>Privado</Link>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        </div>);
};

export default Home;