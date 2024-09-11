import {useContext, useReducer, useRef} from 'react';
import {ThemeContext} from "./store/ThemeContext";
import './App.css';
import reducer, {initialState} from './store/reducer'
import {addJob, setJob} from "./store/actions";

function App() {
    const context = useContext(ThemeContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(addJob(state.job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }

    const handleChange = (e) => {
        dispatch(setJob(e.target.value));
    }

    return (
        <>
            <button onClick={context.handleChangeTheme}>Toggle Theme</button>
            <h3 className={context.theme}>Danh sach cong viec</h3>
            <input value={state.job} ref={inputRef} onChange={(e) => handleChange(e)}/>
            <button onClick={handleAdd}>Them</button>
            <br/>
            <ul>
                {state.jobs.map((job, index) => {
                    return <li key={index}>{job}</li>
                })}
            </ul>
        </>
    );
}

export default App;
