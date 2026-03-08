import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function SidebarInstitution() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Institution</h2>

      <ul className="sidebar-menu">
        <li>
          <Link to="/institution/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/institution/create-event">Create Event</Link>
        </li>

        <li>
          <Link to="/institution/manage-events">Manage Events</Link>
        </li>

        <li>
          <Link to="/institution/allocate-resources">Allocate Resources</Link>
        </li>

        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarInstitution;