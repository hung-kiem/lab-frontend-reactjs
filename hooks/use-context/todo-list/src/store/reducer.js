import {ADD_JOB, REMOVE_JOB, SET_JOB} from './actionTypes';

const initialState = {
    jobs: [], job: ''
};

function reducer(state, action) {
    switch (action.type) {
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
        case REMOVE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter((_, index) => index !== action.payload)
            };
        case SET_JOB:
            return {
                ...state, job: action.payload
            };
        default:
            throw new Error('Action type is not defined');
    }
}

export {initialState};
export default reducer;