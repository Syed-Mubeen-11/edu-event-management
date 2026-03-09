import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Home Page & Subpages
import Home from "../pages/home/home";
import About from "../pages/home/About";      // About in home folder
import Contact from "../pages/home/Contact";   // Contact in home folder

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Educator Pages
import EducatorDashboard from "../pages/educator/EducatorDashboard";
import UpdateMaterials from "../pages/educator/UpdateMaterials";
import ViewEvents from "../pages/educator/ViewEvents";

// Student Pages
import StudentDashboard from "../pages/student/StudentDashboard";
import Agenda from "../pages/student/Agenda";
import BookingStatus from "../pages/student/BookingStatus";
import EventRegistration from "../pages/student/EventRegistration";

// Institution Pages
import InstitutionDashboard from "../pages/institution/InstitutionDashboard";
import CreateEvent from "../pages/institution/CreateEvent";
import ManageEvents from "../pages/institution/ManageEvents";
import AllocateResource from "../pages/institution/AllocateResource";

// Navbar & Protected Route
import Navbar from "../components/Navbar";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  // Pages where navbar should NOT appear
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {/* Show navbar only on non-auth pages */}
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* PUBLIC ROUTES - These don't require login */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to={`/${user.role}/dashboard`} replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            user ? (
              <Navigate to={`/${user.role}/dashboard`} replace />
            ) : (
              <Register />
            )
          }
        />

        {/* PROTECTED ROUTES - These require login */}
        <Route element={<ProtectedRoute />}>
          {/* Student Routes */}
          <Route 
            path="/student/dashboard" 
            element={
              user?.role === "student" ? (
                <StudentDashboard />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
          <Route 
            path="/student/agenda" 
            element={
              user?.role === "student" ? (
                <Agenda />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
          <Route 
            path="/student/booking-status" 
            element={
              user?.role === "student" ? (
                <BookingStatus />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
          <Route 
            path="/student/event-registration" 
            element={
              user?.role === "student" ? (
                <EventRegistration />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />

          {/* Educator Routes */}
          <Route 
            path="/educator/dashboard" 
            element={
              user?.role === "educator" ? (
                <EducatorDashboard />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
          <Route 
            path="/educator/update-materials" 
            element={
              user?.role === "educator" ? (
                <UpdateMaterials />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
          <Route 
            path="/educator/view-events" 
            element={
              user?.role === "educator" ? (
                <ViewEvents />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />

          {/* Institution Routes */}
          <Route 
            path="/institution/dashboard" 
            element={
              user?.role === "institution" ? (
                <InstitutionDashboard />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
          <Route 
            path="/institution/create-event" 
            element={
              user?.role === "institution" ? (
                <CreateEvent />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
          <Route 
            path="/institution/manage-events" 
            element={
              user?.role === "institution" ? (
                <ManageEvents />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
          <Route 
            path="/institution/allocate-resources" 
            element={
              user?.role === "institution" ? (
                <AllocateResource />
              ) : (
                <Navigate to={`/${user?.role}/dashboard`} replace />
              )
            } 
          />
        </Route>

        {/* 404 - Page Not Found (catch all) */}
        <Route
          path="*"
          element={
            <h2 style={{ 
              textAlign: "center", 
              marginTop: "100px",
              color: "#64748b",
              fontSize: "2rem"
            }}>
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;