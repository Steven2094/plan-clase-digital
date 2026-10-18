import { useState } from 'react';

function ActividadItem({ titulo, tiempo, tipo }) {
  const [completada, setCompletada] = useState(false);

  return (
    <div
      style={{
        border: '1px solid #cbd5e1',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '10px',
        background: completada ? '#d4edda' : '#f8fafc',
      }}
    >
      <span
        style={{
          background: '#0ea5e9',
          color: 'white',
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '0.8em',
        }}
      >
        {tipo}
      </span>
      <h4 style={{ margin: '8px 0 4px 0', color: '#0f172a' }}>{titulo}</h4>
      <p style={{ margin: 0, fontSize: '0.85em', color: '#64748b' }}>
        Duración: {tiempo}
      </p>
      <button
        onClick={() => setCompletada(!completada)}
        style={{
          marginTop: '10px',
          padding: '6px 12px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: completada ? '#198754' : '#dc3545',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        {completada ? 'Marcar como pendiente' : 'Marcar como completada'}
      </button>
    </div>
  );
}

export default ActividadItem;
