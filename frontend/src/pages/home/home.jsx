import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">✨ EduEvent Platform</span>
          <h1>
            Transform Educational <span className="gradient-text">Event Management</span>
          </h1>
          <p className="hero-description">
            Streamline your educational events, manage resources, and collaborate 
            seamlessly with educators and students. Join thousands of institutions 
            already using EduEvent.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/register")}>
              Get Started Free
              <span className="btn-icon">→</span>
            </button>
            <button className="secondary-btn" onClick={() => navigate("/login")}>
              Sign In
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Institutions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Educators</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Students</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <span className="card-icon">📅</span>
            <span>Event Management</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">📚</span>
            <span>Resource Allocation</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">👥</span>
            <span>Student Registration</span>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2>Powerful Features for <span className="gradient-text">Educational Excellence</span></h2>
          <p>Everything you need to manage educational events efficiently</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">📅</span>
            </div>
            <h3>Event Creation</h3>
            <p>Create and schedule educational events with ease. Set dates, times, and locations effortlessly.</p>
            <a href="#" className="feature-link">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">📦</span>
            </div>
            <h3>Resource Management</h3>
            <p>Track and allocate rooms, equipment, and materials. Never double-book resources again.</p>
            <a href="#" className="feature-link">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">👨‍🏫</span>
            </div>
            <h3>Educator Tools</h3>
            <p>Empower educators with tools to manage materials, track attendance, and communicate.</p>
            <a href="#" className="feature-link">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">👥</span>
            </div>
            <h3>Student Registration</h3>
            <p>Simple sign-up process for students. Track participation and engagement metrics.</p>
            <a href="#" className="feature-link">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">📊</span>
            </div>
            <h3>Analytics Dashboard</h3>
            <p>Get insights into event performance, attendance rates, and resource utilization.</p>
            <a href="#" className="feature-link">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">🔔</span>
            </div>
            <h3>Smart Notifications</h3>
            <p>Automated reminders and updates for upcoming events, changes, and announcements.</p>
            <a href="#" className="feature-link">Learn more →</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="section-header">
          <span className="section-badge">Simple Process</span>
          <h2>How <span className="gradient-text">EduEvent</span> Works</h2>
          <p>Get started in four simple steps</p>
        </div>

        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Create Account</h3>
              <p>Sign up as an institution, educator, or student</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Set Up Events</h3>
              <p>Create and schedule educational events</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Allocate Resources</h3>
              <p>Assign rooms, equipment, and materials</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Start Learning</h3>
              <p>Students register and participate in events</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2>Trusted by <span className="gradient-text">Educational Leaders</span></h2>
          <p>See what our users have to say about EduEvent</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-rating">★★★★★</div>
            <p className="testimonial-text">"EduEvent has transformed how we manage our academic events. The resource allocation feature alone saved us countless hours."</p>
            <div className="testimonial-author">
              <div className="author-avatar">👩‍🏫</div>
              <div className="author-info">
                <h4>Dr. Sarah Johnson</h4>
                <p>Dean of Academics, Tech University</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-rating">★★★★★</div>
            <p className="testimonial-text">"The platform is intuitive and our students love it. Registration rates have increased by 40% since we started using EduEvent."</p>
            <div className="testimonial-author">
              <div className="author-avatar">👨‍💼</div>
              <div className="author-info">
                <h4>Michael Chen</h4>
                <p>Event Coordinator, City College</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-rating">★★★★★</div>
            <p className="testimonial-text">"As an educator, I appreciate how easy it is to manage my workshops and track student participation. Highly recommended!"</p>
            <div className="testimonial-author">
              <div className="author-avatar">👩‍🔬</div>
              <div className="author-info">
                <h4>Prof. Emily Rodriguez</h4>
                <p>Science Department, State University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Educational Events?</h2>
          <p>Join thousands of institutions already using EduEvent</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={() => navigate("/register")}>
              Start Free Trial
            </button>
            <button className="secondary-btn" onClick={() => navigate("/contact")}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
}

export default Home;