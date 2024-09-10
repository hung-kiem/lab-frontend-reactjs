import './App.css';
import {ThemeContext} from "./ThemeContext";
import Content from "./Content";
import {useContext} from "react";

function App() {
    const context = useContext(ThemeContext);
    return (
        <div>
            <button onClick={context.handleThemeChange}>Change Theme</button>
            <Content/>
        </div>
    );
}

export default App;
