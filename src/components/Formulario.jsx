import { useState } from "react";
import "./../styles/Formulario.css"; // Importamos estilos

const Formulario = () => {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Texto ingresado:", texto);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Escribe algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
