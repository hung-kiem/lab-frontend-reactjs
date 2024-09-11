const initState = {
    todos: [], currentTodo: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, todos: [...state.todos, action.payload]
            };
        case 'REMOVE_TODO':
            return {
                ...state, todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'SET_TODO':
            return {
                ...state, currentTodo: action.payload
            }
        default:
            return state;
    }
}

export {initState};
export default reducer;
