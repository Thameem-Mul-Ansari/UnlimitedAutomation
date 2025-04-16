import { useState } from 'react';

const ServiceCard = ({ title, description, icon, features = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`service-card ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="service-card-content">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        
        {isOpen && features.length > 0 && (
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="expand-indicator">
        {isOpen ? '−' : '+'}
      </div>
      
      <style jsx = "true">{`
        .service-card {
          position: relative;
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: var(--shadow);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .service-card.open {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .service-card-content {
          padding-right: 1.5rem;
        }
        
        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        
        .service-card h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .service-card p {
          color: #6c757d;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        
        .expand-indicator {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          background: var(--gradient-1);
          color: white;
          border-radius: 50%;
        }
        
        .features-list {
          margin-top: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .features-list li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;