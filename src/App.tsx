// src/App.tsx
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Texto ingresado:", inputText);
  };

  return (
    <div className="container">
      <h1>Formulario en React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe algo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
