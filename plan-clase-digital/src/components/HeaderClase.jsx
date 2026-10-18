// src/components/HeaderClase.jsx
function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <header style={{ background: '#002b49', color: 'white', padding: '20px', borderRadius: '8px' }}>
      <h1>{tituloTema}</h1>
      <p>Docente: {nombreDocente}</p>
      <p>Horario: {horario}</p>
    </header>
  );
}

export default HeaderClase;
