import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../styles/contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTouched({});
      }, 3000);
    } else {
      setErrors(newErrors);
      const allTouched = {};
      Object.keys(formData).forEach(key => {
        allTouched[key] = true;
      });
      setTouched(allTouched);
    }
  };

  return (
    <div className="contact-page">
      {/* Use your existing Navbar component */}
      <Navbar />

      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for support, feedback, or inquiries</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Two Column Layout */}
          <div className="contact-grid">
            {/* Left Column - Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <p className="form-subtitle">We'll get back to you within 24 hours</p>
              
              {submitted && (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <div className="success-content">
                    <h4>Thank you for contacting us!</h4>
                    <p>We've received your message and will respond within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.name && errors.name ? 'error' : ''}
                    placeholder="Enter your full name"
                  />
                  {touched.name && errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? 'error' : ''}
                    placeholder="Enter your email"
                  />
                  {touched.email && errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Subject <span className="required">*</span></label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.subject && errors.subject ? 'error' : ''}
                    placeholder="What is this about?"
                  />
                  {touched.subject && errors.subject && (
                    <span className="error-message">{errors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Message <span className="required">*</span></label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.message && errors.message ? 'error' : ''}
                    placeholder="Type your message here..."
                  />
                  {touched.message && errors.message ? (
                    <span className="error-message">{errors.message}</span>
                  ) : (
                    <span className="character-count">{formData.message.length}/1000 characters</span>
                  )}
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="contact-info-container">
              <h2>Support Information</h2>
              
              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-details">
                    <h3>Email Support</h3>
                    <p className="info-primary">support@eduevent.com</p>
                    <p className="info-secondary">info@eduevent.com</p>
                    <p className="info-note">Response within 24 hours</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-details">
                    <h3>Phone Contact</h3>
                    <p className="info-primary">+1 (555) 123-4567</p>
                    <p className="info-secondary">+1 (555) 987-6543</p>
                    <p className="info-note">Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h3>Office Location</h3>
                    <p className="info-primary">123 Education Street</p>
                    <p className="info-secondary">Tech City, TC 12345</p>
                    <p className="info-secondary">United States</p>
                  </div>
                </div>

                <div className="social-section">
                  <h3>Connect With Us</h3>
                  <div className="social-links">
                    <a href="#" className="social-icon" onClick={(e) => e.preventDefault()}>📘</a>
                    <a href="#" className="social-icon" onClick={(e) => e.preventDefault()}>🐦</a>
                    <a href="#" className="social-icon" onClick={(e) => e.preventDefault()}>📷</a>
                    <a href="#" className="social-icon" onClick={(e) => e.preventDefault()}>💼</a>
                  </div>
                  <p className="social-note">Follow us for updates and news</p>
                </div>
              </div>

              <div className="map-container">
                <h3>Our Location</h3>
                <div className="map-placeholder">
                  <span className="map-icon">📍</span>
                  <p className="map-address">123 Education Street, Tech City</p>
                  <a href="#" className="map-link" onClick={(e) => e.preventDefault()}>View on Google Maps</a>
                  <span className="map-note">(Interactive map coming soon)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
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
              <h4>Contact Info</h4>
              <p>info@eduevent.com</p>
              <p>support@eduevent.com</p>
              <p>+1 (555) 123-4567</p>
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

export default Contact;