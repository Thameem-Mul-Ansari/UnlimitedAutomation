import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-section contact-section">
          <div className="contact-info">
            <p>📍 2401 E Katella Ave, Suite 450</p>
            <p>Anaheim, CA 92806</p>
            <p>📞 (714) 912-1600</p>
            <p>✉️ info@ubtiinc.com</p>
         <p className="">
              <a href="https://www.linkedin.com/company/ubti/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://twitter.com/ubtiinc" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://www.youtube.com/channel/UCPoCQsgtUooguMjwJgvLjQA" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <div className="quick-links">
            <h3 className="section-heading">Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>
        </div>

        {/* Microsoft Solutions Partner */}
        <div className="footer-section partner-section">
          <div className="ms-partner">
            <img
              src="https://149510500.v2.pressablecdn.com/wp-content/uploads/2024/01/Microsoft-Solution-Partner-1.1-574-x-249-px-1.png"
              alt="Microsoft Solutions Partner"
              className="ms-partner-image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// CSS (can be in a separate file or styled-components)
const styles = `
.footer-container {
  background: linear-gradient(135deg, #121212 0%, #2c3e50 50%, #121212 100%);
  color: #ecf0f1;
  padding: 40px 0 20px;
  width: 100%;
  font-family: 'Segoe UI', Arial, sans-serif;
  box-shadow: 0 -5px 15px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.footer-section {
  margin-bottom: 20px;
}

.contact-section {
  display: flex;
  flex-direction: column;
}

.contact-info p {
  margin: 8px 0;
  line-height: 1.6;
  color: #ecf0f1;
  display: flex;
  align-items: center;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-icon {
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.social-link:hover {
  background-color: #3498db;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}


.quick-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quick-links li {
  margin-bottom: 12px;
}

.quick-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 0.95rem;
  display: inline-block;
  position: relative;
}

.quick-links a:hover {
  color: #3498db;
  transform: translateX(5px);
}

.section-heading {
  color: #3498db;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

li {
  list-style-type: none;
}

.partner-section {
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.ms-partner {
  text-align: right;
}

.ms-partner-image {
  width: 100%;
  max-width: 350px;
  align-items: center;
  margin-top: 50px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
  transition: transform 0.3s;
}

.ms-partner-image:hover {
  transform: scale(1.02);
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
  
  .partner-section {
    justify-content: flex-start;
    grid-column: span 2;
  }
  
  .ms-partner {
    text-align: center;
    width: 100%;
  }
  
  .ms-partner-image {
    max-width: 300px;
    margin: 0 auto;
  }

  .social-icons {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .partner-section {
    grid-column: span 1;
  }
  
  .ms-partner-image {
    max-width: 70%;
  }
  
  .social-icons {
    justify-content: center;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .social-icon {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .footer-section {
    text-align: center;
  }
  
  .contact-info p {
    justify-content: center;
  }
  
  .quick-links {
    text-align: center;
  }
  
  .ms-partner-image {
    max-width: 280px;
  }

  .social-icons {
    justify-content: center;
    gap: 12px;
  }

  .social-link {
    width: 32px;
    height: 32px;
  }

  .social-icon {
    font-size: 0.9rem;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}