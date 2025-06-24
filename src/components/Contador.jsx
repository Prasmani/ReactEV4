import { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  const estilos = {
    textAlign: "center",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#3498db",
    color: "#fff",
    transition: "0.3s",
  };

  const boton = {
    margin: "10px",
    padding: "12px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#2980b9",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={estilos}>
      <h2>Contador: {count}</h2>
      <button style={boton} onClick={() => setCount(count + 1)}>+1</button>
      <button style={boton} onClick={() => setCount(count - 1)}>-1</button>
      <button style={boton} onClick={() => setCount(0)}>Resetear</button>
    </div>
  );
};

export default Contador;
