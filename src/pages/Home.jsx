import { motion } from 'framer-motion';
import { FaRocket, FaCogs, FaChartLine, FaRobot, FaDatabase, FaUsers, FaArrowRight } from 'react-icons/fa';
import { BsLightningChargeFill, BsCpu, BsBarChartFill } from 'react-icons/bs';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = ({ openLoginModal }) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const wave = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <svg className="wave-top" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.2, pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,128C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="#0078d4"
              fillOpacity="0.15"
            />
          </svg>
          <svg className="wave-bottom" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.2, pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#5c2d91"
              fillOpacity="0.1"
            />
          </svg>
        </div>
        
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero-badge" variants={fadeInUp}>
              <BsLightningChargeFill />
              <span>Intelligent Automation</span>
            </motion.div>
            
            <motion.h1 
              className="gradient-text"
              variants={fadeInUp}
            >
              Transforming Business Operations with RPA
            </motion.h1>
            
            <motion.p variants={fadeInUp}>
              Our RPA solutions automate repetitive tasks, increase efficiency, and reduce costs for businesses of all sizes.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={fadeInUp}
            >
              <Button 
                onClick={openLoginModal}
                className="get-started-btn"
              >
                <span>Get Started</span>
                <FaArrowRight />
              </Button>
              
              <motion.a 
                href="#features" 
                className="text-link"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features <FaArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-graphic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="graphic-container">
              <motion.div 
                className="floating-icon icon-primary"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <BsLightningChargeFill />
              </motion.div>
              
              <motion.div 
                className="floating-icon icon-secondary"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              >
                <BsCpu />
              </motion.div>
              
              <motion.div 
                className="floating-icon icon-tertiary"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ 
                  duration: 4.5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                <BsBarChartFill />
              </motion.div>
              
              <div className="main-graphic">
                <motion.svg width="280" height="280" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle 
                    cx="100" cy="100" r="80" 
                    fill="none" 
                    stroke="url(#circleGradient)" 
                    strokeWidth="6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  
                  <motion.path 
                    d="M100,20 L100,100 L140,140" 
                    fill="none" 
                    stroke="#0078d4" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                  
                  <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0078d4" />
                      <stop offset="100%" stopColor="#5c2d91" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Why Choose Our RPA Solutions?</h2>
            <p>Transform your business operations with cutting-edge automation</p>
          </motion.div>
          
          <div className="grid-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                icon={<FaRocket />}
                title="Increased Efficiency"
                description="Automate repetitive tasks and workflows to free up your team for higher-value activities."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                icon={<FaCogs />}
                title="Process Optimization"
                description="Streamline and standardize your business processes for consistent results every time."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                icon={<FaChartLine />}
                title="Cost Reduction"
                description="Minimize operational costs by automating manual tasks and reducing human error."
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="section use-cases-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Unlimited Automation Use Cases</h2>
            <p>Discover how our RPA solutions are transforming industries</p>
          </motion.div>
          
          <div className="grid-2">
            <motion.div 
              className="use-case"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="use-case-icon">
                <FaRobot />
              </div>
              <div className="use-case-content">
                <h3>Customer Service Automation</h3>
                <p>Automate customer onboarding, query handling, and support ticket processing to improve response times and customer satisfaction.</p>
                <a href="/services" className="use-case-link">
                  Learn More <FaArrowRight />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="use-case"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="use-case-icon">
                <FaDatabase />
              </div>
              <div className="use-case-content">
                <h3>Data Processing & Migration</h3>
                <p>Streamline data entry, validation, and migration between systems with automated workflows that ensure accuracy and consistency.</p>
                <a href="/services" className="use-case-link">
                  Learn More <FaArrowRight />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="use-case"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="use-case-icon">
                <FaUsers />
              </div>
              <div className="use-case-content">
                <h3>HR Process Automation</h3>
                <p>Automate employee onboarding, payroll processing, and benefits administration to reduce manual effort and improve accuracy.</p>
                <a href="/services" className="use-case-link">
                  Learn More <FaArrowRight />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="use-case"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="use-case-icon">
                <FaChartLine />
              </div>
              <div className="use-case-content">
                <h3>Financial Reporting</h3>
                <p>Automate financial data collection, report generation, and compliance checks to ensure timely and accurate financial reporting.</p>
                <a href="/services" className="use-case-link">
                  Learn More <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <style jsx = "true">{`
        :root {
          --primary-blue: #0078d4;
          --primary-purple: #5c2d91;
          --secondary-blue: #50e6ff;
          --gradient-bg: linear-gradient(135deg, #f0f6ff 0%, #f4eeff 100%);
          --gradient-primary: linear-gradient(135deg, #0078d4 0%, #5c2d91 100%);
          --gradient-button: linear-gradient(135deg, #5c2d91 0%, #0078d4 100%);
          --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          --navbar-height: 80px;
        }
        
        .home-page {
          background: white;
          position: relative;
          min-height: 100vh;
          width: 100%;
          padding-top: var(--navbar-height);
        }

        .hero-section {
          background: var(--gradient-bg);
          padding: 4rem 0 6rem;
          overflow: hidden;
          position: relative;
          width: 100%;
          margin-top: 0;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .wave-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
        }
        
        .wave-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: auto;
        }
        
        .hero-container {
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          max-width: 600px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          box-shadow: 0 5px 15px rgba(92, 45, 145, 0.15);
          border: 1px solid rgba(0, 120, 212, 0.1);
        }
        
        .hero-badge svg {
          color: var(--primary-blue);
          margin-right: 0.5rem;
          font-size: 1.2rem;
        }
        
        .hero-badge span {
          font-weight: 600;
          color: var(--primary-purple);
          letter-spacing: 0.5px;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          color: #495057;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .get-started-btn {
          background: var(--gradient-button) !important;
          border-radius: 30px !important;
          padding: 0.9rem 2.2rem !important;
          font-size: 1.1rem !important;
          font-weight: 600 !important;
          display: flex !important;
          align-items: center !important;
          gap: 0.8rem !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 5px 15px rgba(92, 45, 145, 0.3) !important;
          position: relative;
          overflow: hidden !important;
        }
        
        .get-started-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(45deg);
          z-index: 0;
          transition: all 0.6s ease;
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-150%) rotate(45deg);
          }
          100% {
            transform: translateX(150%) rotate(45deg);
          }
        }
        
        .get-started-btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 20px rgba(92, 45, 145, 0.4) !important;
        }
        
        .text-link {
          display: flex;
          align-items: center;
          color: var(--primary-purple);
          font-weight: 600;
          text-decoration: none;
          gap: 0.5rem;
          transition: all 0.3s;
        }
        
        .text-link svg {
          transition: transform 0.3s;
        }
        
        .text-link:hover {
          color: var(--primary-blue);
        }
        
        .text-link:hover svg {
          transform: translateX(5px);
        }
        
        .hero-graphic {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .graphic-container {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .floating-icon {
          position: absolute;
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: var(--shadow);
          font-size: 1.8rem;
        }
        
        .icon-primary {
          top: 10%;
          right: 0;
          color: var(--primary-blue);
          box-shadow: 0 5px 15px rgba(0, 120, 212, 0.2);
        }
        
        .icon-secondary {
          bottom: 10%;
          left: 0;
          color: var(--primary-purple);
          box-shadow: 0 5px 15px rgba(92, 45, 145, 0.2);
        }
        
        .icon-tertiary {
          top: 50%;
          right: -10%;
          color: #2ecc71;
          box-shadow: 0 5px 15px rgba(46, 204, 113, 0.2);
        }
        
        .main-graphic {
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 30px rgba(92, 45, 145, 0.15);
          border: 1px solid rgba(0, 120, 212, 0.1);
        }
        
        .container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .section {
          padding: 6rem 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          width: 100%;
        }
        
        .section-header h2 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        
        .section-header p {
          font-size: 1.3rem;
          color: #6c757d;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .features-section {
          background: white;
          position: relative;
          overflow: hidden;
        }
        
        .features-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at top right, rgba(92, 45, 145, 0.03) 0%, transparent 70%),
                      radial-gradient(circle at bottom left, rgba(0, 120, 212, 0.03) 0%, transparent 70%);
          z-index: 0;
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 2.5rem;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        
        .use-cases-section {
          background: var(--gradient-bg);
          position: relative;
          overflow: hidden;
        }
        
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2.5rem;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        
        .use-case {
          display: flex;
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 120, 212, 0.05);
        }
        
        .use-case:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .use-case-icon {
          font-size: 2.5rem;
          margin-right: 1.8rem;
          color: var(--primary-purple);
          background: rgba(92, 45, 145, 0.05);
          height: 60px;
          width: 60px;
          min-width: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .use-case:hover .use-case-icon {
          background: var(--gradient-primary);
          color: white;
          transform: scale(1.1);
        }
        
        .use-case-content h3 {
          margin-bottom: 1rem;
          color: var(--primary-blue);
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .use-case-content p {
          color: #6c757d;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .use-case-link {
          display: flex;
          align-items: center;
          color: var(--primary-purple);
          font-weight: 600;
          transition: all 0.3s;
          text-decoration: none;
        }
        
        .use-case-link svg {
          margin-left: 0.5rem;
          transition: transform 0.3s;
        }
        
        .use-case-link:hover svg {
          transform: translateX(5px);
        }
        
        .use-case-link:hover {
          color: var(--primary-blue);
        }
        
        @media (max-width: 992px) {
          .hero-section {
            padding: 6rem 0 4rem;
          }
          
          .hero-section .container {
            flex-direction: column;
            text-align: center;
          }
          
          .hero-content {
            margin-bottom: 4rem;
            max-width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-content h1 {
            font-size: 3rem;
          }
          
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .section-header h2 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .section-header h2 {
            font-size: 2.2rem;
          }
          
          .grid-3, .grid-2 {
            grid-template-columns: 1fr;
          }
          
          .use-case {
            flex-direction: column;
          }
          
          .use-case-icon {
            margin-right: 0;
            margin-bottom: 1.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          
          .text-link {
            margin-top: 0.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }
          
          .hero-content p {
            font-size: 1.1rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .section-header p {
            font-size: 1.1rem;
          }
          
          .section {
            padding: 4rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;