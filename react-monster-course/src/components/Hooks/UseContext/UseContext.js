import React, {useState} from 'react';
import FunctionContextComponent from "./FunctionContextComponent";
import {ClassContextComponent} from "./ClassContextComponent";

export const ThemeContext = React.createContext();
export default function UseContext(){
    const[darkTheme, setDarkTheme] = useState(true);
    function toggleTheme(){
        setDarkTheme(prevTheme => !prevTheme)
    };
    return(
        <div>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Change Theme</button>
                <FunctionContextComponent/>
                <ClassContextComponent/>
            </ThemeContext.Provider>
        </div>
    );
}