
import './App.css';
import React from "react";
import Boton from './components/Boton';
import Pantalla from './components/Pantalla.jsx';
import BotonIgual from './components/BotonIgual';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput ] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  // const clear = () => {
  //   setInput('');
  // };   ver como lo especifican en la linea que recibe la funcion.

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert("Por favor, ingrese valores válidos para hacer los calculos.");
    }
    setInput(evaluate(input));
  };

  return (
    <div className="App">

      <div className='calculator-container'>
          <ul className='puntitos'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Pantalla input={input}/>
          <div className='contenedor-teclas'>
            <div className='column'>
              <Boton manejarClick={() => setInput('')}>C</Boton>
              <Boton manejarClick={addInput}>7</Boton>
              <Boton manejarClick={addInput}>4</Boton>
              <Boton manejarClick={addInput}>1</Boton>
              <Boton> </Boton>
            </div>
            <div className='column'>
              <Boton manejarClick={addInput}>±</Boton>
              <Boton manejarClick={addInput}>8</Boton>
              <Boton manejarClick={addInput}>5</Boton>
              <Boton manejarClick={addInput}>2</Boton>
              <Boton manejarClick={addInput}>0</Boton>
            </div>
            <div className='column'>
              <Boton manejarClick={addInput}>/</Boton>
              <Boton manejarClick={addInput}>9</Boton>
              <Boton manejarClick={addInput}>6</Boton>
              <Boton manejarClick={addInput}>3</Boton>
              <Boton manejarClick={addInput}>.</Boton>
            </div>
            <div className='column'>
              <Boton manejarClick={addInput}>*</Boton>
              <Boton manejarClick={addInput}>-</Boton>
              <Boton manejarClick={addInput}>+</Boton>
              <BotonIgual manejarClick={calcularResultado}>=</BotonIgual>

            </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
