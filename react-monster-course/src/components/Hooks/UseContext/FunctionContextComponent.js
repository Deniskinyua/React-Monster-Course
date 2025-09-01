import {ThemeContext} from "./UseContext";
import {useContext} from "react";

export default function FunctionContextComponent(){
    //Import the context using useContext():
    const darkTheme = useContext(ThemeContext);
    //Create Theme styles
    const themeStyles ={
        backgroundColor : darkTheme ? '#333' : '#CCC',
        color :  darkTheme ? '#333' : '#CCC',
        padding : '2rem',
        margin : '2rem'
    }

    return(<div style={themeStyles}> Function Theme</div>)
}