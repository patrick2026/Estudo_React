//2 importando componente do FirstComponent
import FirstComponent from "./components/FirstComponent";

//template expression
import TemplateExpression from "./components/TemplateExpression";

//importando o Mycomponent, hierarquia componentes
import MyComponent from "./components/MyComponent";

// eventos
import Events from "./components/Events";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>"Fundamentos do React"</h1>
      <TemplateExpression />
      <FirstComponent />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
