import {ADD_TODO, REMOVE_TODO, SET_TODO} from './actionTypes';

function addTodo(payload) {
    return {
        type: ADD_TODO, payload
    };
}

function removeTodo(payload) {
    return {
        type: REMOVE_TODO, payload
    };
}

function setTodo(payload) {
    return {
        type: SET_TODO, payload
    };
}

export {addTodo, removeTodo, setTodo};