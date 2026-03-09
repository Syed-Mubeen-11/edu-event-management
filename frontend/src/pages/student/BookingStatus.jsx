import React, { useState } from "react";
import SidebarStudent from "../../components/SidebarStudent";
import "../../styles/student.css";

function BookingStatus() {

  const [bookings, setBookings] = useState([
    {
      id: 1,
      eventName: "AI & Future Tech Summit",
      eventDate: "2026-04-15",
      location: "Main Auditorium",
      seat: "A23",
      status: "Confirmed"
    },
    {
      id: 2,
      eventName: "Cyber Security Conference",
      eventDate: "2026-04-20",
      location: "Conference Hall",
      seat: "B12",
      status: "Pending"
    },
    {
      id: 3,
      eventName: "Web Development Bootcamp",
      eventDate: "2026-04-25",
      location: "Lab 3",
      seat: "C08",
      status: "Confirmed"
    }
  ]);

  const cancelBooking = (id) => {
    const updated = bookings.map(b =>
      b.id === id ? { ...b, status: "Cancelled" } : b
    );
    setBookings(updated);
  };

  return (
    <div className="student-container">

      <SidebarStudent />

      <div className="content">
        <h1>Student Booking Status</h1>

        <table className="booking-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Seat</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.eventName}</td>
                <td>{booking.eventDate}</td>
                <td>{booking.location}</td>
                <td>{booking.seat}</td>

                <td className={booking.status.toLowerCase()}>
                  {booking.status}
                </td>

                <td>
                  <button className="view-btn">View</button>
                  <button
                    className="cancel-btn"
                    onClick={() => cancelBooking(booking.id)}
                  >
                    Cancel
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default BookingStatus;