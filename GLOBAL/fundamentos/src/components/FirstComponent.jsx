//importando o Mycomponent, hierarquia componentes
import MyComponent from "./MyComponent";

//1 => criando o primeiro componete
const FirstComponent = () => {
  return (
    <div>
      <h2>Primeiro Componente</h2>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
