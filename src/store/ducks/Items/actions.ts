import { action } from 'typesafe-actions';
import { ItemsTypes, Item } from './types';

export const loadRequest = () => action(ItemsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Item[]) => action(ItemsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ItemsTypes.LOAD_FAILURE);

export const addNew = () => action(ItemsTypes.ADD_NEW);
export const cancelForm = () => action(ItemsTypes.CANCEL_FORM);
export const updateForm = (field: any, value: any) => action(ItemsTypes.UPDATE_FORM, {field, value});
export const validateForm = (errors: any) => action(ItemsTypes.VALIDATE_FORM, { errors });
export const selectItem = (id: string, selected: boolean) => action(ItemsTypes.SELECT_ITEM, { id, selected });
export const allSelected = (all: boolean) => action(ItemsTypes.ALL_SELECTED, { all });
export const selectAll = (selected: boolean) => action(ItemsTypes.SELECT_ALL, { selected });