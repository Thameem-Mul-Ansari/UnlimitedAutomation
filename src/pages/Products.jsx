import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, FaDatabase, FaDesktop, FaCloud, FaQrcode,FaClock, FaMoneyBill ,FaDisease ,
  FaChartBar, FaClipboardList, FaFileInvoiceDollar, FaStar, FaUsers,FaLinkedin ,
  FaArrowRight, FaCheck, FaAngleDown, FaAngleUp, FaLightbulb,FaProductHunt ,FaRoute ,
  FaPlay, FaSearch, FaFilter, FaCarSide,FaIdCard,FaBookReader,FaCheckSquare,FaUserCheck  
} from 'react-icons/fa';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { BiAlignMiddle } from 'react-icons/bi';
import QR_Image from '../assets/Workflow_UA/1_QR_Compliance_Verifier.png'
import Insurance_Image from '../assets/Workflow_UA/2_Motor_Insurance_Claim.png'
import Invoice_Image from '../assets/Workflow_UA/3_Invoice_Processing.png'
import Product_Image from '../assets/Workflow_UA/4_Product_Price_Comparison.png'
import Resume_Image from '../assets/Workflow_UA/5_Resume_Screening.png'
import Customer_Image from '../assets/Workflow_UA/6_Customer_Feedback_Analysis.png'

// Zoomed Image Modal Component
const ZoomedImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
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
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '90vh' }}
      >
        
        <div className="modal-header" style={{ background: 'linear-gradient(135deg, #0000005f, #00000056)', position: 'sticky', top: 0, zIndex: 1 }}>
          <h2>{alt}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={imageSrc}
            alt={alt}
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              objectFit: 'contain'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
// Trigger Modal Component for File and Extra Inputs
const TriggerModal = ({ product, isOpen, onClose, onTrigger, isTriggering, extraField1, extraField2, extraField3, extraField4, extraField5, extraField6, setExtraField1, setExtraField2, setExtraField3, setExtraField4, setExtraField5, setExtraField6, setSelectedFile, triggerResponse, setFileData }) => {
  if (!isOpen) return null;

  const isSpecialProduct = ['flow_07', 'flow_08', 'flow_09', 'flow_10', 'flow_11', 'flow_12', 'flow_13', 'flow_14', 'flow_15', 'flow_16'].includes(product.id);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFileData(fileReader.result); // Store Data URL
      };
      fileReader.readAsDataURL(file);
    } else {
      setFileData(null);
    }
  };

  // Function to render response content based on type
  const renderResponseContent = (responseBody) => {
    if (!responseBody) return null;

    let parsedResponse = responseBody;
    try {
      parsedResponse = JSON.parse(responseBody);
      responseBody = parsedResponse.response || responseBody;
    } catch (e) {
      // Not a JSON string, proceed with raw response
    }

    if (typeof responseBody === 'string' && /<([a-z][a-z0-9]*)\b[^>]*>/i.test(responseBody)) {
      const cleanedResponse = responseBody.replace(
        '@{base64(body(\'Get_file_content_Img\'))}',
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAC8AGZJ1r37gAAAABJRU5ErkJggg=='
      );

      const sanitizedHTML = DOMPurify.sanitize(cleanedResponse, {
        USE_PROFILES: { html: true },
        ADD_TAGS: ['img'],
        ADD_ATTR: ['src', 'alt'],
        ADD_DATA_URI_TAGS: ['img'],
        ADD_DATA_URI_ATTR: ['src']
      });

      return (
        <div className="response-html">
          <h4>Flow Output</h4>
          <div 
            style={{ 
              background: '#f5f5f5', 
              padding: '15px', 
              borderRadius: '8px', 
              overflowX: 'auto',
              maxWidth: '100%'
            }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
              style={{ maxWidth: '100%' }}
            />
            {sanitizedHTML.includes('<img') && (
              <p style={{ color: '#888', fontSize: '12px', marginTop: '10px' }}>
              </p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="response-text">
        <h4>Flow Output</h4>
        <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
          {typeof responseBody === 'object' ? JSON.stringify(responseBody, null, 2) : responseBody}
        </pre>
      </div>
    );
  };

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
        <div className="modal-header" style={{ background: product.gradient, position: 'sticky', top: 0, zIndex: 1 }}>
          <div className="modal-icon">{product.icon}</div>
          <h2>Trigger {product.name}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          {isSpecialProduct ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <FaClock style={{ fontSize: '50px', color: '#000000a5', marginBottom: '10px' }} />
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Coming Soon</p>
            </div>
          ) : (
            <>
              <p className="modal-description">Provide the necessary inputs to trigger the {product.name} flow.</p>
              <div className="modal-inputs">
                {product.id !== 'flow_06' && (
                  <div className="upload-section">
                    <h3>File Upload</h3>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="*/*"
                    />
                  </div>
                )}

                {product.id === 'flow_02' && (
                  <div className="extra-inputs">
                    <h3>Additional Information</h3>
                    <input
                      type="text"
                      placeholder="Name"
                      value={extraField1}
                      onChange={(e) => setExtraField1(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Email ID"
                      value={extraField2}
                      onChange={(e) => setExtraField2(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Number Plate"
                      value={extraField3}
                      onChange={(e) => setExtraField3(e.target.value)}
                    />
                  </div>
                )}
                {product.id === 'flow_05' && (
                  <div className="extra-inputs">
                    <h3>Additional Information</h3>
                    <input
                      type="text"
                      placeholder="Email ID"
                      value={extraField4}
                      onChange={(e) => setExtraField4(e.target.value)}
                    />
                  </div>
                )}
                {product.id === 'flow_06' && (
                  <div className="extra-inputs">
                    <h3>Additional Information</h3>
                    <input
                      type="text"
                      placeholder="Email ID"
                      value={extraField6}
                      onChange={(e) => setExtraField6(e.target.value)}
                    /><p></p>
                  </div>
                )}
                {product.id === 'flow_06' && (
                  <div className="extra-inputs">
                    <h3>Please select the products.</h3>
                    <div className="checkbox-group">
                      {[
                        "Canvas Sneakers",
                        "Running Shoes",
                        "flip-flops",
                        "Sandals",
                        "Boots",
                        "Gym shoes"
                      ].map((item) => (
                        <label key={item} className="checkbox-label">
                          <input
                            type="checkbox"
                            value={item}
                            checked={extraField5.includes(item)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setExtraField5([...extraField5, item]);
                              } else {
                                setExtraField5(extraField5.filter((val) => val !== item));
                              }
                            }}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {triggerResponse && (
                <div className="response-section">
                  {renderResponseContent(triggerResponse)}
                </div>
              )}
              
              <div className="modal-actions">
                <button 
                  className={`btn btn-primary ${isTriggering ? 'btn-loading' : ''}`} 
                  onClick={() => onTrigger(product)}
                  disabled={isTriggering}
                >
                  {isTriggering ? (
                    <span>Running...</span>
                  ) : (
                    <>
                      <FaPlay className="btn-icon-left" /> Trigger Flow
                    </>
                  )}
                </button>
                <button className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
// Product Modal Component
const ProductModal = ({ product, isOpen, onClose, onImageZoom }) => {
  if (!isOpen) return null;
  
  const isSpecialProduct = ['flow_07', 'flow_08', 'flow_09', 'flow_10', 'flow_11', 'flow_12', 'flow_13', 'flow_14', 'flow_15', 'flow_16'].includes(product.id);

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
        {/* Sticky TopNav */}
        <div className="modal-header" style={{ background: product.gradient, position: 'sticky', top: 0, zIndex: 1 }}>
          <div className="modal-icon">{product.icon}</div>
          <h2>{product.name}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <h3>Description</h3>
          <p className="modal-description">{product.longdescription}</p>
          {isSpecialProduct && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <FaClock style={{ fontSize: '50px', color: '#000000a5', marginBottom: '10px' }} />
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Coming Soon</p>
            </div>
          )}
          {!isSpecialProduct && (
            <>
              <h3>Client</h3>
              <p className="modal-description">{product.client}</p>
              <div className="modal-features">
                <h3>Challenges</h3>
                <ul>
                  {product.Challenges.map((feature, index) => (
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
              <div className="modal-features">
                <h3>Solutions</h3>
                <ul>
                  {product.Solution.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <FaStar className="feature-icon" /> {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="modal-features">
                <h3>Tech Stack</h3>
                <div className="tech-stack-boxes">
                  {product.highlevel.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-box"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      style={{
                        display: 'inline-block',
                        padding: '8px 12px',
                        margin: '5px',
                        background: '#f5f5f5',
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="modal-features">
            <h3>Process High Level Flow</h3>
            <img
              src={product.image}
              style={{
                display: 'block',
                margin: 'auto',
                maxWidth: '730px',
                width: '95%',
                height: '385px',
                border: '1.5px solid black',
                borderRadius: '0px',
                cursor: 'pointer',
                overflow:'visible'
              }}
              alt={product.name}
              onClick={() => onImageZoom(product.image, product.name)}
            />
          </div>
          <div className="modal-stats">
            <div className="stat-box">
              <span className="stat-value">{product.accuracy}</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">{product.timesaved}</span>
              <span className="stat-label">Time Saved</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">{product.costreduced}</span>
              <span className="stat-label">Cost Reduction</span>
            </div>
          </div>
            </>
          )}
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
  
  const handleRobotInteraction = () => {
    setAnimateRobot(true);
    setTimeout(() => setAnimateRobot(false), 1500);
  };
  
  return (
    <section className="products-hero">
      <div className="container">
        <div className="hero-grid">
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
                <span className="stat-number">15+</span>
                <span className="stat-label">Automation Flows</span>
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
          
          <div className="hero-graphics">
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onClick={handleRobotInteraction}
              whileHover={{ scale: 1.05 }}
            >
              <svg className="robot-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
    'active': '#0000005f',
    'maintenance': '#fbbc05',
    'soon': '#0000005f',
    'new': '#4285f4'
  };
  const fontColors = {
    'active': '#ffffff',
    'maintenance': '#000000',
    'soon': 'white',
    'new': '#ffffff'
  };
  
  return (
    <div className="status-indicator" style={{ backgroundColor: statusColors[status] || '#9aa0a6', color: fontColors[status] || '#ffffff', textTransform: 'capitalize' }}>
      {status.toLowerCase()}
    </div>
  );
};

const ProductCard = ({ product, onTriggerFlow, onViewDetails, setTriggerStatus, fileData }) => {
  const [isHovered, setIsHovered] = useState(false);

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
            <span className="tag">{product.category1}</span>
            <span className="tag">{product.category2}</span>
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
                onClick={() => onTriggerFlow(product)}
                className="btn btn-trigger"
              >
                <FaPlay className="btn-icon" /> Trigger Flow
              </button>

              <button
                onClick={() => onViewDetails(product)}
                className="btn btn-details"
              >
                Details
              </button>
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
  const [isTriggerModalOpen, setIsTriggerModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('null');
  const [favorites, setFavorites] = useState([]);
  const [isTriggering, setIsTriggering] = useState(false);
  const [triggerStatus, setTriggerStatus] = useState(null);
  const [triggerResponse, setTriggerResponse] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [extraField1, setExtraField1] = useState('');
  const [extraField2, setExtraField2] = useState('');
  const [extraField3, setExtraField3] = useState('');
  const [extraField4, setExtraField4] = useState('');
  const [extraField5, setExtraField5] = useState('');
  const [extraField6, setExtraField6] = useState('');
  const [fileData, setFileData] = useState({});
  const [isZoomedImageOpen, setIsZoomedImageOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomedImageAlt, setZoomedImageAlt] = useState('');

  const tabs = [
    { id: 'all', label: 'All Products', icon: <FaStar />, categories: [] },
    { 
      id: 'tools', 
      label: 'Automation Tools', 
      icon: <FaDesktop />, 
      categories: ['Operation', 'BPO', 'Staffing', 'Web Scrapping', 'IT', 'CRM', 'Customer Support', 'Medical Coding', 'Compliance Trade'] 
    },
    { 
      id: 'solutions', 
      label: 'Industry Solutions', 
      icon: <FaClipboardList />, 
      categories: ['Retail', 'Insurance', 'FinTech', 'HR', 'Marketing', 'Sales', 'E-Commerce', 'Healthcare', 'Logistics', 'Education'] 
    },
    { 
      id: 'platforms', 
      label: 'Platforms', 
      icon: <FaCloud />, 
      categories: ['Manufacturing'] 
    }
  ];
  
  const products = [
    {
      id: 'flow_01',
      name: 'QR Compliance Verifier',
      description: 'QR-based product approvals by verifying payment status, routing manager decisions, and notifying customers via email.',
      longdescription: ' The workflow involves scanning a provided QR code to extract product information, verifying it against stored records for accuracy and compliance, structuring the validated data into a predefined template, and forwarding the finalized details to the customer for confirmation.',
      client: 'Leading Mid to Large scale Electronic Manufacturing company',
      Challenges: [
        'Manual verification delays and human error in product detail matching',
        'Inconsistent data formats across product lines or suppliers',
        'Limited traceability for compliance or recall scenarios',
        'Customer dissatisfaction due to incorrect or delayed product info',
        'High operational overhead for manual templating and dispatch'
      ],
      Solution: [
        'QR code scanning triggers automated data retrieval from storage',
        'Real-time validation against master records or compliance schema',
        'Dynamic templating using predefined formats for product details',
        'Automated dispatch to customer via email or integrated channels',
        'Audit trail maintained for verification and compliance'
      ],
      highlevel: ['SharePoint', 'Email', 'One-Drive'],
      accuracy: '95%',
      timesaved: '30%',
      costreduced: '45%',
      category1: 'Retail',
      category2: 'Manufacturing',
      status: 'active',
      isPopular: true,
      icon: <FaQrcode />,
      gradient: 'linear-gradient(135deg, #4285f4, #1a73e8)',
      image: QR_Image 
    },
    {
      id: 'flow_02',
      name: 'Motor Insurance Claim',
      description: 'Uses AI Builder to detect vehicle damage from images and automate approval for car insurance claims.',
      longdescription: 'This workflow uses AI to scan vehicle damage from images submitted during a car insurance claim. It compares the image against known damage types and coverage rules, determines claim eligibility, and automatically sends approval details to both the insurer and the customer.',
      client: 'Large automobile insurance company handling high volumes of motor claims daily.',
      Challenges: [
        'Manual assessment is slow and inconsistent',
        'Human judgment leads to variations in approval',
        'Customers get frustrated by delays',
        'High staff workload and operational bottlenecks'
      ],
      Solution: [
        'AI Builder detects damage and classifies severity',
        'Power Automate routes eligible claims for approval',
        'SharePoint stores claim documents and history',
        'Email integration sends result notifications.'
      ],
      highlevel: ['AI Builder', 'Email', 'Python', 'SharePoint'],
      accuracy: '87%',
      timesaved: '60%',
      costreduced: '25%',
      category1: 'Insurance',
      category2: 'Operation',
      status: 'active',
      isPopular: true,
      icon: <FaCarSide />,
      gradient: 'linear-gradient(135deg, #E573B3, #B33C86)',
      image: Insurance_Image
    },
    {
      id: 'flow_03',
      name: 'Customer Feedback Analysis',
      description: 'Performs sentiment analysis on customer feedback and delivers a formatted visual report via email.',
      longdescription: 'The system automatically analyses customer feedback using summarizer tools and generates a visual report that highlights satisfaction trends, pain points, and actionable insights. These reports are then shared via email with relevant teams for further action.',
      client: 'Customer experience teams in service-oriented businesses.',
      Challenges: [
        'Feedback is scattered across emails, forms, and surveys',
        'Manual review misses patterns or emotional tone',
        'Reporting takes time and lacks visual clarity'
      ],
      Solution: [
        'AI-based Customer feedback analysis ',
        'Data aggregation from Excel',
        'Automated email delivery via Outlook'
      ],
      highlevel: ['AI Builder', 'Excel'],
      accuracy: '95%',
      timesaved: '75%',
      costreduced: '10%',
      category1: 'Marketing',
      category2: 'Sales',
      status: 'active',
      isPopular: true,
      icon: <FaUsers />,
      gradient: 'linear-gradient(135deg, #ff5252, #d81b60)',
      image: Customer_Image
    },
    {
      id: 'flow_04',
      name: 'Resume Screening',
      description: 'Screens resumes for key criteria and auto-schedules Teams interviews with selected candidates.',
      longdescription: 'AI scans incoming resumes for required skills, keywords, and experience levels. Qualified candidates are automatically scheduled for interviews using Microsoft Teams and notified via email, reducing manual review and coordination efforts.',
      client: 'Recruitment agency focused on high-volume hiring for various roles.',
      Challenges: [
        'Sorting resumes manually takes too long',
        'Matching skills accurately is difficult without automation',
        'Coordinating interviews adds more delays'
      ],
      Solution: [
        'Resume parsing through AI Builder',
        'Scheduling teams meet via Power Automate',
        'Dataverse used to track profiles'
      ],
      highlevel: ['AI Builder', 'Approval', 'Teams', 'OneDrive'],
      accuracy: '95%',
      timesaved: '50%',
      costreduced: '60%',
      category1: 'HR',
      category2: 'Staffing',
      status: 'active',
      isPopular: true,
      icon: <FaClipboardList />,
      gradient: 'linear-gradient(135deg, #66bb6a, #2e7d32)',
      image: Resume_Image
    },
    {
      id: 'flow_05',
      name: 'Invoice Processing',
      description: 'Automates invoice extraction, screens for missing data, and directs complete entries for approval.',
      longdescription: 'The system extracts invoice data, validates it, classifies valid invoices, and sends them for approval. If there is no response within a set time, a Planner task and reminder are triggered.',
      client: 'Mid-sized enterprise or large organization with a high volume of vendor transactions.',
      Challenges: [
        'High volumes of invoices lead to manual errors',
        'Missing data causes delays and non-compliance',
        'Approval bottlenecks due to unresponsiveness',
        'Difficulty tracking pending approvals'
      ],
      Solution: [
        'AI Builder to extract and validate invoice fields',
        'Power Automate to manage workflow routing and timers',
        'SharePoint for storage and classification',
        'Microsoft Planner and Outlook for notifications'
      ],
      highlevel: ['AI Builder', 'Task Planner', 'Approval', 'Email'],
      accuracy: '90%',
      timesaved: '40%',
      costreduced: '38%',
      category1: 'FinTech',
      category2: 'BPO',
      status: 'active',
      isPopular: true,
      icon: <FaFileInvoiceDollar />,
      gradient: 'linear-gradient(135deg, #7e57c2, #4527a0)',
      image: Invoice_Image
    },
    {
      id: 'flow_06',
      name: 'Product Price Comparison',
      description: 'Automates product comparison by scraping competitor prices and emails the best results.',
      longdescription: 'The system automatically scrapes product prices across multiple online stores, compares them with our instore price, and sends a summarized email highlighting best deals and price differences.',
      client: 'Multi-brand retail chain managing diverse supplier relationships.',
      Challenges: [
        'Prices change frequently across vendors ',
        'Manually comparing prices is slow and error-prone ',
        'Hard to react quickly to good deals or price drops'
      ],
      Solution: [
        'Power Automate Desktop for web scraping ',
        'Automated email alerts on top price options'
      ],
      highlevel: ['Web scrapping', 'Email'],
      accuracy: '98%',
      timesaved: '35%',
      costreduced: '25%',
      category1: 'Retail',
      category2: 'E-Commerce',
      status: 'active',
      isPopular: true,
      icon: <FaChartBar />,
      gradient: 'linear-gradient(135deg, #fbbc05, #f57c00)',
      image: Product_Image
    },
    {
      id: 'flow_07',
      name: 'LinkedIn Job Scrapping',
      description: 'Extract job listings, company details, and applicant data from LinkedIn for recruitment and market analysis.',
      longdescription: 'Extract job listings, company details, and applicant data from LinkedIn for recruitment and market analysis.',
      client: 'Leading Mid to Large scale Electronic Manufacturing company',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['SharePoint', 'Email', 'One-Drive'],
      accuracy: '95%',
      timesaved: '30%',
      costreduced: '45%',
      category1: 'Web Scrapping',
      category2: 'HR',
      status: 'soon',
      isPopular: true,
      icon: <FaLinkedin  />,
      gradient: 'linear-gradient(135deg, #4285f4, #1a73e8)',
      image: QR_Image 
    },
    {
      id: 'flow_08',
      name: 'Employee Onboarding workflow',
      description: 'Automate document collection, training, and compliance checks to streamline new hire integration.',
      longdescription: 'Automate document collection, training, and compliance checks to streamline new hire integration.',
      client: 'Large automobile insurance company handling high volumes of motor claims daily.',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['AI Builder', 'Email', 'Python', 'SharePoint'],
      accuracy: '87%',
      timesaved: '60%',
      costreduced: '25%',
      category1: 'HR',
      category2: 'IT',
      status: 'soon',
      isPopular: true,
      icon: <FaUserCheck  />,
      gradient: 'linear-gradient(135deg, #E573B3, #B33C86)',
      image: Insurance_Image
    },
    {
      id: 'flow_09',
      name: 'Lead scoring and Routing',
      description: 'Rank sales leads based on engagement and assign them to the right reps.',
      longdescription: 'Rank sales leads based on engagement and assign them to the right reps.',
      client: 'Customer experience teams in service-oriented businesses.',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['AI Builder', 'Excel'],
      accuracy: '95%',
      timesaved: '75%',
      costreduced: '10%',
      category1: 'Sales',
      category2: 'CRM',
      status: 'soon',
      isPopular: true,
      icon: <FaRoute  />,
      gradient: 'linear-gradient(135deg, #ff5252, #d81b60)',
      image: Customer_Image
    },
    {
      id: 'flow_10',
      name: 'Scholarship Eligibility',
      description: 'Automate student applications, verify criteria, and shortlist candidates for financial aid programs.',
      longdescription: 'Automate student applications, verify criteria, and shortlist candidates for financial aid programs.',
      client: 'Recruitment agency focused on high-volume hiring for various roles.',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['AI Builder', 'Approval', 'Teams', 'OneDrive'],
      accuracy: '95%',
      timesaved: '50%',
      costreduced: '60%',
      category1: 'Education',
      category2: 'Staffing',
      status: 'soon',
      isPopular: true,
      icon: <FaMoneyBill  />,
      gradient: 'linear-gradient(135deg, #66bb6a, #2e7d32)',
      image: Resume_Image
    },
    {
      id: 'flow_11',
      name: 'Student Admission Automation',
      description: 'Digitize application processing, document verification, and enrollment for educational institutions.',
      longdescription: 'Digitize application processing, document verification, and enrollment for educational institutions.',
      client: 'Mid-sized enterprise or large organization with a high volume of vendor transactions.',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['AI Builder', 'Task Planner', 'Approval', 'Email'],
      accuracy: '90%',
      timesaved: '40%',
      costreduced: '38%',
      category1: 'Education',
      category2: 'Staffing',
      status: 'soon',
      isPopular: true,
      icon: <FaCheckSquare  />,
      gradient: 'linear-gradient(135deg, #7e57c2, #4527a0)',
      image: Invoice_Image
    },
    {
      id: 'flow_12',
      name: 'Exam Invigilation Duty and Student Assignment',
      description: 'Monitor online exams and auto-assign assessments while preventing cheating.',
      longdescription: 'Monitor online exams and auto-assign assessments while preventing cheating.',
      client: 'Multi-brand retail chain managing diverse supplier relationships.',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['Web scrapping', 'Email'],
      accuracy: '98%',
      timesaved: '35%',
      costreduced: '25%',
      category1: 'Education',
      category2: 'Staffing',
      status: 'soon',
      isPopular: true,
      icon: <FaBookReader   />,
      gradient: 'linear-gradient(135deg, #fbbc05, #f57c00)',
      image: Product_Image
    },
    {
      id: 'flow_13',
      name: 'ID Card Generator',
      description: 'Create digital/physical ID cards with secure data integration for employees/students.',
      longdescription: 'Create digital/physical ID cards with secure data integration for employees/students.',
      client: 'Leading Mid to Large scale Electronic Manufacturing company',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['SharePoint', 'Email', 'One-Drive'],
      accuracy: '95%',
      timesaved: '30%',
      costreduced: '45%',
      category1: 'Education',
      category2: 'HR',
      status: 'soon',
      isPopular: true,
      icon: <FaIdCard  />,
      gradient: 'linear-gradient(135deg, #4285f4, #1a73e8)',
      image: QR_Image 
    },
    {
      id: 'flow_14',
      name: 'Product Warranty',
      description: 'Automate claim validation, approval, and processing for retail customer support.',
      longdescription: 'Automate claim validation, approval, and processing for retail customer support.',
      client: 'Large automobile insurance company handling high volumes of motor claims daily.',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['AI Builder', 'Email', 'Python', 'SharePoint'],
      accuracy: '87%',
      timesaved: '60%',
      costreduced: '25%',
      category1: 'Retail',
      category2: 'Customer Support',
      status: 'soon',
      isPopular: true,
      icon: <FaProductHunt  />,
      gradient: 'linear-gradient(135deg, #E573B3, #B33C86)',
      image: Insurance_Image
    },
    {
      id: 'flow_15',
      name: 'ICD/CPT Code',
      description: 'Auto-generate accurate medical billing codes from patient records for healthcare providers.',
      longdescription: 'Auto-generate accurate medical billing codes from patient records for healthcare providers.',
      client: 'Customer experience teams in service-oriented businesses.',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['AI Builder', 'Excel'],
      accuracy: '95%',
      timesaved: '75%',
      costreduced: '10%',
      category1: 'Healthcare',
      category2: 'Medical Coding',
      status: 'soon',
      isPopular: true,
      icon: <FaDisease  />,
      gradient: 'linear-gradient(135deg, #ff5252, #d81b60)',
      image: Customer_Image
    },
    {
      id: 'flow_16',
      name: 'Import/Export Compliance Checklist Automation',
      description: 'Ensure trade regulations are met with automated document checks and audits.',
      longdescription: 'Ensure trade regulations are met with automated document checks and audits.',
      client: 'Recruitment agency focused on high-volume hiring for various roles.',
      Challenges: ['Coming Soon'],
      Solution: ['Coming Soon'],
      highlevel: ['AI Builder', 'Approval', 'Teams', 'OneDrive'],
      accuracy: '95%',
      timesaved: '50%',
      costreduced: '60%',
      category1: 'Logistics',
      category2: 'Compliance Trade',
      status: 'soon',
      isPopular: true,
      icon: <FaClipboardList />,
      gradient: 'linear-gradient(135deg, #66bb6a, #2e7d32)',
      image: Resume_Image
    }
  ];
  
  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(product =>
        tabs.find(tab => tab.id === activeTab).categories.includes(product.category1) ||
        tabs.find(tab => tab.id === activeTab).categories.includes(product.category2)
      );
    
  const searchedProducts = searchTerm
    ? filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredProducts;
  
  const sortedProducts = sortBy
    ? [...searchedProducts].sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'new':
            return b.status === 'new' ? 1 : -1;
          default:
            return 0;
        }
      })
    : searchedProducts;

  const handleTriggerFlow = async (product) => {
    setIsTriggering(true);
    setTriggerStatus(null);
    setTriggerResponse(null);

    try {
      let filename = null;
      let base64Only = null;

      if (selectedFile) {
        filename = selectedFile.name;

        const fileReader = new FileReader();
        const readFile = new Promise((resolve, reject) => {
          fileReader.onload = () => resolve(fileReader.result);
          fileReader.onerror = reject;
          fileReader.readAsDataURL(selectedFile);
        });

        const result = await readFile;
        base64Only = result.split(',')[1];
      }

      const payload = {
        product_id: product.id,
        filename,
        fileContent: base64Only
      };

      if (product.id === 'flow_02') {
        payload.extraField1 = extraField1 || null;
        payload.extraField2 = extraField2 || null;
        payload.extraField3 = extraField3 || null;
      }
      if (product.id === 'flow_05') {
        payload.extraField4 = extraField4 || null;
      }
      if (product.id === 'flow_06') {
        payload.extraField5 = extraField5 || null;
        payload.extraField6 = extraField6 || null;
      }
      
      console.log('Payload being sent:', payload);

      const response = await axios.post('https://trigger-automate-flows.onrender.com/trigger-flow', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setTriggerStatus({
        success: response.data.success,
        message: response.data.success
          ? `${product.name} flow triggered successfully!`
          : `Failed to trigger flow: ${response.data.error}`,
        details: response.data
      });

      setTriggerResponse(response.data.response);

      alert(response.data.success
        ? `Flow for ${product.name} triggered successfully!\nStatus: ${response.data.status_code}`
        : `Error: ${response.data.error}\n${response.data.details}`
      );

      setSelectedFile(null);
      setFileData(prev => ({ ...prev, [product.id]: null }));
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
  
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setIsTriggerModalOpen(false);
    setIsZoomedImageOpen(false);
  };
  
  const handleOpenTriggerModal = (product) => {
    setSelectedProduct(product);
    setIsTriggerModalOpen(true);
    setIsModalOpen(false);
    setIsZoomedImageOpen(false);
    setTriggerStatus(null);
    setTriggerResponse(null);
  };
  
  const handleImageZoom = (imageSrc, alt) => {
    setZoomedImage(imageSrc);
    setZoomedImageAlt(alt);
    setIsZoomedImageOpen(true);
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
      
      <style jsx ="true">{`
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
          color: black;
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
          flex-wrap: wrap;
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
        
        .btn-preview {
          background: #34a853;
          color: white;
        }
        
        .btn-preview:hover {
          background: #2e7d32;
        }
        
        .btn-icon {
          margin-left: 8px;
          font-size: 14px;
        }
        
        .btn-icon-left {
          margin-right: 8px;
          font-size: 14px;
        }
        
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
        
        .modal-inputs {
          margin-bottom: 30px;
        }
        
        .modal-inputs h3 {
          font-size: 18px;
          margin-bottom: 15px;
          color: var(--text-dark);
        }
        
        .upload-section {
          margin-bottom: 20px;
        }
        
        .upload-section input[type="file"] {
          padding: 8px 10px;
          font-size: 14px;
          border: 1px solid #dcdcdc;
          border-radius: 8px;
          background-color: #f9f9f9;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }
        
        .extra-inputs {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .extra-inputs input {
          padding: 0.5rem 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 0.95rem;
          background-color: #f9f9f9;
          transition: border-color 0.3s ease;
        }
        
        .extra-inputs input:focus {
          border-color: #0077cc;
          outline: none;
          background-color: #fff;
        }
        
        .response-section {
          margin-bottom: 20px;
          padding: 15px;
          background: var(--bg-light);
          border-radius: var(--radius);
          border: 1px solid var(--border-color);
        }
        
        .response-image h4,
        .response-text h4,
        .response-html h4 {
          font-size: 18px;
          margin-bottom: 10px;
          color: var(--text-dark);
        }
        
        .btn-loading {
          background: #a0c0ff !important;
          cursor: not-allowed;
        }
        
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

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.checkbox-label {
  font-size: 16px;
  color: #444;
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-label input[type="checkbox"] {
  transform: scale(1.2);
  cursor: pointer;
}
      `}</style>
      <EnhancedHero />
      
      <section className="products-section section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Automation Solutions</h2>
            <div className="header-accent"></div>
            <p>Discover our library of ready-to-deploy automation flows designed to streamline your operations</p>
          </div>
          
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
                  <div className="sort-button"
                    onClick={() => setSortBy(prev => prev === 'open' ? null : 'open')}
                  >
                    <FaFilter /> Sort by
                  </div>
                  
                  {sortBy === 'open' && (
                    <div className="dropdown-menu">
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
          
          <div className={viewMode === 'grid' ? 'products-grid' : 'products-list'}>
            {sortedProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onTriggerFlow={handleOpenTriggerModal}
                onViewDetails={handleViewDetails}
                setTriggerStatus={setTriggerStatus}
                fileData={fileData[product.id]}
              />
            ))}
          </div>

          {triggerStatus && (
            <motion.div
              key="trigger-status"
              className={`trigger-status ${triggerStatus.success ? 'success' : 'error'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 1001,
                padding: '10px 20px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            >
              {triggerStatus.message}
            </motion.div>
          )}
        </div>
      </section>
      
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            onImageZoom={handleImageZoom}
          />
        )}
        {isTriggerModalOpen && selectedProduct && (
          <TriggerModal 
            product={selectedProduct}
            isOpen={isTriggerModalOpen}
            onClose={() => {
              setIsTriggerModalOpen(false);
              setSelectedFile(null);
              setFileData(prev => ({ ...prev, [selectedProduct.id]: null }));
              setExtraField1('');
              setExtraField2('');
              setExtraField3('');
              setExtraField4('');
              setExtraField5('');
              setExtraField6('');
              setTriggerResponse(null);
            }}
            onTrigger={handleTriggerFlow}
            isTriggering={isTriggering}
            extraField1={extraField1}
            extraField2={extraField2}
            extraField3={extraField3}
            extraField4={extraField4}
            extraField5={extraField5}
            extraField6={extraField6}
            setExtraField1={setExtraField1}
            setExtraField2={setExtraField2}
            setExtraField3={setExtraField3}
            setExtraField4={setExtraField4}
            setExtraField5={setExtraField5}
            setExtraField6={setExtraField6}
            setSelectedFile={setSelectedFile}
            triggerResponse={triggerResponse}
            setFileData={(data) => setFileData(prev => ({ ...prev, [selectedProduct.id]: data ? { data, filename: selectedFile?.name } : null }))}
          />
        )}
        {isZoomedImageOpen && zoomedImage && (
          <ZoomedImageModal
            isOpen={isZoomedImageOpen}
            onClose={() => setIsZoomedImageOpen(false)}
            imageSrc={zoomedImage}
            alt={zoomedImageAlt}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;