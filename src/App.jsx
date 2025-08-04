import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import './styles/globals.css';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated from local storage
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'Password') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div className="app">
        <Navbar 
          openLoginModal={() => setIsLoginModalOpen(true)} 
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
        />
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
          onLogin={handleLogin}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home openLoginModal={() => setIsLoginModalOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route 
              path="/products" 
              element={isAuthenticated ? <Products /> : <Navigate to="/" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;