import {ADD_JOB, REMOVE_JOB, SET_JOB} from './actionTypes';

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

const removeJob = (payload) => {
    return {
        type: REMOVE_JOB,
        payload
    }
}

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

export {addJob, removeJob, setJob};