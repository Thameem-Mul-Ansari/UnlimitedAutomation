import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCogs, FaRobot, FaDatabase, FaChartLine, FaUsers, 
  FaFileAlt, FaClipboardCheck, FaCode, FaArrowRight,
  FaLightbulb, FaRocket, FaHandHoldingUsd, FaCheckCircle,
  FaShieldAlt, FaClock, FaTrophy
} from 'react-icons/fa';

import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animationPlayed, setAnimationPlayed] = useState(false);
  
  useEffect(() => {
    setAnimationPlayed(true);
  }, []);
  
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'process', name: 'Process Automation' },
    { id: 'data', name: 'Data Management' },
    { id: 'integration', name: 'System Integration' }
  ];
  
  const services = [
    {
      id: 1,
      title: 'Workflow Automation',
      description: 'Streamline complex business processes with end-to-end automation solutions.',
      icon: <FaCogs />,
      category: 'process',
      features: [
        'Process analysis and optimization',
        'Custom workflow design',
        'Integration with existing systems',
        'Real-time monitoring and reporting'
      ]
    },
    {
      id: 2,
      title: 'Document Processing',
      description: 'Transform document-heavy processes with intelligent data extraction and processing.',
      icon: <FaFileAlt />,
      category: 'data',
      features: [
        'OCR and document digitization',
        'Data extraction and validation',
        'Document classification',
        'Automated data entry'
      ]
    },
    {
      id: 3,
      title: 'Legacy System Integration',
      description: 'Connect legacy systems with modern applications without expensive redevelopment.',
      icon: <FaCode />,
      category: 'integration',
      features: [
        'API-less integration',
        'Screen scraping and automation',
        'Data synchronization',
        'Legacy system modernization'
      ]
    },
    {
      id: 4,
      title: 'Data Migration & Cleansing',
      description: 'Automate data migration and cleansing processes to ensure data quality and consistency.',
      icon: <FaDatabase />,
      category: 'data',
      features: [
        'Automated data extraction',
        'Data transformation and normalization',
        'Data quality validation',
        'Scheduled data synchronization'
      ]
    },
    {
      id: 5,
      title: 'Customer Service Automation',
      description: 'Enhance customer experience with automated service processes and responses.',
      icon: <FaUsers />,
      category: 'process',
      features: [
        'Ticket processing automation',
        'Customer onboarding automation',
        'Self-service portals',
        'Automated response systems'
      ]
    },
    {
      id: 6,
      title: 'Compliance & Reporting',
      description: 'Streamline compliance processes and automate regulatory reporting.',
      icon: <FaClipboardCheck />,
      category: 'process',
      features: [
        'Automated compliance checks',
        'Regulatory report generation',
        'Audit trail documentation',
        'Policy enforcement automation'
      ]
    },
    {
      id: 7,
      title: 'Analytics Automation',
      description: 'Automate data collection, analysis, and reporting for better business insights.',
      icon: <FaChartLine />,
      category: 'data',
      features: [
        'Data collection from multiple sources',
        'Automated report generation',
        'Dashboard creation and distribution',
        'Predictive analytics integration'
      ]
    },
    {
      id: 8,
      title: 'API & System Integration',
      description: 'Connect disparate systems and applications for seamless data flow and process integration.',
      icon: <FaRobot />,
      category: 'integration',
      features: [
        'API integration and management',
        'Custom connector development',
        'Multi-system workflow orchestration',
        'Real-time data synchronization'
      ]
    }
  ];
  
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
  
  // New feature highlights for hero section
  const featureHighlights = [
    { icon: <FaRocket />, title: "Accelerate Growth", text: "Unlock new potential with smart automation" },
    { icon: <FaShieldAlt />, title: "Reduce Errors", text: "Achieve consistent, error-free operations" },
    { icon: <FaClock />, title: "Save Time", text: "Reclaim hours spent on manual tasks" }
  ];
  
  // New business impact cards
  const businessImpacts = [
    {
      icon: <FaChartLine />,
      title: "Operational Excellence",
      description: "Achieve higher throughput with fewer resources and dramatically shorter processing cycles.",
      color: "#4361ee"
    },
    {
      icon: <FaUsers />,
      title: "Team Empowerment",
      description: "Free your talented staff from repetitive tasks to focus on innovation and customer service.",
      color: "#3a0ca3"
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      description: "Eliminate human errors and ensure 100% consistent processing across all operations.",
      color: "#4cc9f0"
    },
    {
      icon: <FaTrophy />,
      title: "Competitive Edge",
      description: "Respond faster to market changes and scale operations without proportional cost increases.",
      color: "#4895ef"
    }
  ];
  
  return (
    <div className="services-page">
      {/* Enhanced Hero Section */}
      <section className="services-hero">
        <div className="hero-backdrop">
          <div className="circuit-lines"></div>
          <div className="gradient-overlay"></div>
        </div>
        <div className="container">
          <div className="services-hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-accent">Transforming</span> Business <br />
                Through <span className="gradient-text">Intelligent Automation</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We build custom RPA solutions that drive efficiency, reduce costs, and free your team to focus on what matters most
              </motion.p>
              
              <motion.div 
                className="hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a href="#services" className="btn btn-primary">
                  Explore Our Services <FaArrowRight className="btn-icon" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="automation-graphic">
                <div className="graphic-element gear">
                  <FaCogs className="animated-icon" />
                </div>
                <div className="graphic-element robot">
                  <FaRobot className="animated-icon" />
                </div>
                <div className="graphic-element chart">
                  <FaChartLine className="animated-icon" />
                </div>
                <div className="graphic-element database">
                  <FaDatabase className="animated-icon" />
                </div>
                <div className="pulse-circle"></div>
                <div className="pulse-circle delay-1"></div>
                <div className="pulse-circle delay-2"></div>
              </div>
            </motion.div>
          </div>
          
          {/* New Feature Highlights - Replacing percentage stats */}
          <motion.div 
            className="feature-highlights"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {featureHighlights.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-highlight-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.2) }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="hero-wave"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
          </motion.div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section id="services" className="section services-overview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our RPA Services</h2>
            <p>Comprehensive automation solutions tailored to your unique business challenges</p>
          </motion.div>
          
          <motion.div 
            className="service-categories"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          <div className="services-grid">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="section approach-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Proven Methodology</h2>
            <p>A strategic approach to automation implementation that delivers results</p>
          </motion.div>
          
          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Assessment & Discovery</h3>
                <p>We analyze your current processes to identify automation opportunities and prioritize them based on business impact and feasibility.</p>
                <div className="step-icon"><FaLightbulb /></div>
              </div>
            </div>
            
            <div className="approach-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Solution Design</h3>
                <p>We create a detailed design that outlines the automation workflow, integration points, and expected outcomes.</p>
                <div className="step-icon"><FaCode /></div>
              </div>
            </div>
            
            <div className="approach-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Development & Testing</h3>
                <p>Our team develops and thoroughly tests the automation solution to ensure reliability and performance.</p>
                <div className="step-icon"><FaCogs /></div>
              </div>
            </div>
            
            <div className="approach-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Deployment & Training</h3>
                <p>We implement the solution in your environment and train your team on how to use and monitor it effectively.</p>
                <div className="step-icon"><FaRocket /></div>
              </div>
            </div>
            
            <div className="approach-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Support & Optimization</h3>
                <p>We provide ongoing support and continuously optimize the solution to adapt to changing business needs.</p>
                <div className="step-icon"><FaChartLine /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Business Impact Section */}
      <section className="section business-impact-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>The Business Impact</h2>
            <p>Tangible benefits our clients experience after implementing our RPA solutions</p>
          </motion.div>
          
          <div className="impact-cards">
            {businessImpacts.map((impact, index) => (
              <motion.div 
                key={index} 
                className="impact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="impact-icon" style={{ backgroundColor: impact.color }}>
                  {impact.icon}
                </div>
                <h3>{impact.title}</h3>
                <p>{impact.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="impact-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
        <div className="impact-backdrop">
          <div className="impact-shape shape-1"></div>
          <div className="impact-shape shape-2"></div>
          <div className="impact-shape shape-3"></div>
        </div>
      </section>
      
      <style jsx = "true">{`
        /* Global styles */
        .section {
          padding: 5rem 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .section-header p {
          font-size: 1.2rem;
          color: #495057;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1rem;
        }
        
        .btn-icon {
          margin-left: 0.5rem;
        }
        
        .btn-primary {
          background: var(--gradient-1);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .btn-outline {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          margin-left: 1rem;
        }
        
        .btn-outline:hover {
          background: rgba(var(--primary-rgb), 0.1);
        }
        
        .gradient-text {
          background: var(--gradient-1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        /* Enhanced Hero Section */
        .services-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 0;
          position: relative;
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }
        
        .hero-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .circuit-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(90deg, rgba(0,123,255,0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,123,255,0.03) 1px, transparent 1px),
            radial-gradient(circle, rgba(0,123,255,0.05) 2px, transparent 2px);
          background-size: 50px 50px, 50px 50px, 200px 200px;
          background-position: center;
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 10%, rgba(67, 97, 238, 0.15), transparent 60%),
                    radial-gradient(circle at 20% 90%, rgba(76, 201, 240, 0.1), transparent 50%);
        }
        
        .services-hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6rem 0;
          z-index: 1;
          position: relative;
        }
        
        .hero-text {
          flex: 1;
          padding-right: 2rem;
          margin-top: 10vh;
        }
        
        .hero-text h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }
        
        .text-accent {
          color: var(--primary);
        }
        
        .hero-text p {
          font-size: 1.25rem;
          color: #495057;
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
        }
        
        .hero-cta {
          display: flex;
          align-items: center;
        }
        
        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        
        .automation-graphic {
          position: relative;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .graphic-element {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .animated-icon {
          font-size: 2rem;
          color: var(--primary);
        }
        
        .gear {
          top: 10%;
          left: 50%;
          transform: translateX(-50%) rotate(0deg);
          animation: spin 20s linear infinite;
        }
        
        .robot {
          bottom: 20%;
          left: 15%;
          animation: float 6s ease-in-out infinite;
        }
        
        .chart {
          bottom: 20%;
          right: 15%;
          animation: float 7s ease-in-out infinite reverse;
        }
        
        .database {
          top: 40%;
          right: 10%;
          animation: float 5s ease-in-out infinite;
        }
        
        /* New pulse animation for hero graphic */
        .pulse-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(67, 97, 238, 0.3);
          animation: pulse 3s ease-out infinite;
        }
        
        .delay-1 {
          animation-delay: 1s;
        }
        
        .delay-2 {
          animation-delay: 2s;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.1);
            opacity: 0;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
        
        @keyframes spin {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        /* New Feature Highlights - Replacing percentage stats */
        .feature-highlights {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          z-index: 1;
          position: relative;
        }
        
        .feature-highlight-item {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          max-width: 320px;
          transition: all 0.3s ease;
        }
        
        .feature-highlight-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }
        
        .feature-icon {
          font-size: 2rem;
          color: var(--primary);
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .feature-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
          color: #333;
        }
        
        .feature-content p {
          font-size: 0.95rem;
          color: #666;
          margin: 0;
        }
        
        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 1;
        }
        
        .hero-wave svg {
          fill: white;
          width: 100%;
          height: 120px;
        }
        
        /* Services Overview Styles */
        .service-categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .category-btn {
          padding: 0.75rem 1.5rem;
          background: #f8f9fa;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .category-btn:hover {
          background: #e9ecef;
          transform: translateY(-2px);
        }
        
        .category-btn.active {
          background: var(--gradient-1);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
          gap: 2rem;
        }
        
        /* Approach Section Styles */
        .approach-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .approach-steps {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .approach-step {
          display: flex;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .approach-step:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 40px;
          left: 24px;
          width: 2px;
          height: calc(100% + 2rem);
          background: var(--gradient-1);
        }
        
        .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--gradient-1);
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          border-radius: 50%;
          margin-right: 1.5rem;
          z-index: 1;
          flex-shrink: 0;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .step-content {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
          flex-grow: 1;
          position: relative;
          transition: all 0.3s;
        }
        
        .step-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .step-content h3 {
          margin-bottom: 0.5rem;
          color: var(--primary);
          font-size: 1.3rem;
        }
        
        .step-icon {
          position: absolute;
          right: 20px;
          top: 20px;
          font-size: 1.5rem;
          opacity: 0.2;
          color: var(--primary);
        }
        
        /* Enhanced Business Impact Section */
        .business-impact-section {
          background: white;
          position: relative;
          overflow: hidden;
        }
        
        .impact-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}

.impact-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, var(--primary), #4cc9f0);
  top: -100px;
  right: -100px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #3a0ca3, var(--primary));
  bottom: -50px;
  left: -50px;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #4895ef, #4361ee);
  bottom: 100px;
  right: 30%;
}

.impact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.impact-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.impact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.impact-icon {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.8rem;
  color: white;
}

.impact-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #333;
}

.impact-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.impact-cta {
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .services-hero-content {
    flex-direction: column;
    padding: 4rem 0;
  }
  
  .hero-text {
    padding-right: 0;
    margin-bottom: 3rem;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 2.8rem;
  }
  
  .hero-text p {
    margin: 0 auto 2rem;
  }
  
  .hero-cta {
    justify-content: center;
  }
  
  .automation-graphic {
    width: 300px;
    height: 300px;
  }
  
  .feature-highlights {
    flex-direction: column;
    align-items: center;
  }
  
  .feature-highlight-item {
    width: 100%;
    max-width: 400px;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .hero-text h1 {
    font-size: 2.2rem;
  }
  
  .hero-text p {
    font-size: 1.1rem;
  }
  
  .automation-graphic {
    width: 250px;
    height: 250px;
  }
  
  .graphic-element {
    width: 60px;
    height: 60px;
  }
  
  .animated-icon {
    font-size: 1.5rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .approach-step:not(:last-child)::after {
    left: 22px;
  }
  
  .step-number {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  .hero-cta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn-outline {
    margin-left: 0;
  }
}

@media (max-width: 480px) {
          .hero-text h1 {
            font-size: 1.8rem;
          }

          .service-categories {
            flex-direction: column;
            gap: 0.5rem;
          }

          .category-btn {
            width: 100%;
          }

          .approach-step {
            flex-direction: column;
          }

          .step-number {
            margin-bottom: 1rem;
          }

          .approach-step:not(:last-child)::after {
            display: none;
          }

          .impact-cards {
            grid-template-columns: 1fr;
          }
        }

        /* CSS Variables */
        :root {
          --primary: #4361ee;
          --primary-rgb: 67, 97, 238;
          --secondary: #4cc9f0;
          --dark: #212529;
          --light: #f8f9fa;
          --gradient-1: linear-gradient(90deg, #4361ee, #4cc9f0);
        }
          .automation-graphic {
  position: relative;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.graphic-element {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-right:50%;
}

.animated-icon {
  font-size: 2rem;
  color: var(--primary);
}

/* Place robot in center */
.robot {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px; /* Slightly larger for emphasis */
  height: 100px;
  z-index: 2; /* Ensure it appears above other elements */
  animation: pulseCenter 3s ease-in-out infinite;
}

/* Position other elements in a sequence around the border */
.gear {
  animation: orbitAnimation 12s linear infinite;
  /* Starting position - top of the circle */
  animation-delay: 0s;
}

.chart {
  animation: orbitAnimation 12s linear infinite;
  /* Delayed to follow the gear */
  animation-delay: -4s;
}

.database {
  animation: orbitAnimation 12s linear infinite;
  /* Delayed to follow the chart */
  animation-delay: -8s;
}

/* Pulse circles - making sure they're centered */
.pulse-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(67, 97, 238, 0.3);
  top: 0;
  left: 0;
  animation: pulse 3s ease-out infinite;
}

.delay-1 {
  animation-delay: 1s;
}

.delay-2 {
  animation-delay: 2s;
}

/* Animation for orbiting elements in sequence */
@keyframes orbitAnimation {
  0% {
    transform: rotate(0deg) translateX(160px) rotate(0deg);
    top: 50%;
    left: 50%;
  }
  100% {
    transform: rotate(360deg) translateX(160px) rotate(-360deg);
    top: 50%;
    left: 50%;
  }
}

/* Subtle pulse animation for the center robot */
@keyframes pulseCenter {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 8px 25px rgba(67, 97, 238, 0.2);
  }
}

/* Maintain the pulse animation */
@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .automation-graphic {
    width: 300px;
    height: 300px;
  }
  
  .graphic-element {
    width: 60px;
    height: 60px;
  }
  
  .robot {
    width: 80px;
    height: 80px;
  }
  
  @keyframes orbitAnimation {
    0% {
      transform: rotate(0deg) translateX(120px) rotate(0deg);
      top: 50%;
      left: 50%;
    }
    100% {
      transform: rotate(360deg) translateX(120px) rotate(-360deg);
      top: 50%;
      left: 50%;
    }
  }
}

@media (max-width: 768px) {
  .automation-graphic {
    width: 250px;
    height: 250px;
  }
  
  .graphic-element {
    width: 50px;
    height: 50px;
  }
  
  .robot {
    width: 70px;
    height: 70px;
  }
  
  .animated-icon {
    font-size: 1.5rem;
  }
  
  @keyframes orbitAnimation {
    0% {
      transform: rotate(0deg) translateX(100px) rotate(0deg);
      top: 50%;
      left: 50%;
    }
    100% {
      transform: rotate(360deg) translateX(100px) rotate(-360deg);
      top: 50%;
      left: 50%;
    }
  }
}

@media (max-width: 480px) {
  .automation-graphic {
    width: 200px;
    height: 200px;
  }
  
  .graphic-element {
    width: 40px;
    height: 40px;
  }
  
  .robot {
    width: 60px;
    height: 60px;
  }
  
  .animated-icon {
    font-size: 1.2rem;
  }
  
  @keyframes orbitAnimation {
    0% {
      transform: rotate(0deg) translateX(80px) rotate(0deg);
      top: 50%;
      left: 50%;
    }
    100% {
      transform: rotate(360deg) translateX(80px) rotate(-360deg);
      top: 50%;
      left: 50%;
    }
  }
}
      `}</style>
    </div>
  );
};

export default Services;