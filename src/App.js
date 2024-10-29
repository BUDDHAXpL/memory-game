import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { useState, useEffect } from 'react';

function App(){
  const simbolos =
  [
   '🌆','🌄','🌃','✈','🛫','🛬','🚁','🛰','🌍',
   '🌝','🌤','⚡','❤','💖','💞','🕳','⚽','🎱' 
  ]
  ;
  const cartaslniciais = [...simbolos , ...simbolos].sort(()=> Math.random()-0.5);

  const [cartas,setCartas] = useState(cartaslniciais );
  const [indicesVirados , setindicesVirados ] = useState([]);
  const [cartasCombinadas , setCartasCombinadas ] = useState ([]);
    
  const virarCarta = (indice) => {
  if(
  (indicesVirados.length <2)
  &&
  (!indicesVirados.includes (indice ))
  &&
  (!cartasCombinadas.includes (indice ))
  ){
  setindicesVirados ([...indicesVirados , indice]);
  }
};

useEffect(()=>{
  if (indicesVirados.length ===2){ 
    const [primeirolndice , segundolndice ] = indicesVirados ;
    if (cartas[primeirolndice ] == cartas[segundolndice ]){
      setCartasCombinadas ([...cartasCombinadas , primeirolndice , segundolndice ]);
    }
 setTimeout(() => setindicesVirados ([]), 1000 );
  }
},[indicesVirados, cartas, cartasCombinadas]);

return(
   <div className="w-100 vh-100 d-flex flex-wrap bg-light">
    <div className="container">
      <div className="row">
        {cartas.map((carta, indice)=>(
          <div key={indice} className="col-2 p-2">
            <button
            className="carta btn btn -light w-100 h-100"
            onClick={()=>virarCarta(indice)}
             disabled={cartasCombinadas.includes(indice)}>
            
              {indicesVirados.includes(indice)|| cartasCombinadas.includes(indice)?carta : "❓"}
             </button>
             </div>
        ))}
      </div>
    </div>
    </div>
);
}

export default App;                       











