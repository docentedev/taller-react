import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getAllStartActionAsyncCreator } from '../../store/modules/user/actions';

const Dashboard = () => {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStartActionAsyncCreator());
    }, [dispatch])
    return (<div>
        DASH
        <br />
        {users.loading ? 'Cargando' : ''}
        <ul>
            {users.data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>);
};

export default Dashboard;