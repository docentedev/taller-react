import {
    USER_GETALL_NOK,
    USER_GETALL_OK,
    USER_GETALL_START
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const usersRedurers = (prevSate = initialState, action) => {
    switch (action.type) {
        case USER_GETALL_START:
            return {
                loading: true,
                data: prevSate.data,
                error: null,
            };
        case USER_GETALL_OK:
            return {
                loading: false,
                data: action.payload,
                error: false,
            };
        case USER_GETALL_NOK:
            return {
                loading: false,
                data: prevSate.data,
                error: action.payload,
            };
        default:
            return prevSate;
    }
}