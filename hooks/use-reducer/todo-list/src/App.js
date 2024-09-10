import {useReducer, useRef} from 'react';
import reducer, {initialState} from "./reducer";
import {addJobs, removeJobs, setJob} from "./action";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(initialState);
    const inputRef = useRef();

    const handleAdd = (e) => {
        dispatch(addJobs(state.job));
        dispatch(setJob(''));
        inputRef.current.focus();
    };
    return (<div style={{padding: '0 20px'}}>
            <h3>Todo List</h3>
            <input type="text"
                   placeholder="Add todo"
                   ref={inputRef}
                   value={state.job}
                   onChange={e => {
                       console.log(e.target.value);
                       dispatch(setJob(e.target.value))
                   }}
            />
            <button
                onClick={handleAdd}>
                Add
            </button>
            <ul>
                {state.jobs.map((job, index) => (<li key={index}>
                        {job}
                        <button
                            onClick={() => dispatch(removeJobs(index))}
                        >
                            Remove
                        </button>
                    </li>))}
            </ul>
        </div>);
}

export default App;
