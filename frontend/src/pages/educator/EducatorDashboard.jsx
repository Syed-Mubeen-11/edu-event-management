// frontend/src/pages/educator/EducatorDashboard.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUpload, FaChartLine, FaBook, FaUsers, FaStar } from "react-icons/fa";
import SidebarEducator from "../../components/SidebarEducator";
import DashboardCharts from "../../components/DashboardCharts";
import "../../styles/educator.css";

function EducatorDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const stats = [
    { icon: <FaCalendarAlt />, label: "Total Events", value: "12", color: "#8b5cf6" },
    { icon: <FaUpload />, label: "Materials", value: "28", color: "#10b981" },
    { icon: <FaUsers />, label: "Students", value: "156", color: "#f59e0b" },
    { icon: <FaStar />, label: "Avg. Rating", value: "4.8", color: "#ef4444" },
  ];

  const recentActivities = [
    { id: 1, activity: "Uploaded AI Workshop slides", time: "2 hours ago" },
    { id: 2, activity: "New registration for Web Dev course", time: "5 hours ago" },
    { id: 3, activity: "Updated course materials", time: "1 day ago" },
  ];

  return (
    <div className="educator-layout">
      <SidebarEducator />
      
      <div className="educator-content">
        <div className="page-header">
          <h1 className="page-title">Welcome back, {user?.name || 'Educator'}! 👋</h1>
          <p className="page-subtitle">Here's what's happening with your courses today.</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="action-cards">
            <Link to="/educator/view-events" className="action-card">
              <FaCalendarAlt className="action-icon" />
              <span>View Events</span>
            </Link>
            <Link to="/educator/update-materials" className="action-card">
              <FaUpload className="action-icon" />
              <span>Upload Materials</span>
            </Link>
            <Link to="/educator/create-event" className="action-card">
              <FaBook className="action-icon" />
              <span>Create Event</span>
            </Link>
            <Link to="/educator/analytics" className="action-card">
              <FaChartLine className="action-icon" />
              <span>Analytics</span>
            </Link>
          </div>
        </div>

        {/* Charts and Recent Activity */}
        <div className="dashboard-grid">
          {/* <div className="charts-wrapper">
            <DashboardCharts />
          </div> */}
          
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p>{activity.activity}</p>
                    <span>{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducatorDashboard;