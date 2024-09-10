import {ADD_JOBS, REMOVE_JOBS, SET_JOB} from './constants';

export const initialState = {
    jobs: [], job: ''
};

function reducer(state, action) {
    switch (action.type) {
        case ADD_JOBS:
            return {
                ...state, jobs: [...state.jobs, action.payload]
            };
        case REMOVE_JOBS:
            return {
                ...state,
                jobs: state.jobs.filter((_, index) => index !== action.payload)
            };
        case SET_JOB:
            return {
                ...state, job: action.payload
            };
        default:
            throw new Error();
    }
}

export default reducer;