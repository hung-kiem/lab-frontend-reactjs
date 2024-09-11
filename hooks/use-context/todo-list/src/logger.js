import reducer, {initialState} from "./store/reducer";
import {useReducer} from "react";

function logger() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
}

export default logger;