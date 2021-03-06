import { action } from 'typesafe-actions';
import { ItemsTypes, Item } from './types';

export const loadRequest = () => action(ItemsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Item[]) => action(ItemsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ItemsTypes.LOAD_FAILURE);
export const deleteRequest = (item: Item) => action(ItemsTypes.DELETE_REQUEST, { item });
export const deleteAllRequest = () => action(ItemsTypes.DELETE_ALL_REQUEST);
export const deleteSuccess = (id: any) => action(ItemsTypes.DELETE_SUCCESS, { id });
export const deleteAllSuccess = (ids: any) => action(ItemsTypes.DELETE_ALL_SUCCESS, { ids });
export const deleteFailure = (response: any) => action(ItemsTypes.DELETE_FAILURE, { response });
export const saveForm = () => action(ItemsTypes.SAVE_REQUEST);
export const saveSuccess = (data: any) => action(ItemsTypes.SAVE_SUCCESS, { data });
export const editSuccess = (data: any) => action(ItemsTypes.EDIT_SUCCESS, { data });
export const saveFailure = (response: any) => action(ItemsTypes.SAVE_FAILURE, { response });
export const addNew = () => action(ItemsTypes.ADD_NEW);
export const editItem = (item: Item) => action(ItemsTypes.EDIT_ITEM, { item });
export const cancelForm = () => action(ItemsTypes.CANCEL_FORM);
export const updateForm = (field: any, value: any) => action(ItemsTypes.UPDATE_FORM, {field, value});
export const validateForm = (errors: any) => action(ItemsTypes.VALIDATE_FORM, { errors });
export const selectItem = (id: string, selected: boolean) => action(ItemsTypes.SELECT_ITEM, { id, selected });
export const allSelected = (all: boolean) => action(ItemsTypes.ALL_SELECTED, { all });
export const selectAll = (selected: boolean) => action(ItemsTypes.SELECT_ALL, { selected });