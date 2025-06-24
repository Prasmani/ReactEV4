// Importa los hooks de React: useState para el estado y useEffect para efectos secundarios
import { useState, useEffect } from 'react';

// Componente funcional 'Form' que recibe dos props:
// - addOrUpdateItem: función para agregar o actualizar un ítem
// - itemToEdit: ítem que se quiere editar (si existe)
function Form({ addOrUpdateItem, itemToEdit }) {
    // Estado para guardar el texto ingresado en el input
    const [inputValue, setInputValue] = useState('');

    // useEffect se ejecuta cuando cambia 'itemToEdit'
    useEffect(() => {
        if (itemToEdit) {
            // Si hay un ítem para editar, se carga su valor en el input
            setInputValue(itemToEdit.value);
        } else {
            // Si no hay ítem para editar, se limpia el input
            setInputValue('');
        }
    }, [itemToEdit]);

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita recargar la página
        addOrUpdateItem(inputValue); // Llama a la función que agrega o actualiza
        setInputValue(''); // Limpia el input después de enviar
    };

    return (
        // Formulario con función handleSubmit al enviar
        <form onSubmit={handleSubmit}>
            {/* Campo de texto controlado */}
            <input
                type="text"
                placeholder="Ingrese texto"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado al escribir
            />
            {/* Botón que cambia de texto si estamos editando o agregando */}
            <button type="submit">
                {itemToEdit ? 'Actualizar' : 'Agregar'}
            </button>
        </form>
    )
}

// Exporta el componente para poder usarlo en otros archivos
export default Form;
