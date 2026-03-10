import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../styles/about.css';
import edutechImage from "../../assets/edutech.jpeg";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <Navbar />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Empowering Education <span className="gradient-text">Through Technology</span></h1>
          <p>Learn more about EduEvent and our mission to transform educational event management</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-content">
            <h2>Educational Event Management & Resource Allocation System</h2>
            <p>EduEvent was founded with a simple mission: to make educational event management seamless, efficient, and accessible for institutions of all sizes. We believe that great education deserves great tools.</p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2020</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Institutions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50k+</span>
                <span className="stat-label">Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="about-hero-image">
            <img src={edutechImage} alt="EduEvent Platform" />
            <div className="image-badge">
              <span className="badge-icon">🏆</span>
              <span>Trusted by leading institutions</span>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission-card">
            <div className="card-icon-wrapper">
              <span className="card-icon">🎯</span>
            </div>
            <h3>Our Mission</h3>
            <p>To simplify educational event management with an intuitive platform that saves time, reduces complexity, and enhances collaboration for institutions worldwide.</p>
            <ul className="mission-list">
              <li>✓ Streamline event creation and scheduling</li>
              <li>✓ Optimize resource allocation</li>
              <li>✓ Enhance educator-student collaboration</li>
            </ul>
          </div>

          <div className="vision-card">
            <div className="card-icon-wrapper">
              <span className="card-icon">👁️</span>
            </div>
            <h3>Our Vision</h3>
            <p>Create a seamless ecosystem where institutions, educators, and students can connect, collaborate, and thrive in their educational journey.</p>
            <ul className="vision-list">
              <li>✓ Global educational community</li>
              <li>✓ Innovative learning experiences</li>
              <li>✓ Accessible education for all</li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <div className="section-header">
            <span className="section-badge">Our Values</span>
            <h2>What Drives <span className="gradient-text">EduEvent</span></h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries to bring you the best educational technology solutions.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Building tools that bring educators and students together for better learning outcomes.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Simplicity</h3>
              <p>Making complex processes simple and intuitive for all users.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Trust</h3>
              <p>Ensuring your data is secure and your privacy is protected.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Accessibility</h3>
              <p>Making education accessible to everyone, everywhere.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Excellence</h3>
              <p>Striving for excellence in everything we do.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2>Meet the <span className="gradient-text">Leadership</span></h2>
            <p>Passionate experts dedicated to transforming education</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <span className="team-avatar">👩‍💼</span>
              </div>
              <h3>Sarah Johnson</h3>
              <p className="team-role">CEO & Co-Founder</p>
              <p className="team-bio">Former educator with 15+ years in educational technology</p>
              <div className="team-social">
                <a href="#" className="team-social-link">📧</a>
                <a href="#" className="team-social-link">💼</a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <span className="team-avatar">👨‍💻</span>
              </div>
              <h3>Michael Chen</h3>
              <p className="team-role">CTO & Co-Founder</p>
              <p className="team-bio">Tech visionary with expertise in scalable platforms</p>
              <div className="team-social">
                <a href="#" className="team-social-link">📧</a>
                <a href="#" className="team-social-link">💼</a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <span className="team-avatar">👩‍🔬</span>
              </div>
              <h3>Emily Rodriguez</h3>
              <p className="team-role">Head of Education</p>
              <p className="team-bio">PhD in Educational Psychology, curriculum expert</p>
              <div className="team-social">
                <a href="#" className="team-social-link">📧</a>
                <a href="#" className="team-social-link">💼</a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <span className="team-avatar">👨‍🏫</span>
              </div>
              <h3>David Williams</h3>
              <p className="team-role">Head of Product</p>
              <p className="team-bio">Former Dean of Students, product strategist</p>
              <div className="team-social">
                <a href="#" className="team-social-link">📧</a>
                <a href="#" className="team-social-link">💼</a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <div className="cta-content">
            <h2>Join Our Mission to Transform Education</h2>
            <p>Become part of a growing community of institutions using EduEvent</p>
            <div className="cta-buttons">
              <button className="primary-btn" onClick={() => navigate('/register')}>
                Get Started Today
              </button>
              <button className="secondary-btn" onClick={() => navigate('/contact')}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>EduEvent</h3>
              <p>Smart event management for educational institutions. Streamline, collaborate, and succeed.</p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Updates</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
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