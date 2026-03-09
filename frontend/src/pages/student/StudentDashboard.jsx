import React, { useState } from 'react';
import SidebarStudent from "../../components/SidebarStudent";
import "../../styles/student.css";

const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [events] = useState([
    { id: 1, title: "Web Development", date: "2024-04-15", time: "10:00", venue: "Room 101", instructor: "Prof. Kumar", seats: 30, registered: 15 },
    { id: 2, title: "Data Science", date: "2024-04-18", time: "14:00", venue: "Auditorium", instructor: "Dr. Sharma", seats: 50, registered: 42 },
    { id: 3, title: "Career Guidance", date: "2024-04-20", time: "11:00", venue: "Hall", instructor: "Mr. Raj", seats: 40, registered: 38 }
  ]);

  const [myRegistrations, setMyRegistrations] = useState([
    { id: 101, eventId: 1, studentId: 1, status: "Confirmed" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const myEvents = events.filter(e => myRegistrations.map(r => r.eventId).includes(e.id));
  const availableEvents = events.filter(e => !myRegistrations.map(r => r.eventId).includes(e.id));

  const register = (event) => {
    setMyRegistrations([...myRegistrations, { 
      id: Date.now(), 
      eventId: event.id, 
      studentId: 1, 
      status: "Confirmed" 
    }]);
    alert(`Registered for ${event.title}`);
    setShowModal(false);
  };

  return (
    <div className="student-dashboard-layout">
      <SidebarStudent />

      <div className="student-dashboard-content">
        <h1>🎓 Student Dashboard</h1>
        <p className="welcome-text">Welcome, {user?.name || 'Student'}!</p>

        <div className="dashboard-section">
          <h3>My Events ({myEvents.length})</h3>
          <div className="events-grid">
            {myEvents.map(e => (
              <div key={e.id} className="event-card">
                <h4>{e.title}</h4>
                <p className="event-details">{e.date} at {e.time}</p>
                <p className="event-venue">{e.venue}</p>
                <button className="view-btn" onClick={() => alert('Booking details')}>
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <h3>Available Events ({availableEvents.length})</h3>
          <div className="events-grid">
            {availableEvents.map(e => (
              <div key={e.id} className="event-card">
                <h4>{e.title}</h4>
                <p className="event-details">{e.date} at {e.time}</p>
                <p className="event-venue">{e.venue}</p>
                <p className="seats-info">{e.registered}/{e.seats} seats filled</p>
                <button 
                  className="register-btn"
                  onClick={() => { 
                    setSelectedEvent(e); 
                    setShowModal(true); 
                  }}
                >
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>

        {showModal && selectedEvent && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h3>Confirm Registration</h3>
              <p className="modal-event-title">{selectedEvent.title}</p>
              <div className="modal-actions">
                <button className="confirm-btn" onClick={() => register(selectedEvent)}>
                  Yes, Register
                </button>
                <button className="cancel-btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;