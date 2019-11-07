const initialState = {
    data: [],
    loading: false,
};

export const usersRedurers = (prevSate = initialState, action) => {
    switch (action.type) {
        case 'USERS/GETALL/START':
            return {
                loading: true,
                data: prevSate.data,
            };
        case 'USERS/GETALL/OK':
            return {
                loading: false,
                data: action.payload,
            };
        default:
            return prevSate;
    }
}