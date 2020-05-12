import { all, takeLatest } from 'redux-saga/effects'

import { ItemsTypes } from './Items/types';
import { load, validate, allSelected, deleteItem, deleteAll, save } from './Items/sagas';

import { login, validateLogin, logOut } from './Users/sagas';
import { UsersTypes } from './Users/types';

export default function* rootSaga() {
    return yield all([
        takeLatest(ItemsTypes.LOAD_REQUEST, load),
        takeLatest(ItemsTypes.SAVE_REQUEST, save),
        takeLatest(ItemsTypes.DELETE_REQUEST, deleteItem),
        takeLatest(ItemsTypes.DELETE_ALL_REQUEST, deleteAll),
        takeLatest(ItemsTypes.UPDATE_FORM, validate),
        takeLatest(ItemsTypes.SELECT_ITEM, allSelected),

        takeLatest(UsersTypes.LOGIN_REQUEST, login),
        takeLatest(UsersTypes.LOGOUT, logOut),
        takeLatest(UsersTypes.UPDATE_FORM, validateLogin),
    ]);
}