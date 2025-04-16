import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, FaDatabase, FaDesktop, FaCloud, FaMobile, 
  FaChartBar, FaClipboardList, FaHandshake, FaStar, FaUsers,
  FaArrowRight, FaCheck, FaAngleDown, FaAngleUp, FaLightbulb,
  FaPlay, FaSearch, FaFilter, FaHeart, FaPlus
} from 'react-icons/fa';
import axios from 'axios';

// Enhanced Modal Component
const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" style={{ background: product.gradient }}>
          <div className="modal-icon">{product.icon}</div>
          <h2>{product.name}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">{product.description}</p>
          
          <div className="modal-features">
            <h3>Key Features</h3>
            <ul>
              {[
                "Automated workflow execution",
                "Seamless system integration",
                "Real-time monitoring and analytics",
                "Custom action triggers",
                "Error handling and recovery"
              ].map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <FaCheck className="feature-icon" /> {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="modal-stats">
            <div className="stat-box">
              <span className="stat-value">99.8%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">85%</span>
              <span className="stat-label">Time Saved</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">45%</span>
              <span className="stat-label">Cost Reduction</span>
            </div>
          </div>
          
          <div className="modal-actions">
            <button className="btn btn-primary modal-trigger">
              <FaPlay className="btn-icon-left" /> Trigger Flow Now
            </button>
            <button className="btn btn-secondary">
              <FaPlus className="btn-icon-left" /> Add to Favorites
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Accordion Component
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="accordion-item">
      <motion.div 
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: '#f5f9ff' }}
      >
        <h4>{title}</h4>
        <div className="accordion-icon">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="accordion-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Enhanced Hero Section with Animated Elements
const EnhancedHero = () => {
  const [animateRobot, setAnimateRobot] = useState(false);
  
  // Add interactive animation when hovering over robot
  const handleRobotInteraction = () => {
    setAnimateRobot(true);
    setTimeout(() => setAnimateRobot(false), 1500);
  };
  
  return (
    <section className="products-hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left side content */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaRobot className="badge-icon" /> Enterprise Automation Hub
            </motion.span>
            
            <motion.h1 
              className="gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover & Deploy <br/>
              <span className="text-highlight">Powerful Automation</span> Flows
            </motion.h1>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Browse our catalog of ready-to-use RPA solutions that streamline workflows, 
              eliminate repetitive tasks, and transform your business operations.
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Automation Flows</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">60%</span>
                <span className="stat-label">Time Saved</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="btn btn-primary btn-large">
                Explore Solutions <FaArrowRight className="btn-icon" />
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right side graphics */}
          <div className="hero-graphics">
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onClick={handleRobotInteraction}
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated abstract robot illustration */}
              <svg className="robot-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Head */}
                <motion.rect 
                  x="70" y="50" width="60" height="60" rx="10" 
                  fill="#4285f4"
                  animate={{ 
                    y: animateRobot ? [50, 30, 50] : 50,
                    opacity: animateRobot ? [0.8, 1, 0.8] : 0.8,
                    fill: animateRobot ? ["#4285f4", "#34a853", "#4285f4"] : "#4285f4"
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.5 : 3,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Eyes */}
                <motion.circle 
                  cx="85" cy="70" r="6" 
                  fill="#ffffff"
                  animate={{ 
                    opacity: animateRobot ? [1, 0, 1, 0, 1] : [1, 0.5, 1],
                    r: animateRobot ? 8 : 6
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.3 : 2,
                    ease: "easeInOut" 
                  }}
                />
                <motion.circle 
                  cx="115" cy="70" r="6" 
                  fill="#ffffff"
                  animate={{ 
                    opacity: animateRobot ? [1, 0, 1, 0, 1] : [1, 0.5, 1],
                    r: animateRobot ? 8 : 6
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.3 : 2,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* Mouth */}
                <motion.rect 
                  x="85" y="90" width="30" height="5" rx="2.5" 
                  fill="#ffffff"
                  animate={{ 
                    width: animateRobot ? 40 : 30,
                    x: animateRobot ? 80 : 85
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.5 : 5,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Arms */}
                <motion.line 
                  x1="70" y1="110" x2="70" y2="120" 
                  stroke="#1a73e8"
                  strokeWidth="4"
                  animate={{ 
                    y1: animateRobot ? 95 : 110,
                    y2: animateRobot ? 105 : 120
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.3 : 3,
                    ease: "easeInOut" 
                  }}
                />
                <motion.line 
                  x1="130" y1="110" x2="130" y2="120" 
                  stroke="#1a73e8" 
                  strokeWidth="4"
                  animate={{ 
                    y1: animateRobot ? 95 : 110,
                    y2: animateRobot ? 105 : 120
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.3 : 3,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Legs */}
                <motion.rect 
                  x="55" y="160" width="15" height="30" rx="5" 
                  fill="#fbbc05"
                  animate={{ 
                    rotate: animateRobot ? 30 : 0,
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.5 : 5,
                    ease: "easeInOut" 
                  }}
                  style={{ transformOrigin: '60px 150px' }}
                />
                <motion.rect 
                  x="130" y="160" width="15" height="30" rx="5" 
                  fill="#fbbc05"
                  animate={{ 
                    rotate: animateRobot ? -30 : 0,
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.5 : 5,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  style={{ transformOrigin: '140px 150px' }}
                />
                
                {/* Feet */}
                <motion.circle 
                  cx="70" cy="185" r="6" 
                  fill="#ea4335"
                  animate={{ 
                    opacity: animateRobot ? 1 : 0.8,
                    r: animateRobot ? 8 : 6
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.3 : 2,
                    ease: "easeInOut" 
                  }}
                />
                <motion.circle 
                  cx="130" cy="185" r="6" 
                  fill="#ea4335"
                  animate={{ 
                    opacity: animateRobot ? 1 : 0.8,
                    r: animateRobot ? 8 : 6
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: animateRobot ? 0.3 : 2,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </svg>
              
              {/* Floating elements */}
              <motion.div 
                className="floating-element element-1"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.1, backgroundColor: "#e8f0fe" }}
              >
                <FaDatabase className="icon" />
                <span>Data Integration</span>
              </motion.div>
              
              <motion.div 
                className="floating-element element-2"
                animate={{ 
                  y: [10, -5, 10],
                  rotate: [0, -3, 0, 3, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 7,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{ scale: 1.1, backgroundColor: "#e8f0fe" }}
              >
                <FaDesktop className="icon" />
                <span>Process Automation</span>
              </motion.div>
              
              <motion.div 
                className="floating-element element-3"
                animate={{ 
                  y: [5, -8, 5],
                  rotate: [0, 3, 0, -3, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.1, backgroundColor: "#e8f0fe" }}
              >
                <FaCloud className="icon" />
                <span>Cloud Integration</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-shape shape-3"
              animate={{ 
                scale: [1.5, 1.8, 1.5],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut",
                delay: 0.5
              }}
            ></motion.div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG separator */}
      <div className="wave-separator">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            d="M0,0 C240,95 480,100 720,80 C960,60 1200,40 1440,80 L1440,100 L0,100 Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

// Status Indicator Component
const StatusIndicator = ({ status }) => {
  const statusColors = {
    'active': '#34a853',
    'maintenance': '#fbbc05',
    'new': '#4285f4'
  };
  
  return (
    <div className="status-indicator" style={{ backgroundColor: statusColors[status] || '#9aa0a6' }}>
      {status}
    </div>
  );
};

// Enhanced Product Card
const ProductCard = ({ product, onTriggerFlow, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTriggering, setIsTriggering] = useState(false);
  const [triggerStatus, setTriggerStatus] = useState(null);

  const handleTriggerFlow = async () => {
    setIsTriggering(true);
    setTriggerStatus(null);
    
    try {
      const response = await axios.post(
        'https://trigger-flows.onrender.com/trigger-flow', 
        { product_id: product.id },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      setTriggerStatus({
        success: response.data.success,
        message: response.data.success 
          ? `${product.name} flow triggered successfully!` 
          : `Failed to trigger flow: ${response.data.error}`,
        details: response.data
      });
      
      if (response.data.success) {
        alert(`Flow for ${product.name} triggered successfully!\nStatus: ${response.data.status_code}`);
      } else {
        alert(`Error: ${response.data.error}\n${response.data.details}`);
      }
      
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      setTriggerStatus({
        success: false,
        message: `Failed to trigger ${product.name} flow`,
        details: errorMessage
      });
      
      alert(`Error triggering ${product.name}:\n${errorMessage}`);
    } finally {
      setIsTriggering(false);
    }
  };

  return (
    <motion.div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div 
        className="product-header"
        style={{ background: product.gradient }}
      >
        <div className="product-icon">{product.icon}</div>
        <StatusIndicator status={product.status || 'active'} />
        <h3>{product.name}</h3>
      </div>
      <div className="product-content">
        <p>{product.description}</p>
        
        <div className="product-meta">
          <div className="product-tags">
            <span className="tag">{product.category}</span>
            {product.isPopular && <span className="tag tag-popular">Popular</span>}
          </div>
          
          <div className="product-stats">
            <div className="mini-stat">
              <span className="mini-stat-value">98%</span>
              <span className="mini-stat-label">Success</span>
            </div>
            <div className="mini-stat">
              <span className="mini-stat-value">4.9</span>
              <span className="mini-stat-label">Rating</span>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="card-actions"
              key="card-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
            <button 
              onClick={handleTriggerFlow}
              disabled={isTriggering}
              className={`btn ${isTriggering ? 'btn-loading' : 'btn-trigger'}`}
            >
            {isTriggering ? (
              <span>Triggering...</span>
            ) : (
              <>
                <FaPlay className="btn-icon" /> Trigger Flow
              </>
            )}
          </button>
          
          <button 
            onClick={() => onViewDetails(product)}
            className="btn btn-details"
          >
            Details
          </button>
            </motion.div>
          )}

          {triggerStatus && (
            <motion.div
              key="trigger-status" // Add unique key
              className={`trigger-status ${triggerStatus.success ? 'success' : 'error'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {triggerStatus.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Products Component
const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('popular');
  const [favorites, setFavorites] = useState([]);

  const tabs = [
    { id: 'all', label: 'All Products', icon: <FaStar /> },
    { id: 'tools', label: 'Automation Tools', icon: <FaDesktop /> },
    { id: 'solutions', label: 'Industry Solutions', icon: <FaClipboardList /> },
    { id: 'platforms', label: 'Platforms', icon: <FaCloud /> }
  ];
  
  const products = [
    {
      id: 'flow_01',
      name: 'TaskBot Pro',
      description: 'Desktop automation solution for streamlining repetitive tasks and workflows.',
      category: 'tools',
      status: 'active',
      isPopular: true,
      icon: <FaDesktop />,
      gradient: 'linear-gradient(135deg, #4285f4, #1a73e8)'
    },
    {
      id: 'flow_02',
      name: 'DataSync',
      description: 'Data integration platform for automating data flows between systems and applications.',
      category: 'tools',
      status: 'active',
      icon: <FaDatabase />,
      gradient: 'linear-gradient(135deg, #34a853, #2e7d32)'
    },
    {
      id: 'flow_03',
      name: 'CloudBot',
      description: 'Cloud-based RPA platform for enterprise-wide automation deployment.',
      category: 'platforms',
      status: 'maintenance',
      icon: <FaCloud />,
      gradient: 'linear-gradient(135deg, #4285f4, #0d47a1)'
    },
    {
      id: 'flow_04',
      name: 'MobileBot',
      description: 'Mobile automation solution for iOS and Android applications.',
      category: 'tools',
      status: 'new',
      isPopular: true,
      icon: <FaMobile />,
      gradient: 'linear-gradient(135deg, #fbbc05, #f57c00)'
    },
    {
      id: 'flow_05',
      name: 'FinanceBot Suite',
      description: 'Specialized RPA solution for finance and accounting processes.',
      category: 'solutions',
      status: 'active',
      icon: <FaChartBar />,
      gradient: 'linear-gradient(135deg, #ea4335, #c62828)'
    },
    {
      id: 'flow_06',
      name: 'HR Automation Suite',
      description: 'End-to-end HR process automation solution for mid to large enterprises.',
      category: 'solutions',
      status: 'active',
      icon: <FaUsers />,
      gradient: 'linear-gradient(135deg, #34a853, #1b5e20)'
    },
    {
      id: 'flow_07',
      name: 'ProcessIQ',
      description: 'Process intelligence platform for discovering and optimizing automation opportunities.',
      category: 'platforms',
      status: 'new',
      isPopular: true,
      icon: <FaClipboardList />,
      gradient: 'linear-gradient(135deg, #4285f4, #7986cb)',
    },
    {
      id: 'flow_08',
      name: 'CustomerBot',
      description: 'Customer service automation platform for enhanced customer experience.',
      category: 'solutions',
      status: 'active',
      icon: <FaHandshake />,
      gradient: 'linear-gradient(135deg, #fbbc05, #ff9800)'
    }
  ];
  
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);
    
  const searchedProducts = searchTerm
    ? filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredProducts;
  
  // Sort products
  const sortedProducts = [...searchedProducts].sort((a, b) => {
    switch(sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popular':
        return b.isPopular ? 1 : -1;
      case 'new':
        return b.status === 'new' ? 1 : -1;
      default:
        return 0;
    }
  });
  
  const handleTriggerFlow = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    // Here you would typically call your API to trigger the flow
    console.log(`Triggering flow for ${product.name}`);
  };
  
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <div className="products-page">
      {/* Embedded CSS Styles */}
      <style jsx ="true">{`
        /* Variables */
        :root {
          --primary-color: #4285f4;
          --primary-dark: #1a73e8;
          --secondary-color: #34a853;
          --accent-color: #fbbc05;
          --danger-color: #ea4335;
          --text-dark: #202124;
          --text-medium: #5f6368;
          --text-light: #9aa0a6;
          --bg-light: #f8f9fa;
          --bg-medium: #f1f3f4;
          --border-color: #dadce0;
          --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          --shadow-hover: 0 10px 25px rgba(0, 0, 0, 0.15);
          --radius: 12px;
          --transition: all 0.3s ease;
        }
        
        /* General Layout */
        .products-page {
          font-family: 'Google Sans', 'Roboto', Arial, sans-serif;
          color: var(--text-dark);
          overflow-x: hidden;
          background-color: var(--bg-light);
        }
        
        .products-section {
          background: white;
          position: relative;
          z-index: 10;
          padding-bottom: 80px;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section {
          padding: 80px 0;
          position: relative;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }
        
        .section-header h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--text-dark);
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .section-header p {
          font-size: 18px;
          color: var(--text-medium);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .header-accent {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          margin: 15px auto 20px;
          border-radius: 2px;
        }
        
        /* Hero Section */
        .products-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 120px 0 100px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(66, 133, 244, 0.1);
          border-radius: 30px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
          color: var(--primary-color);
        }
        
        .badge-icon {
          margin-right: 8px;
          font-size: 16px;
          color: var(--primary-color);
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
        }
        
        .hero-content h1 {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--text-dark);
        }
        
        .text-highlight {
          position: relative;
          display: inline-block;
          color: var(--primary-color);
        }
        
        .text-highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(66, 133, 244, 0.2);
          z-index: -1;
          border-radius: 4px;
        }
        
        .hero-description {
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-medium);
          margin-bottom: 30px;
          max-width: 540px;
        }
        
        .hero-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: var(--radius);
          padding: 15px;
          min-width: 110px;
          box-shadow: var(--shadow);
        }
        
        .stat-number {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 14px;
          color: var(--text-medium);
        }
        
        .hero-cta {
          display: flex;
          gap: 15px;
        }
        
        .hero-graphics {
          position: relative;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
       
        .hero-image {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 400px;
        }
       
        .robot-svg {
          width: 100%;
          height: 100%;
        }
       
        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          padding: 12px 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
          backdrop-filter: blur(5px);
          color:black;
        }
       
        .floating-element .icon {
          font-size: 24px;
          color: var(--primary-color);
        }
       
        .floating-element span {
          font-weight: 500;
          font-size: 14px;
        }
       
        .element-1 {
          top: 20%;
          left: 0;
        }
       
        .element-2 {
          top: 60%;
          right: 0;
        }
       
        .element-3 {
          bottom: 10%;
          left: 10%;
        }
       
        .bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.3;
          z-index: 1;
        }
       
        .shape-1 {
          width: 250px;
          height: 250px;
          background: var(--accent-color);
          top: -50px;
          right: 20%;
        }
       
        .shape-2 {
          width: 180px;
          height: 180px;
          background: var(--secondary-color);
          bottom: 0;
          right: 30%;
        }
       
        .shape-3 {
          width: 300px;
          height: 300px;
          background: var(--primary-color);
          top: 20%;
          left: 10%;
        }
        
        .wave-separator {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        
        .wave-separator svg {
          width: 100%;
          height: 100px;
          display: block;
        }
        
        /* Product Filter Section */
        .product-filters {
          background: white;
          padding: 20px;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          margin-bottom: 40px;
        }
        
        .filter-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 20px;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .filter-tabs::-webkit-scrollbar {
          display: none;
        }
        
        .filter-tab {
          padding: 10px 20px;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-medium);
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: var(--transition);
          display: flex;
          align-items: center;
          white-space: nowrap;
        }
        
        .filter-tab.active {
          color: var(--primary-color);
          border-bottom-color: var(--primary-color);
        }
        
        .filter-tab svg {
          margin-right: 8px;
          font-size: 16px;
        }
        
        .filter-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }
        
        .search-box {
          position: relative;
          flex: 1;
          min-width: 250px;
        }
        
        .search-box input {
          width: 100%;
          padding: 10px 15px 10px 40px;
          border: 1px solid var(--border-color);
          border-radius: 30px;
          font-size: 15px;
          transition: var(--transition);
        }
        
        .search-box input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.2);
        }
        
        .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
        }
        
        .filter-controls {
          display: flex;
          gap: 15px;
        }
        
        .view-toggle {
          display: flex;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
        }
        
        .view-toggle button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: white;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .view-toggle button.active {
          background: var(--primary-color);
          color: white;
        }
        
        .sort-dropdown {
          position: relative;
        }
        
        .sort-dropdown .sort-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .sort-dropdown .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          z-index: 20;
          width: 180px;
          background: white;
          border-radius: 8px;
          box-shadow: var(--shadow);
          overflow: hidden;
          margin-top: 5px;
        }
        
        .sort-dropdown .dropdown-item {
          padding: 10px 15px;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
        }
        
        .sort-dropdown .dropdown-item:hover {
          background: var(--bg-medium);
        }
        
        .sort-dropdown .dropdown-item.active {
          background: var(--bg-medium);
          color: var(--primary-color);
          font-weight: 500;
        }
        
        /* Product Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }
        
        .products-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        /* Product Card */
        .product-card {
          background: white;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          cursor: pointer;
          height: 100%;
        }
        
        .product-card:hover {
          box-shadow: var(--shadow-hover);
        }
        
        .product-header {
          padding: 20px;
          position: relative;
          color: white;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .product-icon {
          font-size: 24px;
          margin-bottom: 15px;
        }
        
        .status-indicator {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          color: white;
        }
        
        .product-header h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }
        
        .product-content {
          padding: 20px;
          position: relative;
        }
        
        .product-content p {
          color: var(--text-medium);
          margin-bottom: 20px;
          line-height: 1.5;
          font-size: 14px;
        }
        
        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .product-tags {
          display: flex;
          gap: 8px;
        }
        
        .tag {
          padding: 4px 10px;
          background: var(--bg-medium);
          border-radius: 20px;
          font-size: 12px;
          color: var(--text-medium);
        }
        
        .tag-popular {
          background: rgba(251, 188, 5, 0.2);
          color: #ad7a03;
        }
        
        .product-stats {
          display: flex;
          gap: 15px;
        }
        
        .mini-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .mini-stat-value {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
        }
        
        .mini-stat-label {
          font-size: 12px;
          color: var(--text-light);
        }
        
        .card-actions {
          display: flex;
          gap: 10px;
        }
        
        .btn {
          font-family: 'Google Sans', 'Roboto', Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          outline: none;
        }
        
        .btn-large {
          padding: 12px 24px;
          font-size: 16px;
        }
        
        .btn-primary {
          background: var(--primary-color);
          color: white;
        }
        
        .btn-primary:hover {
          background: var(--primary-dark);
          box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        
        .btn-outline:hover {
          background: rgba(66, 133, 244, 0.1);
        }
        
        .btn-secondary {
          background: var(--bg-medium);
          color: var(--text-medium);
        }
        
        .btn-secondary:hover {
          background: var(--border-color);
        }
        
        .btn-trigger {
          flex: 1;
          background: var(--primary-color);
          color: white;
        }
        
        .btn-trigger:hover {
          background: var(--primary-dark);
        }
        
        .btn-details {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-medium);
        }
        
        .btn-details:hover {
          background: var(--bg-medium);
        }
        
        .btn-icon {
          margin-left: 8px;
          font-size: 14px;
        }
        
        .btn-icon-left {
          margin-right: 8px;
          font-size: 14px;
        }
        
        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: var(--radius);
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        }
        
        .modal-header {
          padding: 30px;
          position: relative;
          color: white;
          display: flex;
          align-items: center;
        }
        
        .modal-icon {
          font-size: 32px;
          margin-right: 20px;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .modal-header h2 {
          font-size: 24px;
          font-weight: 600;
          margin: 0;
        }
        
        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .modal-body {
          padding: 30px;
        }
        
        .modal-description {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-medium);
          margin-bottom: 30px;
        }
        
        .modal-features {
          margin-bottom: 30px;
        }
        
        .modal-features h3 {
          font-size: 18px;
          margin-bottom: 15px;
          color: var(--text-dark);
        }
        
        .modal-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .modal-features li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          padding: 10px 15px;
          background: var(--bg-light);
          border-radius: 8px;
          font-size: 15px;
          color: var(--text-medium);
        }

        /* Add to your existing CSS */
        .btn-loading {
          background-color: #cccccc !important;
          cursor: wait;
        }

        .trigger-status {
          padding: 8px;
          margin-top: 10px;
          border-radius: 4px;
          font-size: 14px;
        }

        .trigger-status.success {
          background-color: #e6f7ee;
          color: #34a853;
        }

        .trigger-status.error {
          background-color: #fce8e6;
          color: #d93025;
        }
        
        .feature-icon {
          color: var(--secondary-color);
          margin-right: 10px;
          flex-shrink: 0;
        }
        
        .modal-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        
        .stat-box {
          flex: 1;
          background: var(--bg-light);
          border-radius: var(--radius);
          padding: 20px;
          text-align: center;
          margin: 0 10px;
        }
        
        .stat-box:first-child {
          margin-left: 0;
        }
        
        .stat-box:last-child {
          margin-right: 0;
        }
        
        .stat-value {
          display: block;
          font-size: 28px;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 14px;
          color: var(--text-medium);
        }
        
        .modal-actions {
          display: flex;
          gap: 15px;
        }
        
        /* Accordion */
        .accordion-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          margin-bottom: 15px;
          overflow: hidden;
        }
        
        .accordion-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .accordion-title h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 500;
        }
        
        .accordion-title.open {
          border-bottom: 1px solid var(--border-color);
        }
        
        .accordion-icon {
          color: var(--text-medium);
        }
        
        .accordion-content {
          padding: 15px 20px;
          color: var(--text-medium);
          font-size: 15px;
          line-height: 1.6;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .hero-content {
            order: 1;
            text-align: center;
          }
          
          .hero-description,
          .hero-stats {
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-cta {
            justify-content: center;
          }
          
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }
          
          .modal-stats {
            flex-direction: column;
            gap: 15px;
          }
          
          .stat-box {
            margin: 0;
          }
        }
        
        @media (max-width: 768px) {
          .modal-actions {
            flex-direction: column;
          }
          
          .modal-icon {
            display: none;
          }
          
          .section-header h2 {
            font-size: 28px;
          }
          
          .filter-actions {
            flex-direction: column;
          }
          
          .filter-controls {
            width: 100%;
            justify-content: space-between;
          }
        }
        
        @media (max-width: 576px) {
          .hero-content h1 {
            font-size: 32px;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 10px;
          }
          
          .modal-features li {
            padding: 10px;
          }
        }
      `}</style>
      
      {/* Hero Section */}
      <EnhancedHero />
      
      {/* Products Section */}
      <section className="products-section section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Automation Solutions</h2>
            <div className="header-accent"></div>
            <p>Discover our library of ready-to-deploy automation flows designed to streamline your operations</p>
          </div>
          
          {/* Filters */}
          <div className="product-filters">
            <div className="filter-tabs">
              {tabs.map(tab => (
                <motion.div
                  key={tab.id}
                  className={`filter-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                >
                  {tab.icon} {tab.label}
                </motion.div>
              ))}
            </div>
            
            <div className="filter-actions">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search solutions..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="filter-controls">
                <div className="view-toggle">
                  <button 
                    className={viewMode === 'grid' ? 'active' : ''}
                    onClick={() => setViewMode('grid')}
                  >
                    <FaDesktop />
                  </button>
                  <button 
                    className={viewMode === 'list' ? 'active' : ''}
                    onClick={() => setViewMode('list')}
                  >
                    <FaClipboardList />
                  </button>
                </div>
                
                <div className="sort-dropdown">
                  <div 
                    className="sort-button"
                    onClick={() => setSortBy(prev => prev === 'open' ? 'popular' : 'open')}
                  >
                    <FaFilter /> Sort by
                  </div>
                  
                  {sortBy === 'open' && (
                    <div className="dropdown-menu">
                      <div 
                        className={`dropdown-item ${sortBy === 'popular' ? 'active' : ''}`}
                        onClick={() => setSortBy('popular')}
                      >
                        <FaStar style={{ marginRight: '8px' }} /> Most Popular
                      </div>
                      <div 
                        className={`dropdown-item ${sortBy === 'name' ? 'active' : ''}`}
                        onClick={() => setSortBy('name')}
                      >
                        <FaClipboardList style={{ marginRight: '8px' }} /> Alphabetical
                      </div>
                      <div 
                        className={`dropdown-item ${sortBy === 'new' ? 'active' : ''}`}
                        onClick={() => setSortBy('new')}
                      >
                        <FaLightbulb style={{ marginRight: '8px' }} /> Newest First
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid/List */}
          <div className={viewMode === 'grid' ? 'products-grid' : 'products-list'}>
            {sortedProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onTriggerFlow={handleTriggerFlow}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;