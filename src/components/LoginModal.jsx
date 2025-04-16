import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaUser, FaLock } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    const success = onLogin(username, password);
    
    if (success) {
      // Clear the form fields
      setUsername('');
      setPassword('');
      
      navigate('/products');
    } else {
      setError('Invalid username or password');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Sign In</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">
                <FaUser className="input-icon" />
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">
                <FaLock className="input-icon" />
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-footer">
              <button type="submit" className="btn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
      
      <style jsx ="true">{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.3s ease;
        }
        
        .modal {
          background: white;
          width: 90%;
          max-width: 500px;
          border-radius: 15px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          animation: slideIn 0.4s ease;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: var(--gradient-1);
          color: white;
        }
        
        .close-button {
          background: transparent;
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
        }
        
        .modal-content {
          padding: 2rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        .input-icon {
          margin-right: 0.5rem;
          color: var(--primary);
        }
        
        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ced4da;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(58, 135, 255, 0.1);
        }
        
        .error-message {
          color: #dc3545;
          margin-bottom: 1rem;
          padding: 0.5rem;
          background: #f8d7da;
          border-radius: 5px;
          font-size: 0.9rem;
        }
        
        .form-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1.5rem;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoginModal;