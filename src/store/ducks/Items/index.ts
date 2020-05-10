import { Reducer } from 'redux';
import { ItemsState, ItemsTypes } from './types';

const INITIAL_STATE: ItemsState = {
    data: [],
    error: false,
    loading: false,
    adding: false,
    selected: [],
    allSelected: false,
    msgAlert: '',
    form: {
        employee_name: '',
        errors: {
            employee_name: ''
        }
    }
}

const reducer: Reducer<ItemsState> = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemsTypes.LOAD_REQUEST:
            return {...state, loading: true};
        case ItemsTypes.LOAD_SUCCESS:
            return {...state, loading: false, error: false, data: action.payload.data.data};
        case ItemsTypes.LOAD_FAILURE:
            return {...state, loading: false, error: true, data: []};
        case ItemsTypes.DELETE_REQUEST:
            return {...state, loading: true, error: false, form: action.payload.item};
        case ItemsTypes.DELETE_SUCCESS:
            return {...state, loading: false, error: false, msgAlert: action.payload.response.message};
        case ItemsTypes.DELETE_FAILURE:
            return {...state, loading: false, error: true, msgAlert: action.payload.response.message};
        case ItemsTypes.SAVE_REQUEST:
            return {...state, loading: true, error: false};
        case ItemsTypes.SAVE_SUCCESS:
            return {...state, loading: false, error: false, adding: false,  data: [...state.data, action.payload.data.data], msgAlert: action.payload.response.message};
        case ItemsTypes.SAVE_FAILURE:
            return {...state, loading: false, error: true, msgAlert: action.payload.response.message};
        case ItemsTypes.ADD_NEW:
            return {...state, adding: true, form: {}};
        case ItemsTypes.EDIT_ITEM:
            return {...state, adding: true, form: action.payload.item};
        case ItemsTypes.CANCEL_FORM:
            return {...state, adding: false};
        case ItemsTypes.UPDATE_FORM:
            return {...state, form: {...state.form, [action.payload.field]: action.payload.value}};
        case ItemsTypes.VALIDATE_FORM:
            return {...state, form: {...state.form, errors: action.payload.errors}};
        case ItemsTypes.SELECT_ITEM:
            if(action.payload.selected) {
                return {...state, selected: [...state.selected, action.payload.id]};
            }
            else {
                return {...state, selected: state.selected.filter(item => item !== action.payload.id)};
            }
        case ItemsTypes.ALL_SELECTED:
            return {...state, allSelected: action.payload.all};
        case ItemsTypes.SELECT_ALL:
            if(action.payload.selected) {
                return {...state, allSelected: true, selected: state.data.map(item => item.id)};
            }
            else {
                return {...state, allSelected: false, selected: []};
            }
        default:
            return state;
    }
}

export default reducer;