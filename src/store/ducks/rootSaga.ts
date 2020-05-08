import { all, takeLatest } from 'redux-saga/effects'
import { ItemsTypes } from './Items/types';
import { load, validate, allSelected } from './Items/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(ItemsTypes.UPDATE_FORM, validate),
        takeLatest(ItemsTypes.LOAD_REQUEST, load),
        takeLatest(ItemsTypes.SELECT_ITEM, allSelected)
    ]);
}