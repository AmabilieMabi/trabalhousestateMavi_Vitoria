import './App.css';
import React, {useState} from 'react';
import Conversor from './componentes/conversor';

function App() {
  const[contador, setContador] = useState(0);
  return (
  <div className="App">
   <h1> Conversor de Real para Dólar </h1>
   <Conversor/>

    </div>
  );
}

export default App ;
