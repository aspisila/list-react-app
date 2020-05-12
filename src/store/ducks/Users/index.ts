import { Reducer } from 'redux';
import { UsersState, UsersTypes } from './types';

const INITIAL_STATE: UsersState = {
    data: [],
    error: false,
    loading: false,
    form: {}
}

const reducer: Reducer<UsersState> = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case UsersTypes.LOGIN_REQUEST:
            return {...state, loading: true};
        case UsersTypes.LOGIN_SUCCESS:
            return {...state, loading: false, error: false, data: action.payload.data.data};
        case UsersTypes.LOGIN_FAILURE:
            return {...state, loading: false, error: true, data: []};
        case UsersTypes.UPDATE_FORM:
            return {...state, form: {...state.form, [action.payload.field]: action.payload.value}};
        case UsersTypes.VALIDATE_FORM:
            return {...state, form: {...state.form, errors: action.payload.errors}};
        default:
            return state;
    }
}

export default reducer;