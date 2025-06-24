import { useState, useEffect } from 'react';
import '../css_de_componentes/Form.css';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [data, setData] = useState({ nombre: '', materia: '', promedio: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setData({
        nombre: itemToEdit.nombre,
        materia: itemToEdit.materia,
        promedio: itemToEdit.promedio.toString()
      });
    } else {
      setData({ nombre: '', materia: '', promedio: '' });
    }
    setError('');
  }, [itemToEdit]);

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const validar = () => {
    if (!data.nombre.trim()) return setError('Nombre requerido'), false;
    if (!data.materia.trim()) return setError('Materia requerida'), false;
    const promedio = parseFloat(data.promedio);
    if (isNaN(promedio) || promedio < 1 || promedio > 7)
      return setError('Promedio debe estar entre 1 y 7'), false;
    return setError(''), true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validar()) return;
    addOrUpdateItem({
      nombre: data.nombre.trim(),
      materia: data.materia.trim(),
      promedio: parseFloat(data.promedio)
    });
    if (!itemToEdit) setData({ nombre: '', materia: '', promedio: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>{itemToEdit ? 'Editar' : 'Agregar'} Alumno</h2>
      {error && <div className="error-message">{error}</div>}
      <input type="text" name="nombre" placeholder="Nombre" value={data.nombre} onChange={handleChange} />
      <input type="text" name="materia" placeholder="Materia" value={data.materia} onChange={handleChange} />
      <input type="number" name="promedio" placeholder="Promedio" value={data.promedio} onChange={handleChange} min="1" max="7" step="0.1" />
      <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default Form;
