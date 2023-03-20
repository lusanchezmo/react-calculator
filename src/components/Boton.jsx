import React from "react";
import '../styles-sheets/Boton.css';

function Boton(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== ' ') && (value !== '=') ;
    };

    return(
        <div 
            className={`container-buttom ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;