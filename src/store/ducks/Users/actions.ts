import { action } from 'typesafe-actions';
import { UsersTypes } from './types';

export const loginRequest = () => action(UsersTypes.LOGIN_REQUEST);
export const loginSuccess = () => action(UsersTypes.LOGIN_SUCCESS);
export const loginFailure = () => action(UsersTypes.LOGIN_FAILURE);
export const updateForm = (field: any, value: any) => action(UsersTypes.UPDATE_FORM, {field, value});
export const validateForm = (errors: any) => action(UsersTypes.VALIDATE_FORM, { errors });
export const logOut = () => action(UsersTypes.LOGOUT);
export const logOutSuccess = () => action(UsersTypes.LOGOUT_SUCCESS);