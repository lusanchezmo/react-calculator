
import './App.css';
import React from "react";
import Boton from './components/Boton';
import Pantalla from './components/Pantalla.jsx';
import BotonIgual from './components/BotonIgual';

function App() {
  return (
    <div className="App">

      <div className='calculator-container'>
          <ul className='puntitos'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Pantalla />
          <div className='contenedor-teclas'>
            <div className='column'>
              <Boton>C</Boton>
              <Boton>7</Boton>
              <Boton>4</Boton>
              <Boton>1</Boton>
              <Boton> </Boton>
            </div>
            <div className='column'>
              <Boton>±</Boton>
              <Boton>8</Boton>
              <Boton>5</Boton>
              <Boton>2</Boton>
              <Boton>0</Boton>
            </div>
            <div className='column'>
              <Boton>/</Boton>
              <Boton>9</Boton>
              <Boton>6</Boton>
              <Boton>3</Boton>
              <Boton>.</Boton>
            </div>
            <div className='column'>
              <Boton>x</Boton>
              <Boton>-</Boton>
              <Boton>+</Boton>
              <BotonIgual>=</BotonIgual>

            </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
