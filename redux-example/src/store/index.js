import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import counterReducer from './counter.reducer'
import todoReducer from './todo.reducer'
import chartReducer from './chart.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    chart: chartReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;