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

    yield put(act.allSelected(items.selected.length == items.data.length));
}