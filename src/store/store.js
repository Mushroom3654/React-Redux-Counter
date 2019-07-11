import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index'
import rootSage from '../sagas/rootSage';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer, applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSage);

export default store;