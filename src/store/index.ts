import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { ItemsState } from './ducks/Items/types';
import { UsersState } from './ducks/Users/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from "./ducks/rootSaga";

export interface AppState {
    items: ItemsState,
    users: UsersState
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<AppState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;