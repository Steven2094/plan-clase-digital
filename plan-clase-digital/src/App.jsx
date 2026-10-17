// src/App.jsx
import ActividadItem from './components/ActividadItem';

function App() {
  const nombreProfesor = "Ing. Kevin Brolo";
  const cursoActual = "Programación de Aplicaciones Web";

  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '30px', textAlign: 'center' }}>
      {/* Encabezado principal */}
      <header style={{ background: '#002b49', color: 'white', padding: '20px', borderRadius: '8px' }}>
        <h1>Plan de Clase Digital Interactivo</h1>
        <p>Docente: {nombreProfesor} | Curso: {cursoActual}</p>
      </header>

      {/* Mensaje de bienvenida */}
      <h2 style={{ marginTop: '20px', color: '#0f4c81' }}>
        ¡Bienvenidos al módulo de componentes en React!
      </h2>

      {/* Bloque de actividades */}
      <main style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#0f4c81' }}>Secuencia Didáctica - Plan de Clase</h3>
        <ActividadItem titulo="Trivia Rápida Interactiva" tiempo="5 minutos" tipo="Diagnóstica" />
        <ActividadItem titulo="Taller Guiado de Componentes" tiempo="25 minutos" tipo="Construcción" />
        <ActividadItem titulo="Pruebas de Estado con useState" tiempo="25 minutos" tipo="Aplicación" />
      </main>
    </div>
  );
}

export default App;
