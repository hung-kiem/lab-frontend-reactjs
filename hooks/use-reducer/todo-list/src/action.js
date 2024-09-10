import {SET_JOB, ADD_JOBS, REMOVE_JOBS} from './constants';

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    };
}

export const addJobs = payload => {
    return {
        type: ADD_JOBS,
        payload
    };
}

export const removeJobs = payload => {
    return {
        type: REMOVE_JOBS,
        payload
    };
}