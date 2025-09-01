import {Component} from "react";

export class ClassContextComponent extends Component{
    //create styles
    themeStyles(dark){
        return{
            backgroundColor : dark ? '#333' : '#CCC',
            color :  dark ? '#333' : '#CCC',
            padding : '2rem',
            margin : '2rem'
        }
    }
    render(){
        return(
            <div>
                {darkTheme =>{
                    return <div style={this.themeStyles(darkTheme)}> Class Theme</div>
                }}
            </div>
        );
    }
}