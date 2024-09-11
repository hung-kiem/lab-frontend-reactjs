import './App.css';
import {actions} from './store';
import {useStore} from "./store";


function App() {
    const [state, dispatch] = useStore();

    return (
        <>
            <input value={state.currentTodo} onChange={(e) => {
                dispatch(actions.setTodo(e.target.value))
            }}/>
            <button onClick={() => {
                dispatch(actions.addTodo(state.currentTodo))
            }}>Add
            </button>

            <br/>
            <ul>
                {state.todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
