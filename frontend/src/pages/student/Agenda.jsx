import React, { useState } from "react";

function Agenda() {
  const eventsData = [
    {
      id: 1,
      name: "AI & Future Tech Summit",
      organizer: "XYZ University",
      date: "2026-04-15",
      location: "Main Auditorium",
      status: "Confirmed",
      seat: "A23",
      tags: ["AI", "Technology"],
      popularity: 5,
      ratings: [],
      agenda: [
        { time: "09:00-09:30", session: "Opening Ceremony", speaker: "Dr John", description: "Welcome" },
        { time: "09:30-10:30", session: "AI in Healthcare", speaker: "Prof Smith", description: "Future of AI" }
      ]
    },
    {
      id: 2,
      name: "Cyber Security Conference",
      organizer: "ABC Institute",
      date: "2026-04-20",
      location: "Conference Hall",
      status: "Pending",
      seat: "B12",
      tags: ["Security", "Networking"],
      popularity: 3,
      ratings: [],
      agenda: [
        { time: "10:00-10:30", session: "Intro", speaker: "David", description: "Security overview" },
        { time: "10:30-11:30", session: "Network Security", speaker: "Dr Lee", description: "Protection" }
      ]
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      organizer: "Tech Academy",
      date: "2026-04-25",
      location: "Lab 3",
      status: "Confirmed",
      seat: "C08",
      tags: ["Web", "Programming"],
      popularity: 8,
      ratings: [],
      agenda: [
        { time: "09:00-10:00", session: "HTML Basics", speaker: "Anna", description: "HTML intro" },
        { time: "10:00-11:00", session: "JavaScript", speaker: "Ryan", description: "JS basics" }
      ]
    }
  ];

  const [events, setEvents] = useState(eventsData);
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [rating, setRating] = useState("");
  const [ratingComment, setRatingComment] = useState("");
  const [showRatingForm, setShowRatingForm] = useState(false);

  /* 🔍 Search */
  const searchFiltered = events.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  /* 🏷 Tag filter */
  const tagFiltered = selectedTag
    ? searchFiltered.filter(e => e.tags.includes(selectedTag))
    : searchFiltered;

  /* 📆 Date filter */
  const finalEvents = selectedDate
    ? tagFiltered.filter(e => e.date === selectedDate)
    : tagFiltered;

  /* 🔥 Trending */
  const trending = [...events].sort((a, b) => b.popularity - a.popularity);

  /* 📊 Increase popularity */
  const increasePopularity = (id) => {
    const updated = events.map(e => {
      if (e.id === id) {
        return { ...e, popularity: e.popularity + 1 };
      }
      return e;
    });
    setEvents(updated);
  };

  /* ⭐ Bookmark */
  const bookmarkEvent = (event) => {
    if (!bookmarks.find(e => e.id === event.id)) {
      setBookmarks([...bookmarks, event]);
      alert("Event bookmarked!");
    } else {
      alert("Event already bookmarked!");
    }
  };

  /* 🧑‍🎓 Advanced Rating */
  const submitRating = (eventId) => {
    // Validation
    if (!rating || rating < 1 || rating > 5) {
      alert("Please enter a rating between 1 and 5");
      return;
    }

    // Get current user info
    const currentUser = {
      id: 123,
      name: "John Student",
      role: "STUDENT"
    };

    // Create rating object with more data
    const newRating = {
      id: Date.now(),
      value: Number(rating),
      userId: currentUser.id,
      userName: currentUser.name,
      userRole: currentUser.role,
      timestamp: new Date().toISOString(),
      comment: ratingComment || "",
      verified: true
    };

    // Update events with new rating
    const updated = events.map(e => {
      if (e.id === eventId) {
        // Check if user already rated this event
        const alreadyRated = e.ratings?.some(r => r.userId === currentUser.id);
        
        if (alreadyRated) {
          alert("You have already rated this event");
          return e;
        }

        // Calculate new average rating
        const allRatings = [...(e.ratings || []), newRating];
        const averageRating = allRatings.reduce((sum, r) => sum + r.value, 0) / allRatings.length;

        return {
          ...e,
          ratings: allRatings,
          averageRating: averageRating.toFixed(1),
          totalRatings: allRatings.length,
          lastRated: newRating.timestamp,
          ratingDistribution: {
            1: allRatings.filter(r => r.value === 1).length,
            2: allRatings.filter(r => r.value === 2).length,
            3: allRatings.filter(r => r.value === 3).length,
            4: allRatings.filter(r => r.value === 4).length,
            5: allRatings.filter(r => r.value === 5).length
          }
        };
      }
      return e;
    });

    setEvents(updated);

    // Update selected event
    const updatedSelected = updated.find(e => e.id === eventId);
    setSelectedEvent(updatedSelected);

    // Show success message
    alert(`Thank you ${currentUser.name}! Your rating of ${rating} stars has been recorded.`);

    // Clear form
    setRating("");
    setRatingComment("");
    setShowRatingForm(false);

    // Log the activity
    console.log("Rating submitted:", {
      eventId,
      userId: currentUser.id,
      rating: newRating,
      timestamp: new Date().toISOString()
    });
  };

  /* ⭐ Average rating */
  const averageRating = (ratings) => {
    if (ratings.length === 0) return "No ratings";
    const avg = ratings.reduce((a, b) => a + b.value, 0) / ratings.length;
    return avg.toFixed(1) + " ★";
  };

  /* ⭐ Get rating count */
  const getRatingCount = (ratings) => {
    return ratings.length;
  };

  /* 🔔 Reminder */
  const setReminder = (event) => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    if (Notification.permission === "granted") {
      const eventDate = new Date(event.date);
      const now = new Date();
      const diff = eventDate - now;

      if (diff > 0) {
        setTimeout(() => {
          new Notification("Event Reminder", {
            body: event.name + " starting soon!"
          });
        }, diff);
      }

      alert("Reminder set for " + event.name);
    }
  };

  /* 📅 Calendar grid */
  const generateCalendar = () => {
    let days = [];
    for (let i = 1; i <= 30; i++) {
      const day = `2026-04-${i.toString().padStart(2, '0')}`;
      const dayEvents = events.filter(e => e.date === day);
      days.push(
        <div key={i} style={{ border: "1px solid #ccc", margin: "5px", padding: "5px" }}>
          <strong>{i}</strong>
          {dayEvents.map(e => (
            <div key={e.id}>{e.name}</div>
          ))}
        </div>
      );
    }
    return days;
  };

  /* Collect tags */
  const allTags = [...new Set(events.flatMap(e => e.tags))];

  return (
    <div>
      <h1>Student Agenda</h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search events"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {/* 📆 Date filter */}
      <label>Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <br /><br />

      {/* 🏷 Tag filter */}
      <label>Tag:</label>
      <select onChange={(e) => setSelectedTag(e.target.value)}>
        <option value="">All</option>
        {allTags.map((tag, i) => (
          <option key={i}>{tag}</option>
        ))}
      </select>

      <hr />

      {/* 📋 Event List */}
      <h2>Events</h2>

      <ul>
        {finalEvents.map(event => (
          <li key={event.id}>
            <strong>{event.name}</strong>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Tags: {event.tags.join(", ")}</p>
            <p>Popularity: {event.popularity}</p>
            <p>Rating: {averageRating(event.ratings)} ({getRatingCount(event.ratings)} reviews)</p>

            <button onClick={() => {
              setSelectedEvent(event);
              increasePopularity(event.id);
            }}>
              View Agenda
            </button>

            <button onClick={() => bookmarkEvent(event)}>
              Bookmark
            </button>

            <button onClick={() => setReminder(event)}>
              Reminder
            </button>
          </li>
        ))}
      </ul>

      <hr />

      {/* 🔥 Trending */}
      <h2>Trending Events</h2>
      <ul>
        {trending.map(event => (
          <li key={event.id}>
            {event.name} ({event.popularity} views) - Rating: {averageRating(event.ratings)}
          </li>
        ))}
      </ul>

      <hr />

      {/* 🗂 Bookmarks */}
      <button onClick={() => setShowBookmarks(!showBookmarks)}>
        Toggle Bookmarks
      </button>

      {showBookmarks && (
        <div>
          <h2>Saved Events</h2>
          <ul>
            {bookmarks.map(e => (
              <li key={e.id}>{e.name}</li>
            ))}
          </ul>
        </div>
      )}

      <hr />

      {/* 📅 Calendar */}
      <h2>Calendar View</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {generateCalendar()}
      </div>

      <hr />

      {/* 📋 Agenda */}
      {selectedEvent && (
        <div>
          <h2>{selectedEvent.name}</h2>
          <p>Organizer: {selectedEvent.organizer}</p>
          <p>Date: {selectedEvent.date}</p>
          <p>Location: {selectedEvent.location}</p>
          <p>Status: {selectedEvent.status}</p>
          <p>Seat: {selectedEvent.seat}</p>
          <p>Current Rating: {averageRating(selectedEvent.ratings)} ({getRatingCount(selectedEvent.ratings)} reviews)</p>

          <table border="1">
            <thead>
              <tr>
                <th>Time</th>
                <th>Session</th>
                <th>Speaker</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {selectedEvent.agenda.map((item, index) => (
                <tr key={index}>
                  <td>{item.time}</td>
                  <td>{item.session}</td>
                  <td>{item.speaker}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <br />
          <button onClick={() => window.print()}>
            Download Agenda PDF
          </button>

          <button onClick={() => setShowRatingForm(!showRatingForm)}>
            {showRatingForm ? "Hide Rating Form" : "Rate This Event"}
          </button>

          {/* 🧑‍🎓 Advanced Rating Form */}
          {showRatingForm && (
            <div>
              <h3>Rate this Event</h3>
              
              <div>
                <label>Rating (1-5): </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  placeholder="Enter 1-5"
                />
              </div>

              <div>
                <label>Comment (optional): </label>
                <textarea
                  value={ratingComment}
                  onChange={(e) => setRatingComment(e.target.value)}
                  placeholder="Tell us about your experience..."
                  rows="2"
                  cols="30"
                />
              </div>

              <button onClick={() => submitRating(selectedEvent.id)}>
                Submit Rating
              </button>
            </div>
          )}

          {/* Show existing ratings */}
          {selectedEvent.ratings && selectedEvent.ratings.length > 0 && (
            <div>
              <h3>All Ratings</h3>
              {selectedEvent.ratings.map((r, index) => (
                <div key={index} style={{ border: "1px solid #eee", margin: "10px 0", padding: "10px" }}>
                  <strong>{r.userName}</strong> gave {r.value} ★
                  {r.comment && <p>Comment: {r.comment}</p>}
                  <small>Rated on: {new Date(r.timestamp).toLocaleDateString()}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Agenda;