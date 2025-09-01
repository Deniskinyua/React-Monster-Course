import {ThemeContext} from "./UseContext";
import React from "react";
import {useTheme, useThemeUpdate} from './ThemeContextCustomHook';

export default function FunctionContextComponent(){
    //Import the context using useContext():
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    //Create Theme styles
    const themeStyles ={
        backgroundColor : darkTheme ? '#333' : '#CCC',
        color :  darkTheme ? '#333' : '#CCC',
        padding : '2rem',
        margin : '2rem'
    }

    return(
        <div>
            <button onClick={toggleTheme}>Change Theme</button>
            <div style={themeStyles}> Function Theme</div>
        </div>
    );
}