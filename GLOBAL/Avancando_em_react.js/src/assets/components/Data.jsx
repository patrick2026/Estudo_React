import { useState } from "react";

const Data = () => {
  //1° ⇒ o estado onde vou guardar onde vai armazenados meu conteudo
  //2° ⇒ função que atualiza o estado dele
  // Estado inicial = 15
  const [anoTherNumber, setAnoTherNumber] = useState(15);

  // Função que alterna entre 15 e 20
  const toggleNumber = () => {
    if (anoTherNumber === 15) {
      setAnoTherNumber(20); // Muda para 20 se era 15
    } else {
      setAnoTherNumber(15); // Volta para 15 se era 20
    }
  };

  return (
    <div>
      <div>
        <p>Valor: {anoTherNumber}</p>
        <button onClick={toggleNumber}>Alternar Valor</button>
      </div>
    </div>
  );
};

export default Data;
