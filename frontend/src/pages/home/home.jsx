import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"; // Fixed path (go up two levels)
import "../../styles/home.css"; // Fixed path to styles folder
import edutechImage from "../../assets/edutech.jpeg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Use your existing Navbar component */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to EduEvent</h1>
          <p>
            Educational Event Management & Resource Allocation Platform.
            Streamline events, manage resources and collaborate with
            educators and students.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/register")}>
              Get Started
            </button>
            <button className="secondary-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Platform Features</h2>
        <div className="feature-container">
          <div className="feature-card">
            <h3>Event Creation</h3>
            <p>Create and schedule educational events.</p>
          </div>
          <div className="feature-card">
            <h3>Resource Management</h3>
            <p>Manage rooms, equipment and resources.</p>
          </div>
          <div className="feature-card">
            <h3>Student Registration</h3>
            <p>Students can register for events easily.</p>
          </div>
          <div className="feature-card">
            <h3>Educator Management</h3>
            <p>Educators manage event materials.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how">
        <h2>How the Platform Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1</h3>
            <p>Institutions create events</p>
          </div>
          <div className="step">
            <h3>2</h3>
            <p>Resources are added</p>
          </div>
          <div className="step">
            <h3>3</h3>
            <p>Educators manage materials</p>
          </div>
          <div className="step">
            <h3>4</h3>
            <p>Students register</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Start Managing Your Events Today</h2>
        <button className="primary-btn" onClick={() => navigate("/register")}>
          Create Account
        </button>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 EduEvent Platform</p>
        <div className="footer-links">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/about")}>About</span>
          <span onClick={() => navigate("/contact")}>Contact</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;