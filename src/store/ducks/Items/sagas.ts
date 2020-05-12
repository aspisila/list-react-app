import { call, put, select } from 'redux-saga/effects';
import { getToken } from '../../../Util';
import api from '../../../services/api';
import * as act from './actions';
import { ItemValidator } from './types';

const token = getToken();

export function* load() {
    try {
        const response = yield call(api.get, '/item', {
            headers: { Auth: token }
        });

        yield put(act.loadSuccess(response.data));
    }
    catch (e) {
        yield put(act.loadFailure());
    }
}

export function* save() {
    try {
        let form = yield select(state => state.items.form);
        const method  = form.id ? api.patch : api.post;
        const url  = form.id ? `/item/${form.id}` : '/item';
        const msg  = form.id ? 'editing' : 'saving';
        const response = yield call(method, url, {
            ...form
        },{
            headers: { Auth: token }
        });

        if(response.status === 201) {
            yield put(act.saveSuccess(response.data));
        }
        else if(response.status === 204) {
            yield put(act.editSuccess({...form}));
        }
        else {
            yield put(act.saveFailure({
                message: `There was an error ${msg}!`
            }));
        }
    }
    catch (e) {
        yield put(act.saveFailure({
            message: `There was an error.`
        }));
    }
}

export function* deleteItem() {
    try {
        const form = yield select(state => state.items.form);
        const response = yield call(api.delete, `/item/${form.id}`, {
            headers: { Auth: token }
        });
        console.log('response', response);
        if(response.status === 204) {
            yield put(act.deleteSuccess(form.id));
        }
        else {
            yield put(act.deleteFailure(response.data));
        }
    }
    catch (e) {
        yield put(act.deleteFailure({
            message: 'There was an error deleting.'
        }));
    }
}

export function* deleteAll() {
    try {
        const items = yield select(state => state.items.selected);
        const response = yield call(api.delete, '/item/deleteAll', {
            data: [...items],
            headers: { Auth: token }
        });
        console.log('response', response);
        if(response.status === 204) {
            yield put(act.deleteAllSuccess([...items]));
        }
        else {
            yield put(act.deleteFailure(response.data));
        }

    }
    catch (e) {
        yield put(act.deleteFailure({
            message: 'There was an error deleting.'
        }));
    }
}

export function* validate() {
    const items = yield select(state => state.items);
    let form: ItemValidator = {};
    let errors: any = {};

    if(!items.form.name) {
        errors.name = 'Required field';
    }
    else if(items.form.name.length < 3) {
        errors.name = 'Minimum of three characters';
    }

    form.errors = errors;

    yield put(act.validateForm(errors));
}

export function* allSelected() {
    const items = yield select(state => state.items);

    yield put(act.allSelected(items.selected.length === items.data.length));
}