import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

function SidebarInstitution() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Institution Panel</h2>

      <ul className="sidebar-menu">
        <li>
          <Link
            to="/institution/dashboard"
            className={location.pathname === "/institution/dashboard" ? "active" : ""}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/institution/create-event"
            className={location.pathname === "/institution/create-event" ? "active" : ""}
          >
            Create Event
          </Link>
        </li>

        <li>
          <Link
            to="/institution/manage-events"
            className={location.pathname === "/institution/manage-events" ? "active" : ""}
          >
            Manage Events
          </Link>
        </li>

        <li>
          <Link
            to="/institution/allocate-resources"
            className={location.pathname === "/institution/allocate-resources" ? "active" : ""}
          >
            Allocate Resources
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

export default SidebarInstitution;