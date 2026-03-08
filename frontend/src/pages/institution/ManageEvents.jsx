import React, { useState } from 'react';

const ManageEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Web Development", date: "2024-04-15", time: "10:00", venue: "Room 101", instructor: "Prof. Kumar", seats: 30, registered: 15, status: "Active" },
    { id: 2, title: "Data Science", date: "2024-04-18", time: "14:00", venue: "Auditorium", instructor: "Dr. Sharma", seats: 50, registered: 42, status: "Active" },
    { id: 3, title: "React JS", date: "2024-04-10", time: "09:00", venue: "Lab 202", instructor: "Ms. Priya", seats: 25, registered: 25, status: "Completed" }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', date: '', time: '', venue: '', instructor: '', seats: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
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
    const updated = events.map(e => e.id === editing.id ? { ...e, ...form, seats: parseInt(form.seats) } : e);
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
    <div>
      <h1>📋 Manage Events</h1>
      
      <button onClick={() => setShowForm(true)}>+ Create Event</button>

      {showForm && (
        <div>
          <h3>New Event</h3>
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} /><br/>
          <input name="date" type="date" value={form.date} onChange={handleChange} /><br/>
          <input name="time" type="time" value={form.time} onChange={handleChange} /><br/>
          <input name="venue" placeholder="Venue" value={form.venue} onChange={handleChange} /><br/>
          <input name="instructor" placeholder="Instructor" value={form.instructor} onChange={handleChange} /><br/>
          <input name="seats" placeholder="Max Seats" value={form.seats} onChange={handleChange} /><br/>
          <button onClick={createEvent}>Save</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}

      {editing && (
        <div>
          <h3>Edit Event</h3>
          <input name="title" value={form.title} onChange={handleChange} /><br/>
          <input name="date" type="date" value={form.date} onChange={handleChange} /><br/>
          <input name="time" type="time" value={form.time} onChange={handleChange} /><br/>
          <input name="venue" value={form.venue} onChange={handleChange} /><br/>
          <input name="instructor" value={form.instructor} onChange={handleChange} /><br/>
          <input name="seats" value={form.seats} onChange={handleChange} /><br/>
          <button onClick={updateEvent}>Update</button>
          <button onClick={() => setEditing(null)}>Cancel</button>
        </div>
      )}

      <div>
        <h3>All Events</h3>
        {events.map(e => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <p>{e.date} {e.time} | {e.venue} | {e.instructor}</p>
            <p>Registrations: {e.registered}/{e.seats} | Status: {e.status}</p>
            <button onClick={() => editEvent(e)}>Edit</button>
            <button onClick={() => deleteEvent(e.id)}>Delete</button>
            <button onClick={() => alert(JSON.stringify(e, null, 2))}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;