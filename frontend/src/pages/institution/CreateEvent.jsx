import React, { useState } from "react";
import SidebarInstitution from "../../components/SidebarInstitution";
import { useNavigate } from "react-router-dom";
import "../../styles/institution.css";
function CreateEvent() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    instructor: "",
    seats: "",
    category: "workshop"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Event Created:", formData);

    setMessage("Event created successfully!");

    setTimeout(() => {
      navigate("/institution/manage-events");
    }, 2000);
  };

  return (
    <div className="institution-layout">

      <SidebarInstitution />

      <div className="content">

        <h2>Create Event</h2>

        {message && <p className="success-msg">{message}</p>}

        <form onSubmit={handleSubmit} className="form">

          <div className="form-group">
            <label>Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Instructor</label>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Seats</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="conference">Conference</option>
              <option value="webinar">Webinar</option>
            </select>
          </div>

          <button className="primary-btn">Create Event</button>

        </form>

      </div>

    </div>
  );
}

export default CreateEvent;