import React from "react";
import '../styles-sheets/BotonIgual.css';

const BotonIgual = (props) => (
    <div className='equals-buttom' onClick={props.manejarClick}>
        {props.children}
    </div>
);

export default BotonIgual;