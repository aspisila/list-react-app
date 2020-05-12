/**
 * Action types
 */

export enum ItemsTypes {
    LOAD_REQUEST = '@items/LOAD_REQUEST',
    LOAD_SUCCESS = '@items/LOAD_SUCCESS',
    LOAD_FAILURE = '@items/LOAD_FAILURE',
    DELETE_REQUEST = '@items/DELETE_REQUEST',
    DELETE_ALL_REQUEST = '@items/DELETE_ALL_REQUEST',
    DELETE_SUCCESS = '@items/DELETE_SUCCESS',
    DELETE_ALL_SUCCESS = '@items/DELETE_ALL_SUCCESS',
    DELETE_FAILURE = '@items/DELETE_FAILURE',
    SAVE_REQUEST = '@items/SAVE_REQUEST',
    SAVE_SUCCESS = '@items/SAVE_SUCCESS',
    EDIT_SUCCESS = '@items/EDIT_SUCCESS',
    SAVE_FAILURE = '@items/SAVE_FAILURE',
    ADD_NEW = '@items/ADD_NEW',
    EDIT_ITEM = '@items/EDIT_ITEM',
    SAVE_FORM = '@items/SAVE_FORM',
    CANCEL_FORM = '@items/CANCEL_FORM',
    UPDATE_FORM = '@items/UPDATE_FORM',
    VALIDATE_FORM = '@items/VALIDATE_FORM',
    SELECT_ITEM = '@items/SELECT_ITEM',
    ALL_SELECTED = '@items/ALL_SELECTED',
    SELECT_ALL = '@items/SELECT_ALL'
}

/**
 * Data types
 */
export interface Item {
    id: string,
    name: string
}

export interface ItemValidator {
    id?: string,
    name?: string,
    errors?: {
        name?: string | null | undefined
    }
}

/**
 * State type
 */
export interface ItemsState {
    readonly data: Item[],
    readonly loading: boolean,
    readonly error: boolean,
    readonly msgAlert?: string,
    readonly selected: string[],
    readonly allSelected: boolean,
    readonly adding: boolean,
    readonly form?: ItemValidator
}