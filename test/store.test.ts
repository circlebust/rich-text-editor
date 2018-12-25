import { createStore, applyMiddleware, combineReducers, Reducer, compose } from 'redux';
import { log } from 'D:/Files/Projects/shared/utils';
import { setStore } from '../src/app/utils/store';
import { todoReducer } from '../src/app/reducers';
 
const initialState = {
    title: "aaa",
    routes:[],
    todos: []
};
const store = setStore(initialState);

test(
    "store", 
    async () => {
        log('store', store);
        expect(store).toBeTruthy();
        
});

test(
    "reducer", 
    async () => {
        log('reducer', todoReducer);
        expect(todoReducer).toBeTruthy();
        
});

test(
    "preloadedState", 
    async () => {
        
        const preloadedState = store.getState()
        log('preloadedState', preloadedState);
        expect(todoReducer).toBeTruthy();
        
});


