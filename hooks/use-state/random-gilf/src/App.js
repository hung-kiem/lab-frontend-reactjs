import './App.css';
import {useState} from "react";

function App() {
    const [state, setState] = useState(null);
    const gift = ["Flower", "Book", "Pen", "Pencil", "Notebook", "Laptop", "Phone", "Tablet", "Headphone", "Speaker"];

    const handleClick = () => {
        setState(gift[Math.floor(Math.random() * gift.length)]);
    }

    return (
        <div>
            <h1>{state} || Random gift</h1>
            <button onClick={handleClick}>Get a random gift</button>
        </div>
    );
}

export default App;
