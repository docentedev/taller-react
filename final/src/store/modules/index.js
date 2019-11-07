import { combineReducers } from 'redux';
import { usersRedurers } from './user/reducers';

const reducers = combineReducers({
    users: usersRedurers,
});

export default reducers;