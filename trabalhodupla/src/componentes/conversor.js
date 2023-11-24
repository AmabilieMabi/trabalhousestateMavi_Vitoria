import React, {useState} from 'react';

function Conversor(){
    const[real, SetReal]= useState('');
    const[resultado, SetResultado]= useState(null);
    const Conversor = () =>{  
        const resultado = (Number(real) / 5,22 ) ;
    SetResultado(resultado);
       
    };

 
    return(
        <div> 
            <input type="number"
            value={real}
            onChange={(e) => SetReal(e.target.value)}
            placeholder= " Digite o valor em real:" 
            />

        


              <button onClick={Conversor}> Calcular Media</button>
              {resultado !==null && <p> Resultado:{resultado}</p>}
              
        </div> 
         );
}

export default Conversor;