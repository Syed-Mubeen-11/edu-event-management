import React, { useState } from 'react';
import SidebarInstitution from "../../components/SidebarInstitution";
import "../../styles/institution.css";

const ManageEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Web Development", date: "2024-04-15", time: "10:00", venue: "Room 101", instructor: "Prof. Kumar", seats: 30, registered: 15, status: "Active" },
    { id: 2, title: "Data Science", date: "2024-04-18", time: "14:00", venue: "Auditorium", instructor: "Dr. Sharma", seats: 50, registered: 42, status: "Active" },
    { id: 3, title: "React JS", date: "2024-04-10", time: "09:00", venue: "Lab 202", instructor: "Ms. Priya", seats: 25, registered: 25, status: "Completed" }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ 
    title: '', 
    date: '', 
    time: '', 
    venue: '', 
    instructor: '', 
    seats: '' 
  });

  const handleChange = (e) => setForm({ 
    ...form, 
    [e.target.name]: e.target.value 
  });

  const createEvent = () => {
    const newEvent = { 
      id: events.length + 1, 
      ...form, 
      seats: parseInt(form.seats), 
      registered: 0, 
      status: "Active" 
    };
    setEvents([...events, newEvent]);
    setShowForm(false);
    setForm({ title: '', date: '', time: '', venue: '', instructor: '', seats: '' });
    alert('Event created!');
  };

  const updateEvent = () => {
    const updated = events.map(e => 
      e.id === editing.id ? { ...e, ...form, seats: parseInt(form.seats) } : e
    );
    setEvents(updated);
    setEditing(null);
    setForm({ title: '', date: '', time: '', venue: '', instructor: '', seats: '' });
    alert('Event updated!');
  };

  const deleteEvent = (id) => {
    if (confirm('Delete this event?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const editEvent = (event) => {
    setEditing(event);
    setForm(event);
  };

  return (
    <div className="institution-layout">
      <SidebarInstitution />

      <div className="manage-events-container">
        <div className="manage-events-header">
          <h1 className="page-title">📋 Manage Events</h1>
          <button 
            className="btn-primary create-event-btn"
            onClick={() => setShowForm(true)}
          >
            + Create New Event
          </button>
        </div>

        {/* Create Event Form Modal */}
        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Create New Event</h3>
              <form className="event-form">
                <div className="form-group">
                  <label>Title</label>
                  <input 
                    name="title" 
                    placeholder="Event Title" 
                    value={form.title} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input 
                      name="date" 
                      type="date" 
                      value={form.date} 
                      onChange={handleChange} 
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input 
                      name="time" 
                      type="time" 
                      value={form.time} 
                      onChange={handleChange} 
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Venue</label>
                  <input 
                    name="venue" 
                    placeholder="Venue" 
                    value={form.venue} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Instructor</label>
                  <input 
                    name="instructor" 
                    placeholder="Instructor" 
                    value={form.instructor} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Max Seats</label>
                  <input 
                    name="seats" 
                    placeholder="Max Seats" 
                    value={form.seats} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-submit" onClick={createEvent}>
                    Save Event
                  </button>
                  <button 
                    type="button" 
                    className="btn-cancel"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Event Form Modal */}
        {editing && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Edit Event</h3>
              <form className="event-form">
                <div className="form-group">
                  <label>Title</label>
                  <input 
                    name="title" 
                    value={form.title} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input 
                      name="date" 
                      type="date" 
                      value={form.date} 
                      onChange={handleChange} 
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input 
                      name="time" 
                      type="time" 
                      value={form.time} 
                      onChange={handleChange} 
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Venue</label>
                  <input 
                    name="venue" 
                    value={form.venue} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Instructor</label>
                  <input 
                    name="instructor" 
                    value={form.instructor} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Max Seats</label>
                  <input 
                    name="seats" 
                    value={form.seats} 
                    onChange={handleChange} 
                    className="form-control"
                  />
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-submit" onClick={updateEvent}>
                    Update Event
                  </button>
                  <button 
                    type="button" 
                    className="btn-cancel"
                    onClick={() => setEditing(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Events List */}
        <div className="events-list">
          <h3>All Events ({events.length})</h3>
          
          <div className="events-table-container">
            <table className="events-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                  <th>Instructor</th>
                  <th>Registrations</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  <tr key={event.id}>
                    <td><strong>{event.title}</strong></td>
                    <td>{event.date}</td>
                    <td>{event.time}</td>
                    <td>{event.venue}</td>
                    <td>{event.instructor}</td>
                    <td>
                      <span className={event.registered === event.seats ? 'text-warning' : ''}>
                        {event.registered}/{event.seats}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${event.status.toLowerCase()}`}>
                        {event.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn-icon edit-btn"
                        onClick={() => editEvent(event)}
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button 
                        className="btn-icon delete-btn"
                        onClick={() => deleteEvent(event.id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                      <button 
                        className="btn-icon view-btn"
                        onClick={() => alert(JSON.stringify(event, null, 2))}
                        title="View"
                      >
                        👁️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;