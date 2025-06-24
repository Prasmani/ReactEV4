import { useEffect, useState } from 'react';
import Form from './Form';
import List from './Lista';

function Alumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoEditando, setAlumnoEditando] = useState(null);

  useEffect(() => {
    const guardados = localStorage.getItem('alumnos');
    if (guardados) setAlumnos(JSON.parse(guardados));
  }, []);

  useEffect(() => {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos]);

  const agregarOActualizar = (alumno) => {
    if (alumnoEditando) {
      setAlumnos(alumnos.map(a => a.id === alumnoEditando.id ? { ...alumno, id: alumnoEditando.id } : a));
      setAlumnoEditando(null);
    } else {
      setAlumnos([...alumnos, { ...alumno, id: Date.now() }]);
    }
  };

  const eliminar = id => setAlumnos(alumnos.filter(a => a.id !== id));
  const editar = alumno => setAlumnoEditando(alumno);

  const apreciacion = (promedio) => {
    if (promedio >= 6.5) return 'Destacado';
    if (promedio >= 5.6) return 'Buen trabajo';
    if (promedio >= 4.0) return 'Con mejora';
    return 'Deficiente';
  };

  return (
    <>
      <h1>Evaluación de Alumnos</h1>
      <Form addOrUpdateItem={agregarOActualizar} itemToEdit={alumnoEditando} />
      <List
        items={alumnos}
        editItem={editar}
        deleteItem={eliminar}
        calcularApreciacion={apreciacion}
      />
    </>
  );
}

export default Alumnos;
