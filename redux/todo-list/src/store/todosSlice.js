import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jobInput: '',
    jobs: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setJob(state, action) {
            return {
                ...state,
                jobInput: action.payload
            }
        },
        addJob(state, action) {
            return {
                ...state,
                jobs: state.jobs.push(action.payload)
            }
        },
        removeJob(state, action) {
            return {
                ...state,
                jobs: state.jobs.filter((j, idx) => action.payload !== idx)
            }
        }
    }
});

export const {setJob, addJob, removeJob} = todosSlice.actions;
export default todosSlice.reducer;
