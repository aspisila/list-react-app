import { combineReducers } from 'redux';
import items from './Items';
import users from './Users';

export default combineReducers({
    items,
    users
});