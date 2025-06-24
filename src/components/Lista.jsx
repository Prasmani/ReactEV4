// Componente funcional llamado 'List' que recibe tres props:
// - items: arreglo de objetos con al menos id y value
// - editItem: función para editar un ítem
// - deleteItem: función para eliminar un ítem
function List({ items, editItem, deleteItem }) {
    return (
        // Renderiza una lista sin orden (<ul>)
        <ul>
            {/* Itera sobre cada elemento del arreglo 'items' */}
            {items.map((item) => (
                // Cada <li> necesita una key única, aquí usamos item.id
                <li key={item.id}>
                    {/* Muestra el valor del ítem */}
                    {item.value}

                    {/* Botón que ejecuta la función 'editItem' pasando el objeto completo */}
                    <button onClick={() => editItem(item)}>Editar</button>

                    {/* Botón que ejecuta 'deleteItem' pasando solo el id del ítem */}
                    <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

// Exporta el componente para poder usarlo en otros archivos
export default List;
