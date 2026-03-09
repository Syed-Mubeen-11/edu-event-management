import React from "react";
import "./home.css";
import logo from "../../assets/logo.jpeg";

function Home() {
  return (
    <div>

      {/* NAVBAR */}

      <nav className="navbar">

<div className="logo-container">
<img src={logo} alt="EduEvent Logo" className="logo-img"/>

<h2 className="logo-text">EduEvent</h2>
</div>

<ul className="nav-links">
<li>Home</li>
<li>About</li>
<li>Contact</li>
<li>Login</li>
<li className="register">Register</li>
</ul>

</nav>


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
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Login</button>
          </div>

        </div>

      </section>


      {/* FEATURES */}

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


      {/* HOW IT WORKS */}

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


      {/* CTA */}

      <section className="cta">

        <h2>Start Managing Your Events Today</h2>

        <button className="primary-btn">
          Create Account
        </button>

      </section>


      {/* FOOTER */}

      <footer>

        <p>© 2026 EduEvent Platform</p>

        <div className="footer-links">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>

      </footer>

    </div>
  );
}

export default Home;