import {createContext, useState} from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark');

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    }

    const value = {
        theme,
        handleChangeTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext}
export default ThemeProvider;