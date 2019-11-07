import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getAllStartActionAsyncCreator } from '../../store/modules/user/actions';

import AlertInfo from '../../components/alert-info/AlertInfo';


const Dashboard = () => {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStartActionAsyncCreator());
    }, [dispatch])
    return (<div>
        DASH
        <br />

        <AlertInfo message={users.loading ? 'Cargando' : ''} />
        
        <ul>
            {users.data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>);
};

export default Dashboard;