import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import edutechImage from "../assets/edutech.jpeg";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Get user from localStorage on component mount and whenever localStorage changes
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Listen for localStorage changes (in case user logs in/out in another tab)
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem("user");
    setUser(null);
    alert("Logged out successfully");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-bg"></div>
      
      <div className="navbar-container">
        <div className="logo-section">
          <Link to="/" className="logo">
          <img src={edutechImage} alt="EduEvent Logo" className="logo-img" />
            <span className="logo-gradient">EduEvent</span>
            <span className="logo-dot">✨</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            {/* Dashboard link REMOVED - only user profile remains */}
          </ul>

          <div className="nav-right">
            {user ? (
              <div className="user-section">
                <div className="user-info">
                  <span className="user-avatar">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                  <span className="user-details">
                    <span className="user-name">{user.name || 'User'}</span>
                    <span className="user-role-badge">{user.role}</span>
                  </span>
                </div>
                
                <button className="notification-btn">
                  <span className="notification-icon">🔔</span>
                  <span className="notification-badge">3</span>
                </button>
                
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="login-btn-nav" onClick={() => setIsMenuOpen(false)}>
                  <span>🔐</span>
                  Login
                </Link>
                <Link to="/register" className="register-btn-nav" onClick={() => setIsMenuOpen(false)}>
                  <span>✨</span>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;