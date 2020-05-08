/**
 * Action types
 */

export enum ItemsTypes {
    LOAD_REQUEST = '@items/LOAD_REQUEST',
    LOAD_SUCCESS = '@items/LOAD_SUCCESS',
    LOAD_FAILURE = '@items/LOAD_FAILURE',
    ADD_NEW = '@items/ADD_NEW',
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
    employee_name: string
}

export interface ItemValidator {
    employee_name?: string,
    errors?: {
        employee_name?: string | null | undefined
    }
}

/**
 * State type
 */
export interface ItemsState {
    readonly data: Item[],
    readonly loading: boolean,
    readonly error: boolean,
    readonly selected: string[],
    readonly allSelected: boolean,
    readonly adding: boolean,
    readonly form?: ItemValidator
}