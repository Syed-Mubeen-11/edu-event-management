import React, { useState } from "react";
import SidebarStudent from "../../components/SidebarStudent";
import "../../styles/student.css";

function EventRegistration() {

  const [events] = useState([
    {
      id: 1,
      name: "AI & Future Tech Summit",
      date: "2026-04-15",
      location: "Main Auditorium",
      seats: 35
    },
    {
      id: 2,
      name: "Cyber Security Conference",
      date: "2026-04-20",
      location: "Conference Hall",
      seats: 40
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      date: "2026-04-25",
      location: "Lab 3",
      seats: 20
    }
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  const submitForm = () => {
    if (!name || !roll) {
      alert("Please enter all details");
      return;
    }

    alert("Registration Successful!");
    setShowForm(false);
    setName("");
    setRoll("");
  };

  return (
    <div className="event-registration-layout">

      <SidebarStudent />

      <div className="event-registration-content">

        <h1>Event Registration</h1>

        <input
          type="text"
          placeholder="Search events..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="events-table">

          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Location</th>
              <th>Seats</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>{event.seats}</td>

                <td>
                  <button
                    className="register-btn"
                    onClick={() => {
                      setSelectedEvent(event);
                      setShowForm(true);
                    }}
                  >
                    Register
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>


        {showForm && (
          <div className="modal-overlay">

            <div className="modal-content">

              <h3>Register for {selectedEvent?.name}</h3>

              <input
                type="text"
                placeholder="Student Name"
                className="modal-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Roll Number"
                className="modal-input"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
              />

              <div className="modal-actions">
                <button className="submit-btn" onClick={submitForm}>
                  Submit
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default EventRegistration;