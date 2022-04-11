import './App.css';
import logo from "./imagenes/freecodecamp-logo.png"
import Button from "./components/Button"
import Screen from "./components/Screen"
import ClearButton from "./components/ClearButton"
import { useState } from "react"
import { evaluate } from "mathjs"

function App() {

  const [input, setInput] = useState("")

  const addInput = val => {
    setInput(input + val)
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Ingresa valores para realizar cálculos")
    }
    
  }

  /*
    Puedo limpiar el estado con una función que defino aca y la paso al componente ClearButton 
    o puedo hacerlo desde el mismo botón haciendo uso de una función anónima que limpie el estado.

  Forma "tradicional":

  Definiendo la función para limpiar el estado
  const clearInput = () => {
    setInput("")
  }
  */
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={logo} alt="" className="freecodecamp-logo"/>
      </div>
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <div className="fila">
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClic={calcularResultado}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>
        <div className="fila-c">
          {
            /*
            Pasandole laa función al componente (TRADICIONAL)
            <ClearButton manejarClic={clearInput}>Clear</ClearButton> 
            */
          }
          <ClearButton manejarClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
