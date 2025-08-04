import { motion } from 'framer-motion';
import { FaRobot, FaUsers, FaLightbulb, FaShieldAlt, FaClock, FaChartLine, FaHandHoldingUsd } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="about-page">
      {/* Enhanced Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content container">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>About Our <span className="gradient-text">RPA Team</span></h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We're a team of passionate RPA experts dedicated to transforming how businesses operate through intelligent automation.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="btn primary-btn" onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}>
                Explore
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Transparent SVG animation */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" className="hero-svg" preserveAspectRatio="xMidYMid meet">
              {/* Define gradients */}
              <defs>
                <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4361ee" />
                  <stop offset="100%" stopColor="#3a0ca3" />
                </linearGradient>
              </defs>
              
              {/* Abstract network background */}
              <g id="network">
                <circle cx="300" cy="250" r="150" fill="none" stroke="#4361ee" strokeWidth="1" strokeOpacity="0.2" id="mainCircle">
                  <animate attributeName="r" values="150;160;150" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="250" r="100" fill="none" stroke="#4361ee" strokeWidth="1" strokeOpacity="0.2">
                  <animate attributeName="r" values="100;110;100" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="250" r="50" fill="none" stroke="#4361ee" strokeWidth="1" strokeOpacity="0.2">
                  <animate attributeName="r" values="50;55;50" dur="4s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Connection nodes */}
              <g id="nodes">
                {/* Node 1 */}
                <circle cx="200" cy="150" r="15" fill="#4361ee" fillOpacity="0.7">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="200" y="154" textAnchor="middle" fontSize="10" fill="#ffffff" fillOpacity="0.9">API</text>
                
                {/* Node 2 */}
                <circle cx="400" cy="150" r="15" fill="#3a0ca3" fillOpacity="0.7">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
                </circle>
                <text x="400" y="154" textAnchor="middle" fontSize="10" fill="#ffffff" fillOpacity="0.9">ERP</text>
                
                {/* Node 3 */}
                <circle cx="450" cy="300" r="15" fill="#4361ee" fillOpacity="0.7">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" repeatCount="indefinite" />
                </circle>
                <text x="450" y="304" textAnchor="middle" fontSize="10" fill="#ffffff" fillOpacity="0.9">CRM</text>
                
                {/* Node 4 */}
                <circle cx="150" cy="300" r="15" fill="#3a0ca3" fillOpacity="0.7">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="6s" repeatCount="indefinite" />
                </circle>
                <text x="150" y="304" textAnchor="middle" fontSize="10" fill="#ffffff" fillOpacity="0.9">DB</text>
                
                {/* Node 5 */}
                <circle cx="300" cy="400" r="15" fill="#4361ee" fillOpacity="0.7">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
                </circle>
                <text x="300" y="404" textAnchor="middle" fontSize="10" fill="#ffffff" fillOpacity="0.9">UI</text>
              </g>
              
              {/* Connecting lines with animations */}
              <g id="connections" strokeWidth="2" strokeDasharray="5,5">
                {/* Central Bot to nodes */}
                <line x1="300" y1="250" x2="200" y2="150" stroke="#4361ee" strokeOpacity="0.6">
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="300" y1="250" x2="400" y2="150" stroke="#3a0ca3" strokeOpacity="0.6">
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="300" y1="250" x2="450" y2="300" stroke="#4361ee" strokeOpacity="0.6">
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="300" y1="250" x2="150" y2="300" stroke="#3a0ca3" strokeOpacity="0.6">
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
                </line>
                <line x1="300" y1="250" x2="300" y2="400" stroke="#4361ee" strokeOpacity="0.6">
                  <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.8s" repeatCount="indefinite" />
                </line>
              </g>
              
              {/* Central RPA Bot */}
              <g id="rpaBot">
                {/* Bot body */}
                <rect x="260" y="210" width="80" height="80" rx="15" fill="url(#robotGradient)" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
                </rect>
                
                {/* Bot "eyes" */}
                <circle cx="280" cy="235" r="8" fill="#ffffff" />
                <circle cx="320" cy="235" r="8" fill="#ffffff" />
                
                {/* Bot "pupils" */}
                <circle cx="280" cy="235" r="3" fill="#333333">
                  <animate attributeName="cy" values="235;234;235;236;235" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="320" cy="235" r="3" fill="#333333">
                  <animate attributeName="cy" values="235;234;235;236;235" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Bot "antenna" */}
                <line x1="300" y1="210" x2="300" y2="190" stroke="#4361ee" strokeWidth="4" />
                <circle cx="300" cy="185" r="5" fill="#3a0ca3">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
                </circle>
                
                {/* Bot "mouth" - moved lower and made neater */}
                <path d="M275,260 Q300,273 325,260" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round">
                  <animate attributeName="d" values="M275,260 Q300,273 325,260;M275,262 Q300,275 325,262;M275,260 Q300,273 325,260" dur="5s" repeatCount="indefinite" />
                </path>
              </g>
              
              {/* Pulsing center circle */}
              <circle cx="300" cy="285" r="8" fill="#ffffff" opacity="0.8">
                <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Floating data symbols */}
              <g id="floatingSymbols" fontWeight="bold" fontFamily="monospace">
                <text x="170" y="200" fill="#4361ee" opacity="0.7" fontSize="14">
                  <animate attributeName="y" values="200;190;200" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
                  &lt;/&gt;
                </text>
                <text x="420" y="210" fill="#3a0ca3" opacity="0.7" fontSize="14">
                  <animate attributeName="y" values="210;200;210" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" repeatCount="indefinite" />
                  {'{ }'}
                </text>
                <text x="350" y="360" fill="#4361ee" opacity="0.7" fontSize="14">
                  <animate attributeName="y" values="360;350;360" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="6s" repeatCount="indefinite" />
                  01
                </text>
                <text x="250" y="350" fill="#3a0ca3" opacity="0.7" fontSize="14">
                  <animate attributeName="y" values="350;360;350" dur="5.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="5.5s" repeatCount="indefinite" />
                  @_@
                </text>
              </g>
              
              {/* Data flow animation */}
              <g id="dataFlow">
                <circle cx="300" cy="250" r="3" fill="#4361ee" opacity="0.6">
                  <animateMotion path="M0,0 L-100,-100" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="250" r="3" fill="#3a0ca3" opacity="0.6">
                  <animateMotion path="M0,0 L100,-100" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="250" r="3" fill="#4361ee" opacity="0.6">
                  <animateMotion path="M0,0 L150,50" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="250" r="3" fill="#3a0ca3" opacity="0.6">
                  <animateMotion path="M0,0 L-150,50" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="250" r="3" fill="#4361ee" opacity="0.6">
                  <animateMotion path="M0,0 L0,150" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Gear animations */}
              <g id="gears">
                <path d="M180,370 L185,365 L190,370 L185,375 z" fill="#4361ee" fillOpacity="0.7">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 185 370" to="360 185 370" dur="10s" repeatCount="indefinite" />
                </path>
                <circle cx="185" cy="370" r="5" fill="#3a0ca3" fillOpacity="0.7" />
                
                <path d="M420,370 L425,365 L430,370 L425,375 z" fill="#4361ee" fillOpacity="0.7">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 425 370" to="-360 425 370" dur="10s" repeatCount="indefinite" />
                </path>
                <circle cx="425" cy="370" r="5" fill="#3a0ca3" fillOpacity="0.7" />
              </g>
            </svg>
          </motion.div>
        </div>
        
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,85.3C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="stat-item" variants={fadeInUp}>
              <h3>5+</h3>
              <p>Years Experience</p>
            </motion.div>
            
            <motion.div className="stat-item" variants={fadeInUp}>
              <h3>100+</h3>
              <p>Projects Delivered</p>
            </motion.div>
            
            <motion.div className="stat-item" variants={fadeInUp}>
              <h3>250+</h3>
              <p>Happy Clients</p>
            </motion.div>
            
            <motion.div className="stat-item" variants={fadeInUp}>
              <h3>30+</h3>
              <p>RPA Experts</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Our Story Section */}
      <section className="story-section section" id="story">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="image-wrapper">
                <div className="story-icon">
                  <FaHandHoldingUsd size={120} color="#4361ee" />
                </div>
                <div className="image-accent"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="story-content"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="section-header">
                <span className="overline">Who We Are</span>
                <h2>Our Story</h2>
                <div className="underline"></div>
              </div>
              
              <p>As a Microsoft Gold-Certified Partner, our RPA team emerged from a vision to help businesses embrace digital transformation through automation. What started as a small group of automation enthusiasts has grown into a full-fledged team of RPA experts.</p>
              
              <p>We've partnered with organizations across industries, from finance and healthcare to retail and manufacturing, delivering tailored RPA solutions that address their unique challenges and unlock new opportunities for growth.</p>
              
              <p>Our approach combines technical expertise with deep business understanding, ensuring that every automation solution we deliver creates tangible value and drives meaningful results.</p>
              
              <motion.div
                className="story-features"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="feature">
                  <div className="feature-icon">
                    <FaRobot />
                  </div>
                  <div className="feature-text">
                    <h4>Expert Team</h4>
                    <p>Certified RPA developers with cross-industry experience</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <FaClock />
                  </div>
                  <div className="feature-text">
                    <h4>Rapid Delivery</h4>
                    <p>Efficient implementation methodology for faster ROI</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="overline">Our Principles</span>
            <h2>Core Values</h2>
            <div className="underline center"></div>
            <p className="section-subtitle">The principles that guide our approach to RPA</p>
          </motion.div>
          
          <motion.div 
            className="values-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="value-card"
              whileHover={{ y: -15, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              variants={fadeInUp}
            >
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h3>Innovation</h3>
              <p>We continually explore new technologies and approaches to deliver cutting-edge RPA solutions.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              whileHover={{ y: -15, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              variants={fadeInUp}
            >
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Collaboration</h3>
              <p>We work closely with our clients to understand their needs and develop tailored solutions.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              whileHover={{ y: -15, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              variants={fadeInUp}
            >
              <div className="value-icon">
                <FaShieldAlt />
              </div>
              <h3>Quality</h3>
              <p>We maintain the highest standards in our work, ensuring reliable and secure automation solutions.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              whileHover={{ y: -15, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              variants={fadeInUp}
            >
              <div className="value-icon">
                <FaChartLine />
              </div>
              <h3>Impact</h3>
              <p>We focus on delivering solutions that create measurable value and tangible results.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
     {/* Enhanced Timeline Section */}
         <section className="timeline-section section">
           <div className="container">
             <motion.div 
               className="section-header text-center"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
             >
               <span className="overline">Our Progress</span>
               <h2>Our Journey</h2>
               <div className="underline center"></div>
               <p className="section-subtitle">Key milestones in our evolution</p>
             </motion.div>
             
             <div className="timeline">
             <motion.div 
                 className="timeline-item"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
               >
                 <div className="timeline-dot"></div>
                 <div className="timeline-content">
                   <div className="timeline-year">2025</div>
                   <h3>Future</h3>
                   <p>Continuing to innovate and expand our RPA offerings</p>
                 </div>
               </motion.div>
               <motion.div 
                 className="timeline-item"
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
               >
                 <div className="timeline-dot"></div>
                 <div className="timeline-content">
                   <div className="timeline-year">2024</div>
                   <h3>Integration</h3>
                   <p>Integrated AI capabilities into our RPA solutions</p>
                 </div>
               </motion.div>
               <motion.div 
                 className="timeline-item"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
               >
                 <div className="timeline-dot"></div>
                 <div className="timeline-content">
                   <div className="timeline-year">2023</div>
                   <h3>Achievement</h3>
                   <p>Achieved 100+ successful RPA implementations across industries</p>
                 </div>
               </motion.div>
               <motion.div 
                 className="timeline-item"
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
               >
                 <div className="timeline-dot"></div>
                 <div className="timeline-content">
                   <div className="timeline-year">2022</div>
                   <h3>Innovation</h3>
                   <p>Launched our proprietary RPA acceleration framework</p>
                 </div>
               </motion.div>
                <motion.div 
                 className="timeline-item"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
               >
                 <div className="timeline-dot"></div>
                 <div className="timeline-content">
                   <div className="timeline-year">2021</div>
                   <h3>Growth</h3>
                   <p>Expanded our team and delivered our first enterprise RPA solution</p>
                 </div>
               </motion.div>
               
               <motion.div 
                 className="timeline-item"
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
               >
                 <div className="timeline-dot"></div>
                 <div className="timeline-content">
                   <div className="timeline-year">2020</div>
                   <h3>Foundation</h3>
                   <p>Founded with a vision to democratize RPA for businesses of all sizes</p>
                 </div>
               </motion.div>
          </div>
        </div>
      </section>
      
      <style jsx="true">{`
        /* Global Styles */
        :root {
          --primary: #4361ee;
          --primary-light: #4895ef;
          --primary-dark: #3a0ca3;
          --secondary: #f72585;
          --text-dark: #2b2d42;
          --text-light: #6c757d;
          --bg-light: #f8f9fa;
          --bg-dark: #212529;
          --white: #ffffff;
          --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }
        
        /* Reset and base styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          scroll-behavior: smooth;
        }
        
        .about-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: var(--text-dark);
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }
        
        .section {
          padding: 6rem 0;
          width: 100%;
        }
        
        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .text-center {
          text-align: center;
        }
        
        /* Button Styles */
        .btn {
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          border: none;
          font-size: 1rem;
          display: inline-block;
          text-decoration: none;
          margin-right: 1rem;
        }
        
        .primary-btn {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: var(--white);
          box-shadow: 0 4px 15px rgba(67, 97, 238, 0.4);
        }
        
        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(67, 97, 238, 0.6);
        }
        
        /* Section Header Styles */
        .section-header {
          margin-bottom: 3rem;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-top: 1rem;
        }
        
        .overline {
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 2px;
          color: var(--primary);
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .underline {
          height: 4px;
          width: 60px;
          background: linear-gradient(90deg, var(--primary), var(--primary-dark));
          border-radius: 2px;
        }
        
        .underline.center {
          margin: 0 auto;
        }
        
        /* Hero Section Styles */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, #f1f9fe 0%, #dcf1fd 100%);
          padding: 8rem 0 10rem;
          overflow: hidden;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 10% 10%, rgba(67, 97, 238, 0.05) 0%, transparent 60%),
                            radial-gradient(circle at 90% 90%, rgba(58, 12, 163, 0.05) 0%, transparent 60%);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .hero-text {
          width: 50%;
        }
        
        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        
        .gradient-text {
          background: linear-gradient(to right, var(--primary), var(--primary-dark));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .hero-text p {
          font-size: 1.2rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          max-width: 90%;
        }
        
        .hero-buttons {
          display: flex;
          margin-top: 2rem;
        }
        
        .hero-image {
          width: 50%;
          padding: 1rem;
        }
        
        .hero-svg {
          width: 100%;
          max-height: 400px;
        }
        
        .hero-wave {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          z-index: 2;
        }
        
        .hero-wave svg {
          display: block;
          width: 100%;
          height: auto;
        }
        
        /* Stats Section Styles */
        .stats-section {
          padding: 4rem 0;
          background-color: var(--white);
          position: relative;
          z-index: 3;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        
        .stat-item {
          text-align: center;
          padding: 2rem;
          border-radius: 10px;
          background-color: var(--white);
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .stat-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .stat-item h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        
        .stat-item p {
          font-size: 1rem;
          color: var(--text-light);
          margin: 0;
        }
        
        /* Story Section Styles */
        .story-section {
          background-color: var(--bg-light);
          position: relative;
        }
        
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .story-image {
          position: relative;
        }
        
        .image-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .story-icon {
          padding: 3rem;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: var(--shadow);
          position: relative;
          z-index: 2;
        }
        
       .image-accent {
          position: absolute;
          width: 80%;
          height: 150%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          left: 10%;
          z-index: 1;
        }
        
        @keyframes morphing {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
          }
          100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
        }
        
        .story-content p {
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          color: var(--text-light);
        }
        
        .story-features {
          margin-top: 2.5rem;
        }
        
        .feature {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .feature-icon {
          background-color: rgba(67, 97, 238, 0.1);
          color: var(--primary);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          margin-right: 1.5rem;
          flex-shrink: 0;
        }
        
        .feature-text h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        
        .feature-text p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }
        
        /* Values Section Styles */
        .values-section {
          background-color: var(--white);
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .value-card {
          background-color: var(--white);
          border-radius: 15px;
          box-shadow: var(--shadow);
          padding: 2.5rem 2rem;
          text-align: center;
          transition: var(--transition);
        }
        
        .value-icon {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: var(--white);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.8rem;
          margin: 0 auto 1.5rem;
        }
        
        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .value-card p {
          color: var(--text-light);
          font-size: 1rem;
        }
        
        /* Timeline Section Styles */
        .timeline-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }
        
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--primary), var(--primary-light));
          border-radius: 2px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          width: 100%;
          display: flex;
        }
        
        .timeline-item:nth-child(odd) {
          justify-content: flex-start;
        }
        
        .timeline-item:nth-child(even) {
          justify-content: flex-end;
        }
        
        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 20px;
          transform: translateX(-50%);
          width: 24px;
          height: 24px;
          background: var(--white);
          border: 5px solid var(--primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        .timeline-content {
          width: 43%;
          padding: 1.5rem;
          background: var(--white);
          border-radius: 15px;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-year {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: var(--white);
          padding: 0.3rem 1rem;
          border-radius: 30px;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .timeline-content h3 {
          color: var(--text-dark);
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }
        
        .timeline-content p {
          color: var(--text-light);
          margin-bottom: 0;
          line-height: 1.6;
        }
        
        /* Responsive Styles */
        @media (max-width: 1200px) {
          .hero-text h1 {
            font-size: 3rem;
          }
          
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 992px) {
          .section {
            padding: 4rem 0;
          }
          
          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
            padding: 4rem 0;
          }
          
          .hero-text {
            max-width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-image {
            margin-left: 0;
            max-width: 80%;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .story-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .image-accent {
            top: 5%;
            left: 10%;
          }
        }
        
        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }
          
          .hero-text p {
            font-size: 1.1rem;
          }
          
          .story-features {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
           .timeline::before {
            left: 30px;
          }
          
          .timeline-item:nth-child(odd),
          .timeline-item:nth-child(even) {
            justify-content: flex-start;
            padding-left: 60px;
          }
          
          .timeline-dot {
            left: 30px;
          }
          
          .timeline-content {
            width: 100%;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
        
        /* Responsive Styles */
        @media (max-width: 992px) {
          .hero-text h1 {
            font-size: 2.8rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 4rem 0;
          }
          
          .hero-section {
            padding: 6rem 0 8rem;
          }
          
          .hero-content {
            flex-direction: column;
          }
          
          .hero-text, .hero-image {
            width: 100%;
            text-align: center;
          }
          
          .hero-text p {
            max-width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-image {
            margin-top: 3rem;
          }
          
          .story-grid, .values-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .story-image {
            order: -1;
          }
          
          .timeline::before {
            left: 20px;
          }
          
          .timeline-item {
            width: 100%;
            padding-left: 5rem !important;
            padding-right: 0 !important;
            float: none !important;
            text-align: left !important;
          }
          
          .timeline-dot {
            left: 20px !important;
            right: auto !important;
          }
        }
        
        @media (max-width: 576px) {
          .container {
            width: 95%;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .hero-text h1 {
            font-size: 2.2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .timeline::before {
            left: 20px;
          }
          
          .timeline-item {
            width: 100%;
            padding-left: 5rem !important;
            padding-right: 0 !important;
            float: none !important;
            text-align: left !important;
          }
          
          .timeline-dot {
            left: 20px !important;
            right: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;