import { call, put, select } from 'redux-saga/effects';
import history from '../../../history';

import api from '../../../services/api';
import * as auth from '../../../services/auth';
import * as act from './actions';
import { UserValidator } from './types';

export function* login() {
    try {
        const users = yield select(state => state.users);
        const response = yield call(api.post, '/auth/login', {
            username: users.form.username,
            password: users.form.password
        });

        if(response.status === 200) {
            yield auth.login(response.data);
            yield put(act.loginSuccess());
            history.push('/app');
        }
        else {
            yield put(act.loginFailure());
        }
    }
    catch (e) {
        yield put(act.loginFailure());
    }
}

export function isAuthenticated() {
    const jwt = auth.getToken();
    let session;

    try {
        if (jwt) {
            const base64Url = jwt.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
        
            session = JSON.parse(window.atob(base64));
        }
    }
    catch (error) {
        console.log(error); 
        return false;
    }

    return session;
}

export function* logOut () {
    yield auth.logout();
    yield put(act.logOutSuccess());
}

export function* validateLogin() {
    const users = yield select(state => state.users);
    let form: UserValidator = {};
    let errors: any = {};

    if(!users.form.username) {
        errors.username = 'Required field';
    }
    else if(users.form.username.length < 4) {
        errors.usrname = 'Minimum of four characters';
    }

    if(!users.form.password) {
        errors.password = 'Required field';
    }
    else if(users.form.password.length < 4) {
        errors.password = 'Minimum of four characters';
    }

    form.errors = errors;

    yield put(act.validateForm(errors));
}