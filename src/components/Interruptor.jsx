import { useState } from "react";

const Interruptor = () => {
  const [estado, setEstado] = useState(false);

  const estilos = {
    textAlign: "center",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: estado ? "#FFD700" : "#2C3E50",
    color: estado ? "#000" : "#FFF",
    transition: "0.5s",
  };

  return (
    <div style={estilos}>
      <h2>{estado ? "☀️ Día" : "🌙 Noche"}</h2>
      <button 
        onClick={() => setEstado(!estado)} 
        style={{ margin: "10px", padding: "12px", borderRadius: "5px" }}
      >
        {estado ? "Apagar" : "Encender"}
      </button>
    </div>
  );
};

export default Interruptor;