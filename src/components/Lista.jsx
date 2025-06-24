function List({ items, editItem, deleteItem }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.value}
                    <button onClick={() => editItem(item)}>Editar</button>
                    <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default List;