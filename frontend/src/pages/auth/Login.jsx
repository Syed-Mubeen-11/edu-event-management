import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../styles/auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Find user with matching email and password
    const foundUser = users.find(user => 
      user.email === email && user.password === password
    );

    if (!foundUser) {
      alert("Invalid email or password! Please try again or register.");
      return;
    }

    // Check if selected role matches registered role
    if (foundUser.role !== role) {
      alert(`You are registered as a ${foundUser.role}. Please select the correct role.`);
      return;
    }

    // Create user object for session (without password)
    const userData = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
    };

    // Store in localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Navigate to dashboard
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="login-container">
      {/* Welcome Section - Left Side */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>WELCOME</h1>
          <h2>EduEvent</h2>
          <p>
            Educational Event Management & Resource Allocation System. 
            Streamline your educational events, manage resources, and 
            collaborate seamlessly with educators and students.
          </p>
          <div className="welcome-divider"></div>
          <p>
            Join thousands of institutions, educators, and students who 
            are already using EduEvent to enhance their educational experience.
          </p>
        </div>
      </div>

      {/* Form Section - Right Side */}
      <div className="form-section">
        <div className="login-card">
          <h2>Login</h2>
          <p className="form-subtitle">Welcome back! Please enter your details</p>

          <form onSubmit={handleSubmit}>
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
              <label>Password</label>
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                    type="button"
                    className="show-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>Login As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="educator">Educator</option>
                <option value="institution">Institution</option>
              </select>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />

                
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              Sign in
            </button>
            <p className="register-text">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;