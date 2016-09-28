import { combineReducers } from 'redux';
import todosReducers from './todosReducers';

const rootReducer = combineReducers({
    todosReducers
});

export default rootReducer;
