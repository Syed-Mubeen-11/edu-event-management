// frontend/src/pages/educator/ViewEvents.jsx

import React, { useState } from "react";
import { FaCalendarAlt, FaSearch, FaMapMarkerAlt, FaUsers, FaClock, FaFilter } from "react-icons/fa";
import SidebarEducator from "../../components/SidebarEducator";
import "../../styles/educator.css";

function ViewEvents() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const events = [
    { 
      id: 1, 
      name: "AI Workshop", 
      date: "2024-06-10", 
      time: "10:00 AM",
      location: "Online",
      attendees: 45,
      capacity: 100,
      status: "upcoming",
      category: "Workshop"
    },
    { 
      id: 2, 
      name: "Web Development Bootcamp", 
      date: "2024-06-15", 
      time: "2:00 PM",
      location: "Room 301",
      attendees: 30,
      capacity: 50,
      status: "upcoming",
      category: "Bootcamp"
    },
    { 
      id: 3, 
      name: "Hackathon 2024", 
      date: "2024-06-20", 
      time: "9:00 AM",
      location: "Main Hall",
      attendees: 120,
      capacity: 150,
      status: "upcoming",
      category: "Hackathon"
    },
    { 
      id: 4, 
      name: "React Masterclass", 
      date: "2024-06-05", 
      time: "11:00 AM",
      location: "Lab 2",
      attendees: 25,
      capacity: 30,
      status: "completed",
      category: "Workshop"
    }
  ];

  const filteredEvents = events
    .filter(event => event.name.toLowerCase().includes(search.toLowerCase()))
    .filter(event => filter === "all" || event.status === filter);

  const getStatusClass = (status) => {
    return status === "upcoming" ? "status-badge upcoming" : "status-badge completed";
  };

  return (
    <div className="educator-layout">
      <SidebarEducator />
      
      <div className="educator-content">
        <div className="page-header">
          <h1 className="page-title">Events</h1>
          <p className="page-subtitle">Manage and track your educational events</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="events-toolbar">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            <FaFilter className="filter-icon" />
            <button 
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === "upcoming" ? "active" : ""}`}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming
            </button>
            <button 
              className={`filter-btn ${filter === "completed" ? "active" : ""}`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-header">
                <span className="event-category">{event.category}</span>
                <span className={getStatusClass(event.status)}>
                  {event.status}
                </span>
              </div>
              
              <h3 className="event-title">{event.name}</h3>

              <div className="event-details">
                <div className="event-detail">
                  <FaCalendarAlt className="detail-icon" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="event-detail">
                  <FaClock className="detail-icon" />
                  <span>{event.time}</span>
                </div>
                <div className="event-detail">
                  <FaMapMarkerAlt className="detail-icon" />
                  <span>{event.location}</span>
                </div>
                <div className="event-detail">
                  <FaUsers className="detail-icon" />
                  <span>{event.attendees}/{event.capacity} attendees</span>
                </div>
              </div>

              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(event.attendees/event.capacity)*100}%` }}
                ></div>
              </div>

              <div className="event-actions">
                <button className="view-btn">View Details</button>
                {event.status === "upcoming" && (
                  <>
                    <button className="edit-btn">Edit</button>
                    <button className="cancel-btn">Cancel</button>
                  </>
                )}
              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="no-events">
              <p>No events found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewEvents;