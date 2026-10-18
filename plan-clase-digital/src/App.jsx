// src/App.jsx
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
  const nombreProfesor = "Ing. Kevin Brolo";
  const cursoActual = "Programación de Aplicaciones Web";

  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '30px', textAlign: 'center' }}>
      {/* Encabezado principal */}
      <HeaderClase
        tituloTema="Programación de Aplicaciones Web"
        nombreDocente={nombreProfesor}
        horario="Viernes 8:00 - 10:00"
      />

      {/* Mensaje de bienvenida */}
      <h2 style={{ marginTop: '20px', color: '#0f4c81' }}>
        ¡Bienvenidos al módulo de componentes en React!
      </h2>

      {/* Bloque de metas */}
      <ObjetivosCard
        competencia="Desarrolla componentes modulares en React"
        indicadorLogro="Implementa props y hooks para crear interfaces dinámicas"
      />

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
