const Card = ({ icon, title, description, className = '' }) => {
    return (
      <div className={`card ${className}`}>
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        
        <style jsx = "true">{`
          .card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
          }
          
          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          }
          
          .card-icon {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: var(--primary);
          }
          
          .card h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }
          
          .card p {
            color: #6c757d;
            line-height: 1.7;
          }
        `}</style>
      </div>
    );
  };

export default Card;