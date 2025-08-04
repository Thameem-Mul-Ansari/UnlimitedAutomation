import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';

const Navbar = ({ openLoginModal, isAuthenticated, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <BsLightningChargeFill />
          </div>
          <span className="logo-text">Unlimited Automation</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              Services
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
                Products
              </Link>
            </li>
          )}
          <li>
            {isAuthenticated ? (
              <button className="btn1 btn-logout" onClick={handleLogout}>
                Log Out
              </button>
            ) : (
              <button className="btn1 btn-login" onClick={openLoginModal}>
                Get Started
              </button>
            )}
          </li>
        </ul>
      </div>
      
      <style jsx = "true">{`
        :root {
          --primary-blue: #0078d4;
          --primary-purple: #5c2d91;
          --secondary-blue: #50e6ff;
          --gradient-bg: linear-gradient(135deg, #f0f6ff 0%, #f4eeff 100%);
          --gradient-primary: linear-gradient(135deg, #0078d4 0%, #5c2d91 100%);
          --gradient-button: linear-gradient(135deg, #5c2d91 0%, #0078d4 100%);
          --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          --navbar-height: 80px; /* Fixed navbar height */
        }
        
        .navbar {
          position: fixed; /* Changed from sticky to fixed */
          top: 0;
          left: 0;
          right: 0;
          height: var(--navbar-height);
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(92, 45, 145, 0.15);
          border-bottom: 1px solid rgba(0, 120, 212, 0.15);
        }
        
        .navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(92, 45, 145, 0.2);
          height: var(--navbar-height); /* Keep height consistent when scrolled */
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 0 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .navbar-logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-purple);
          transition: all 0.3s ease;
        }
        
        .navbar-logo:hover {
          transform: translateY(-2px);
        }
        
        .logo-icon {
          margin-right: 0.7rem;
          font-size: 1.8rem;
          color: var(--primary-blue);
          background: white;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 120, 212, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .logo-icon::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 120, 212, 0.1) 0%, rgba(92, 45, 145, 0.1) 100%);
          z-index: -1;
        }
        
        .logo-icon::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--gradient-primary);
        }
        
        .logo-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .navbar-menu {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          height: 100%;
        }
        
        .navbar-menu li {
          margin-left: 2rem;
          height: 100%;
          display: flex;
          align-items: center;
        }
        
        .navbar-menu a {
          font-weight: 600;
          position: relative;
          transition: all 0.3s;
          color: #333;
          text-decoration: none;
          padding: 0.5rem 0;
          font-size: 1rem;
          letter-spacing: 0.3px;
        }
        
        .navbar-menu a:hover {
          color: var(--primary-purple);
        }
        
        .navbar-menu a.active {
          color: var(--primary-blue);
        }
        
        .navbar-menu a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--gradient-primary);
          border-radius: 5px;
          transition: width 0.3s ease;
        }
        
        .navbar-menu a:hover::after {
          width: 100%;
        }
        
        .navbar-menu a.active::after {
          width: 100%;
        }
        
        .btn1 {
          padding: 0.6rem 1.5rem;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }
        
        .btn-login {
          background: var(--gradient-button);
          color: white;
          box-shadow: 0 4px 10px rgba(92, 45, 145, 0.25);
          position: relative;
          overflow: hidden;
        }
        
        .btn-login::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 0.6s ease;
        }
        
        .btn-login:hover::before {
          left: 100%;
        }
        
        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(92, 45, 145, 0.35);
        }
        
        .btn-logout {
          background: white;
          color: var(--primary-purple);
          border: 2px solid var(--primary-purple);
          box-shadow: 0 2px 8px rgba(92, 45, 145, 0.15);
        }
        
        .btn-logout:hover {
          background: rgba(92, 45, 145, 0.05);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(92, 45, 145, 0.2);
        }
        
        .menu-icon {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--primary-purple);
        }
        
        @media (max-width: 768px) {
          .menu-icon {
            display: block;
            z-index: 2000;
          }
          
          .navbar-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 75%;
            height: 100vh;
            flex-direction: column;
            justify-content: center;
            background: white;
            box-shadow: -5px 0 20px rgba(92, 45, 145, 0.15);
            transition: all 0.4s ease;
            z-index: 1500;
          }
          
          .navbar-menu.active {
            right: 0;
          }
          
          .navbar-menu li {
            margin: 1.5rem 0;
            text-align: center;
            height: auto;
          }
          
          .navbar-menu a::after {
            bottom: -8px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;