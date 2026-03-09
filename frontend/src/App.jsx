import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/student/StudentDashboard";
import ManageEvents from "./pages/institution/ManageEvents";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/manage-events" element={<ManageEvents />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;