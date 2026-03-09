import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../styles/about.css';
import edutechImage from "../../assets/edutech.jpeg";  // ← THIS LINE IS MISSING!

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <Navbar />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About EduEvent</h1>
          <p>Learn more about our platform</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container">
        <div className="hero-section">
          <img src={edutechImage} alt="EduEvent Platform" className="hero-image" />
          <div className="hero-content">
            <h2>Educational Event Management & Resource Allocation System</h2>
            <p>Streamline your educational events, manage resources, and collaborate seamlessly with educators and students.</p>
            <div className="stats-badge">
              Join 500+ institutions using EduEvent
            </div>
          </div>
        </div>

        {/* Rest of your component remains the same... */}
        <div className="mission-section">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>Simplify educational event management with an intuitive platform that saves time and reduces complexity for institutions worldwide.</p>
          </div>
          <div className="mission-card">
            <div className="card-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>Create a seamless ecosystem where institutions, educators, and students can connect and collaborate effectively.</p>
          </div>
        </div>

        {/* Features */}
        <div className="features-section">
          <h2>Platform Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h4>Event Creation</h4>
              <p>Create and schedule events</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h4>Resource Management</h4>
              <p>Track and allocate resources</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h4>Educator Tools</h4>
              <p>Manage teaching materials</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h4>Student Registration</h4>
              <p>Easy event sign-ups</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-section">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">⚛️ React</div>
            <div className="tech-item">🖥️ Spring Boot</div>
            <div className="tech-item">🗄️ MySQL</div>
            <div className="tech-item">🔐 JWT</div>
            <div className="tech-item">🏗️ Microservices</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Ready to get started?</h2>
          <p>Join thousands of institutions already using EduEvent</p>
          <button className="cta-button" onClick={() => navigate('/register')}>
            Create an account
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>EduEvent</h4>
              <p>Smart event management for educational institutions</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>info@eduevent.com</p>
              <p>support@eduevent.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 EduEvent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;