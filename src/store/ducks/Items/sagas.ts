import { call, put, select } from 'redux-saga/effects';
import api from '../../../services/api';
import * as act from './actions';
import { ItemValidator } from './types';

export function* load() {
    try {
        const response = yield call(api.get, '/api/v1/employees');

        yield put(act.loadSuccess(response.data));
    }
    catch (e) {
        yield put(act.loadFailure());
    }
}

export function* save() {
    try {
        let form = yield select(state => state.items.form);
        form.name = form.employee_name; //just to example api
        const response = yield call(api.post, '/api/v1/create', {
            data: form
        });

        if(response.status === 'success') {
            yield put(act.saveSuccess(response.data));
        }
        else {
            yield put(act.saveSuccess(response));
        }
    }
    catch (e) {
        yield put(act.saveFailure({
            message: 'There was an error saving.'
        }));
    }
}

export function* deleteItem() {
    try {
        const form = yield select(state => state.items.form);
        const response = yield call(api.delete, `/api/v1/delete/${form.id}`);

        if(response.status === 'failed') {
            yield put(act.deleteFailure(response.data));
        }
        else {
            yield put(act.deleteSuccess(response.data));
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
        const response = yield call(api.delete, '/test', {params: {items: JSON.stringify(items)}});

        if(response.data.status === 'failed') {
            yield put(act.deleteFailure(response.data));
        }
        else {
            yield put(act.deleteSuccess(response.data));
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

    if(!items.form.employee_name) {
        errors.employee_name = 'Required field';
    }
    else if(items.form.employee_name.length < 3) {
        errors.employee_name = 'Minimum of three characters';
    }

    form.errors = errors;

    yield put(act.validateForm(errors));
}

export function* allSelected() {
    const items = yield select(state => state.items);

    yield put(act.allSelected(items.selected.length === items.data.length));
}