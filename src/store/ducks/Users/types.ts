/**
 * Action types
 */

export enum UsersTypes {
    LOGIN_REQUEST = '@users/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@users/LOGIN_SUCCESS',
    LOGIN_FAILURE = '@users/LOGIN_FAILURE',
    LOGOUT = '@users/LOGOUT',
    LOGOUT_SUCCESS = '@users/LOGOUT_SUCCESS',
    UPDATE_FORM = '@users/UPDATE_FORM',
    VALIDATE_FORM = '@items/VALIDATE_FORM'
}

export interface UserValidator {
    username?: string,
    password?: string,
    errors?: {
        username?: string | null | undefined,
        password?: string | null | undefined
    }
}

/**
 * Data types
 */
export interface User {
    id: string,
    username: string
}

/**
 * State type
 */
export interface UsersState {
    readonly data: User[],
    readonly loading: boolean,
    readonly error: boolean,
    readonly logged: boolean,
    readonly msgAlert?: string,
    readonly form: UserValidator
}