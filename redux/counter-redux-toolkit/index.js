import { createSlice, configureStore } from 'https://cdn.skypack.dev/@reduxjs/toolkit';

// reducer
const counterSlice = window.counterSlice = createSlice({
    name: 'counter',
    initialState: {
        balance: 0
    },
    reducers: {
        incremented: state => {
            state.balance += 1;
        },
        decremented: state => {
            state.balance -= 1;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
})

// DOM element
const increaseBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');

// DOM event
increaseBtn.onclick = () => {
    store.dispatch(counterSlice.actions.incremented());
}
decrementBtn.onclick = () => {
    store.dispatch(counterSlice.actions.decremented());
}

store.subscribe(render);


// Render
function render() {
    const balance = document.querySelector('#balance');
    balance.innerText = store.getState().balance;
}

render();
