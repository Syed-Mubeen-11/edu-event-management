import React from "react";
import Agenda from "./pages/student/Agenda";
import BookingStatus from "./pages/student/BookingStatus";
import EventRegistration from "./pages/student/EventRegistration";
function App() {
  return (
    <div>
      <Agenda />
      <BookingStatus/>
      <EventRegistration/>
    </div>
  );
}

export default App;