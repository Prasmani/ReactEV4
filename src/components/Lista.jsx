import '../css_de_componentes/Lista.css';
function List({ items, editItem, deleteItem, calcularApreciacion }) {
    const getColor = (p) => {
      if (p >= 6.5) return 'destacado';
      if (p >= 5.6) return 'buen-trabajo';
      if (p >= 4.0) return 'con-mejora';
      return 'deficiente';
    };
  
    if (!items.length) return <p>No hay alumnos registrados.</p>;
  
    return (
      <ul className="alumnos-list">
        {items.map(({ id, nombre, materia, promedio }) => (
          <li key={id} className="alumno-item">
            <h3>{nombre}</h3>
            <p><strong>Materia:</strong> {materia}</p>
            <p><strong>Promedio:</strong> <span className={getColor(promedio)}>{promedio.toFixed(1)}</span></p>
            <p><strong>Apreciación:</strong> <span className={getColor(promedio)}>{calcularApreciacion(promedio)}</span></p>
            <button onClick={() => editItem({ id, nombre, materia, promedio })}>Editar</button>
            <button onClick={() => deleteItem(id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default List;
  