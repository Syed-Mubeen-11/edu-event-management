import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/student/StudentDashboard";
import ManageEvents from "./pages/institution/ManageEvents";

function App() {

  return (

    <div>

      <h1>Edu Event Management</h1>

      <Routes>

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/manage-events" element={<ManageEvents />} />

      </Routes>

    </div>

  )

}

export default App