import "./App.css";

// 2 - imagen em assets - mais usada
import night from "./assets/night.jpg";

function App() {
  return (
    <div className="App">
      <h1>"Avançando em React"</h1>

      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />

      {/* 2 - imagem em assets*/}
      <img src={night} alt="Outra imagem" />
    </div>
  );
}

export default App;
