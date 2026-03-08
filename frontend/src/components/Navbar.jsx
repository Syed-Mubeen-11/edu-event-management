import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const handleLogout = () => {
    alert("Logged out successfully");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        EduEvent
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nav-right">
        <span className="icon">🔔</span>
        <span className="icon">👤</span>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

    </nav>
  );
}

export default Navbar;