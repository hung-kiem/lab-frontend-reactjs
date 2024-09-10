import {createContext, useState} from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark');
    const handleThemeChange = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider};