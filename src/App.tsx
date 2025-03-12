import { useState } from "react";
import "./styles/global.css";
import logo from "./assets/images/logo-megatiendas.svg"; // Asegúrate de tener el logo en /src/assets/

function App() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Texto ingresado:", inputText);
  };

  return (
    <>
      {/* Navbar fijo */}
      <nav className="navbar">
        <img src={logo} alt="Megatiendas Logo" className="logo" />
      </nav>

      {/* Contenedor del formulario */}
      <div className="container">
        <h1>Formulario en React</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Escribe algo..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default App;
