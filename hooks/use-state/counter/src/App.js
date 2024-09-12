import './App.css';
import {useState} from "react";

const arr =    [1,2,3,4,5,6]

/**
 * Luu y
 * 1. useState la mot hook cua reactjs giup chung ta tao ra mot state trong component
 * 2. Khi state thay doi, component se duoc re-render
 * 3. Khi re-render, cac gia tri khac cua component cung duoc tinh toan lai
 * 4. Component se re-render khi state thay doi
 * 5. initState chi dung lan dau tien
 * 6. setState co the truyen callback, init = gia tri callback return
 * -> ung dung cho state tinh toan nhieu logic
 * 7. setState la thay the gia tri cua state
 * */

function App() {
    const total = arr.reduce((acc, cur) => acc + cur, 0);
    const [count, setCount] = useState(total);

    const handleIncrease = () => {
        setCount(prevState => prevState + 1);
    }

    console.log('re-render')

    return (
        <>
            <h1 style={{padding: '0 20px'}}>{count}</h1>
            <button style={{padding: '0 20px'}} onClick={handleIncrease}>Increase</button>
        </>
    );
}

export default App;
