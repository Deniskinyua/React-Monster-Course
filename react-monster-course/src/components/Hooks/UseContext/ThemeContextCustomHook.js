import React, {useContext, useState} from "react";

const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext();

export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeContextUpdate);
}

export function ThemeProvider({children}){
    const [darkTheme, setDarkTheme] = useState(true);
    const toggleTheme =() => setDarkTheme(prevTheme => !prevTheme);

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContextUpdate value={toggleTheme}>
                {children}
            </ThemeContextUpdate>
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;