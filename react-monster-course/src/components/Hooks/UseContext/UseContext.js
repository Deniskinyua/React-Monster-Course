import React, {useState} from 'react';
import FunctionContextComponent from "./FunctionContextComponent";
import {ClassContextComponent} from "./ClassContextComponent";
import {ThemeProvider} from './ThemeContextCustomHook';

export default function UseContext(){

    return(
        <div>
            <ThemeProvider>
                <FunctionContextComponent/>

            </ThemeProvider>
        </div>
    );
}