import {ThemeContext} from "./ThemeContext";
import {useContext} from "react";

function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <p className={context.theme}>Theming with React is not that hard!</p>
    );
}

export default Paragraph;