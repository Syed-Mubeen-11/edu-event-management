import React from "react";
import SidebarInstitution from "../../components/SidebarInstitution";
import "../../styles/institution.css";

function InstitutionDashboard() {
 const user = JSON.parse(localStorage.getItem("user"));
  const stats = [
    { label: "Total Events", value: 12 },
    { label: "Upcoming Events", value: 5 },
    { label: "Resources Allocated", value: 8 }
  ];

  return (
    <div className="institution-layout">

      <SidebarInstitution />

      <div className="content">

        <h2>Institution Dashboard</h2>
        <h2>Welcome, {user?.name || 'Institution'}!</h2>
        <p>Overview of your events and resources.</p>

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <div key={index} className="stat-card">

              <h3>{stat.label}</h3>
              <p className="stat-number">{stat.value}</p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default InstitutionDashboard;