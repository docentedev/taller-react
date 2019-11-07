const initialState = {
    number: 0,
};

/**
 * 
 * @param {*} prevState 
 * @param {*} action 
 * @param {string} action.type
 * @param {*} action.payload
 */
const counterReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...prevState,
                number: prevState.number + 1,
            };

        case 'SUBS':
            return {
                ...prevState,
                number: prevState.number - 1,
            };
        default:
            return prevState;
    }
};

export default counterReducer;