import React from "react";
import SidebarInstitution from "../../components/SidebarInstitution";
import "../../styles/global.css";

function InstitutionDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <SidebarInstitution />

      <div style={{ padding: "30px", flex: 1 }}>
        <h1>Institution Dashboard</h1>
        <p>Manage events and resources from the control panel.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "30px"
          }}
        >
          <div style={cardStyle}>
            <h3>Total Events</h3>
            <p style={numberStyle}>12</p>
          </div>

          <div style={cardStyle}>
            <h3>Upcoming Events</h3>
            <p style={numberStyle}>5</p>
          </div>

          <div style={cardStyle}>
            <h3>Resources Allocated</h3>
            <p style={numberStyle}>8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const numberStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "10px"
};

export default InstitutionDashboard;