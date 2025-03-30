import { useState } from "react";

const Data = () => {
  let someData = 10;

  //criando o useState - primeiro argumento e a variável, segundo argumento e a função que vai ser executada. 15 é valor inicial
  const [anoTherNumber, setAnoTherNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor:{someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor:{anoTherNumber}</p>
        <button onClick={() => setAnoTherNumber(20)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default Data;
