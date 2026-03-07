# EduEvent Management System (Microservices Project)

## Project Overview

EduEvent Management System is a microservices-based web application that allows institutions to manage educational events, allocate resources, and allow students and educators to participate in events.

The system supports three main user roles:

* Institution
* Educator
* Student

Each role has different functionalities and dashboards.

---

# Frontend Technology

* React.js
* Axios
* React Router
* CSS / Tailwind (optional)

---

# Backend Technology (Microservices)

* Spring Boot
* REST APIs
* Microservice Architecture

---

# Repository Structure

frontend/
│
├── public
├── src
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── SidebarStudent.jsx
│   │   ├── SidebarEducator.jsx
│   │   └── SidebarInstitution.jsx
│   │
│   ├── pages
│   │   ├── auth
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── student
│   │   ├── educator
│   │   └── institution
│   │
│   ├── services
│   │   └── axiosInstance.js
│   │
│   ├── routes
│   │   └── AppRoutes.jsx
│   │
│   ├── App.js
│   └── index.js

---

# How to Clone the Project

Clone the repository:

git clone <repository-url>

Go inside the project folder:

cd edu-event-management

---

# Install Dependencies

Move into frontend folder:

cd frontend

Install packages:

npm install

---

# Run the React Application

npm start

The application will run on:

http://localhost:3000

---

# Branch Workflow

Each team member works on their own branch.

Example branches:

login-page
register-page
navbar-component
student-dashboard
educator-dashboard
institution-dashboard

Steps for members:

1. Clone repository
2. Switch to your branch

git checkout your-branch-name

3. Pull latest code from main

git pull origin main

4. Work on your assigned file

5. Push your branch

git add .
git commit -m "Completed feature"
git push origin your-branch-name

6. Create Pull Request to main branch.

---

# Team Rules

* Do not modify other member files
* Always pull latest code before starting work
* Use clear commit messages
* Test your code before pushing

---

# Contributors

Team Members:

* Member 1
* Member 2
* Member 3
* Member 4
* Member 5
* Member 6
* Member 7
* Member 8
* Member 9
* Member 10
* Member 11

---

# Project Goal

To develop a scalable event management platform using microservices architecture that supports institutions, educators, and students efficiently.
