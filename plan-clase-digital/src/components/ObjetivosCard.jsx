// src/components/ObjetivosCard.jsx
function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginTop: '10px', borderRadius: '6px' }}>
      <h3>Competencia: {competencia}</h3>
      <p>Indicador de logro: {indicadorLogro}</p>
    </div>
  );
}

export default ObjetivosCard;
