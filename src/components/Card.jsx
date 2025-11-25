import './Card.css';
const Card = ({ animal }) => {
  return (
    <div className="animal-card">
      <img 
        src={animal.image} 
        alt={animal.name}
        className="animal-image"
      />
      <div className="animal-content">
        <h2 className="animal-name">{animal.name}</h2>
        {animal.latinName && (
          <p className="animal-latin"><em>{animal.latinName}</em></p>
        )}
        <p className="animal-description">{animal.description}</p>
        {animal.habitat && (
          <p className="animal-habitat">
            <strong>Ареал обитания:</strong> {animal.habitat}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;