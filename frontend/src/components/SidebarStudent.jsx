import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

function SidebarStudent() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Student Panel</h2>

      <ul className="sidebar-menu">
        <li>
          <Link
            to="/student/dashboard"
            className={location.pathname === "/student/dashboard" ? "active" : ""}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/student/agenda"
            className={location.pathname === "/student/agenda" ? "active" : ""}
          >
            My Agenda
          </Link>
        </li>

        <li>
          <Link
            to="/student/event-registration"
            className={location.pathname === "/student/event-registration" ? "active" : ""}
          >
            Register for Events
          </Link>
        </li>

        <li>
          <Link
            to="/student/booking-status"
            className={location.pathname === "/student/booking-status" ? "active" : ""}
          >
            Booking Status
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

export default SidebarStudent;