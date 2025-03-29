import React from "react";

function Events() {
  //aqui fica as funções
  const handlelick = (evento) => {
    console.log(evento);
    console.log("Testando o onClick");
  };
  /* ------------------------------------------------------------ */

  // 8- função de rendenização
  const renderSomething = (/*argumento*/ argumento) => {
    if (argumento) {
      return <h1>Rendenizando isso!!</h1>;
    } else {
      return <h1>Render outra coisa</h1>;
    }
  };
  /* ------------------------------------------------------------ */

  return (
    <div>
      <div>
        {/* forma mais simples de fazer um evento */}
        <button onClick={() => console.log("Testando o onClick")}>
          Clique aqui
        </button>
      </div>

      <div>
        {/*  evento com função*/}
        <button onClick={handlelick}>Clique aqui - com função</button>
      </div>

      {/* 8- funcao de rendenização */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
}

export default Events;
