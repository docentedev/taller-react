import { getAll } from '../../../client/user';

const getAllStartActionCreator = () => {
    return {
        type: 'USERS/GETALL/START',
        payload: '',
    };
};

const getAllOKActionCreator = (data) => {
    return {
        type: 'USERS/GETALL/OK',
        payload: data,
    };
};

const getAllNOKActionCreator = (err) => {
    return {
        type: 'USERS/GETALL/NOK',
        payload: err,
    };
};

export const getAllStartActionAsyncCreator = () => {
    return (dispatch, getState) => {
        dispatch(getAllStartActionCreator());
        getAll().then(data => {
            dispatch(getAllOKActionCreator(data));
        }).catch(err => {
            dispatch(getAllNOKActionCreator(err));
        })
    }
};