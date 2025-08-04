const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    return (
      <button className={`btn ${variant === 'secondary' ? 'btn-secondary' : ''} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  };
  
export default Button;