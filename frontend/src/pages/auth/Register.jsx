import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing users from localStorage or create empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if user already exists
    const userExists = existingUsers.some(user => user.email === email);
    
    if (userExists) {
      alert("User with this email already exists! Please login.");
      return;
    }

    // Create new user object
    const newUser = {
      id: Date.now(), // Simple unique ID
      name: name,
      email: email,
      password: password, // In real app, NEVER store plain password
      role: role,
      registeredAt: new Date().toISOString()
    };

    // Add to users array
    existingUsers.push(newUser);
    
    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));
    
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="register-container">
      {/* Welcome Section - Left Side */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>WELCOME</h1>
          <h2>EduEvent</h2>
          <p>
            Join EduEvent today and start managing your educational events 
            efficiently. Whether you're an institution, educator, or student, 
            we have the tools you need.
          </p>
          <div className="welcome-divider"></div>
          <p>
            Already have an account? <Link to="/login" style={{color: 'white', fontWeight: 600}}>Sign in</Link>
          </p>
        </div>
      </div>

      {/* Form Section - Right Side */}
      <div className="form-section">
        <div className="register-card">
          <h2>Create Account</h2>
          <p className="form-subtitle">Join EduEvent today</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Register As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="educator">Educator</option>
                <option value="institution">Institution</option>
              </select>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

           <button type="submit" className="register-btn" style={{ padding: "1.5rem 1.2rem" }}>
            Register
            </button>

            <p className="login-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;