import { getAll, getById } from '../services/todo.service'
import Todos from '../components/todos/Todos'


const getAllActionCreatorSync = (todos) => ({
    type: 'ADD_API_TODO',
    payload: todos,
});

export const getAllActionCreatorAsync = () => {
    return (dispatch) => {
        getAll()
            .then(json => {
                dispatch(getAllActionCreatorSync(json))
            });
    }
}