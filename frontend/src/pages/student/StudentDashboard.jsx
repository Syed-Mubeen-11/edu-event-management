import React, { useState } from 'react';

const StudentDashboard = () => {
  // Hardcoded data
  const [events, setEvents] = useState([
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
    <div>
      <h1>🎓 Student Dashboard</h1>
      <p>Welcome, Sameera!</p>

      <div>
        <h3>My Events ({myEvents.length})</h3>
        {myEvents.map(e => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <p>{e.date} at {e.time} | {e.venue}</p>
            <button onClick={() => alert('Booking details')}>View</button>
          </div>
        ))}
      </div>

      <div>
        <h3>Available Events ({availableEvents.length})</h3>
        {availableEvents.map(e => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <p>{e.date} at {e.time} | {e.venue}</p>
            <p>{e.registered}/{e.seats} seats filled</p>
            <button onClick={() => { setSelectedEvent(e); setShowModal(true); }}>Register</button>
          </div>
        ))}
      </div>

      {showModal && selectedEvent && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', background: 'white', padding: 20, border: '1px solid black' }}>
          <h3>Confirm Registration</h3>
          <p>{selectedEvent.title}</p>
          <button onClick={() => register(selectedEvent)}>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;