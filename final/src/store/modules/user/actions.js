import {
    USER_GETALL_NOK,
    USER_GETALL_OK,
    USER_GETALL_START
} from './const';

import { getAll } from '../../../client/user';

const getAllStartActionCreator = () => {
    return {
        type: USER_GETALL_START,
        payload: null,
    };
};

const getAllOKActionCreator = (data) => {
    return {
        type: USER_GETALL_OK,
        payload: data,
    };
};

const getAllNOKActionCreator = (err) => {
    return {
        type: USER_GETALL_NOK,
        payload: err,
    };
};

export const getAllStartActionAsyncCreator = () => {
    return (dispatch, getState) => {
        dispatch(getAllStartActionCreator());
        getAll()
            .then(data => {
                dispatch(getAllOKActionCreator(data));
            })
            .catch(err => {
                dispatch(getAllNOKActionCreator(err));
            })
    }
};