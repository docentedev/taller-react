const getLS = () => JSON.parse(localStorage.getItem('todo'));
const setLS = (data) => localStorage.setItem('todo', JSON.stringify(data));

const getInitilState = () => {
    const result = getLS();
    if (result) {
        return result;
    }
    setLS({
        todos: [],
        index: 0,
        apiTodos: [],
    });
    return getLS();
};

const initialState = getInitilState();

export const ADD_TODO = 'todo/add';
export const REMOVE_TODO = 'todo/remove';
export const UPDATE_TODO = 'todo/update';

const todoReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const nStateAdd = {
                ...prevState,
                index: prevState.index + 1,
                todos: action.payload,
            };
            setLS(nStateAdd);
            return nStateAdd;
        case REMOVE_TODO:
            const nStateRemove = {
                ...prevState,
                todos: action.payload,
            };
            setLS(nStateRemove);
            return nStateRemove;
        case UPDATE_TODO:
            return {
                ...prevState,
                todos: action.payload,
            };
        case 'ADD_API_TODO':
            const nStateADDAPI = {
                ...prevState,
                apiTodos: action.payload,
            };
            setLS(nStateADDAPI);
            return nStateADDAPI;
        default:
            return prevState;
    }
};

export default todoReducer;