import { Link, useLocation, useNavigate } from "react-router-dom"; // Add useNavigate
import "../styles/Sidebar.css";

function SidebarEducator() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Educator Panel</h2>

      <ul className="sidebar-menu">
        <li>
          <Link
            to="/educator/dashboard"
            className={location.pathname === "/educator/dashboard" ? "active" : ""}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/educator/view-events"
            className={location.pathname === "/educator/view-events" ? "active" : ""}
          >
            View Events
          </Link>
        </li>

        <li>
          <Link
            to="/educator/update-materials"
            className={location.pathname === "/educator/update-materials" ? "active" : ""}
          >
            Upload Materials
          </Link>
        </li>

        <li>
        <button onClick={handleLogout} className="sidebar-logout-btn">
          Logout
        </button>
      </li>
      </ul>
    </div>
  );
}

export default SidebarEducator;