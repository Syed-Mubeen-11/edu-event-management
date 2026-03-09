import React, { useState } from "react";
import SidebarStudent from "../../components/SidebarStudent";
import "../../styles/student.css";

function Agenda() {

  const [events] = useState([
    {
      id: 1,
      name: "AI & Future Tech Summit",
      date: "2026-04-15",
      location: "Main Auditorium",
      status: "Confirmed",
      tags: ["AI", "Technology"]
    },
    {
      id: 2,
      name: "Cyber Security Conference",
      date: "2026-04-20",
      location: "Conference Hall",
      status: "Pending",
      tags: ["Security", "Networking"]
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      date: "2026-04-25",
      location: "Lab 3",
      status: "Confirmed",
      tags: ["Web", "Programming"]
    }
  ]);

  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="student-layout">

      <SidebarStudent />

      <div className="content">

        <h2>Student Agenda</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {/* Events List */}
        <div className="events-grid">

          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => setSelectedEvent(event)}
            >
              <h3>{event.name}</h3>

              <p>📅 {event.date}</p>
              <p>📍 {event.location}</p>

              <p>
                Status:
                <span className={event.status === "Confirmed" ? "status-confirmed" : "status-pending"}>
                  {event.status}
                </span>
              </p>

              <p>Tags: {event.tags.join(", ")}</p>

            </div>
          ))}

        </div>

        {/* Event Details Modal */}
        {selectedEvent && (

          <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>

            <div className="modal-box" onClick={(e) => e.stopPropagation()}>

              <h2>{selectedEvent.name}</h2>

              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Location:</strong> {selectedEvent.location}</p>
              <p><strong>Status:</strong> {selectedEvent.status}</p>
              <p><strong>Tags:</strong> {selectedEvent.tags.join(", ")}</p>

              <button
                className="primary-btn"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Agenda;