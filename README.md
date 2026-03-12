# EduEvent Management System – Frontend
## 🚀 Live Demo

You can view the deployed application here:
https://edu-event-management.vercel.app/
## Project Overview

EduEvent Management System is a web application designed to manage educational events.
It allows institutions to create events, educators to manage materials, and students to register for events.

The application follows a **role-based system** with three main users:

* Institution
* Educator
* Student

This repository contains the **Frontend application built using React + Vite**.

---

# Technologies Used

Frontend Framework

* React

Build Tool

* Vite

Libraries

* React Router (for routing)
* Axios (for API communication)

Styling

* Global CSS
* Component-level CSS

---

# Project Setup Guide

## 1. Clone the Repository

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/your-username/edu-event-management.git
```
clone the repository only once when you are beginning the project
---

## 2. Enter the Project Directory

```bash
cd edu-event-management
```

---

## 3. Switch to Your Assigned Branch

Each team member must work in their own branch.

```bash
git checkout your-branch-name
```

Example:

```bash
git checkout 5F3(try to place here your branch name)
```

---

## 4. Pull Latest Code from Main Branch

Before starting work always run:

```bash
git pull origin main
```

---

## 5. Install Dependencies

Go to frontend folder:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

---

## 6. Run the React Application

```bash
npm run dev
```

Application will run at:

```
http://localhost:5173
```

---

# Repository Structure

```
edu-event-management
│
├── README.md
│
└── frontend
    │
    ├── index.html
    ├── package.json
    ├── vite.config.js
    │
    └── src
        │
        ├── components
        ├── pages
        ├── services
        ├── routes
        ├── styles
        │
        ├── App.jsx
        └── main.jsx
```

---

# Detailed Frontend Folder Structure

```
src
│
├── components
│
├── pages
│   ├── auth
│   ├── student
│   ├── educator
│   └── institution
│
├── services
├── routes
├── styles
```

---

# Components Folder

Contains reusable UI components.

```
components
│
├── Navbar.jsx
├── SidebarStudent.jsx
├── SidebarEducator.jsx
└── SidebarInstitution.jsx
```

---

# Component Specifications

## Navbar Component

File:

```
src/components/Navbar.jsx
```

Required elements:

* Application logo/title
* Navigation links(Home About Contact)
* User profile icon
* Logout button
* Notification icon (optional)

Layout example:

```
---------------------------------
| Logo | Menu | Profile | Logout |
---------------------------------
```

---

## SidebarStudent

File:

```
src/components/SidebarStudent.jsx
```

Elements:

* Dashboard
* Register Event
* Booking Status
* Agenda
* Logout

---

## SidebarEducator

File:

```
src/components/SidebarEducator.jsx
```

Elements:

* Dashboard
* View Events
* Upload Materials
* Logout

---

## SidebarInstitution

File:

```
src/components/SidebarInstitution.jsx
```

Elements:

* Dashboard
* Create Event
* Manage Events
* Allocate Resources
* Logout

---

# Pages Folder

Contains page-level components grouped by user role.

---

# Auth Pages

## Login Page

Elements required:

* Page title (Login)
* Email input
* Password input
* Login button
* Link to Register page

---

## Register Page

Elements:

* Name input
* Email input
* Password input
* Confirm Password
* Role selection

Roles:

* Student

* Educator

* Institution

* Register button

Link to go back to the login page

---

# Student Pages

Files may include:

```
StudentDashboard.jsx
EventRegistration.jsx
BookingStatus.jsx
Agenda.jsx
```

---

## Event Registration Page

Elements:

* List of available events
* Event details
* Register button
* Confirmation message

---

## Booking Status Page

Elements:

* Event name
* Registration status
* Event date

---

# Educator Pages

Location:

```
src/pages/educator
```

Example files:

```
EducatorDashboard.jsx
ViewEvents.jsx
UpdateMaterials.jsx
```

---

## Update Materials Page

Elements:

* Event selection
* File upload
* Material description
* Update button

---

# Institution Pages

Location:

```
src/pages/institution
```

Files:

```
InstitutionDashboard.jsx
CreateEvent.jsx
ManageEvents.jsx
AllocateResources.jsx
```

---

## Create Event Page

Elements:

* Event name
* Event description
* Event date
* Resource allocation
* Create button

---

# Services Folder

Location:

```
src/services
```

Purpose:

Contains API service functions.

Example:

```
axiosInstance.js
```

Axios will be used for communication with backend microservices.

---

# Routes Folder

Location:

```
src/routes
```

File:

```
AppRoutes.jsx
```

Purpose:

Defines role-based routing for:

* Student
* Educator
* Institution

---

# Styles Folder

Location:

```
src/styles
```

Files:

```
global.css
```

Purpose:

Contains global styles applied to the entire application.

---

# Git Workflow for Team Members
After editing your files you need to add the changes
## Step 1: Add Changes

```bash
git add .
```

---

## Step 2: Commit Changes

```bash
git commit -m "Added login page UI"(ex: try to commit the message that you have done)
```

---

## Step 3: Push to Your Branch

```bash
git push origin your-branch-name
```

Example:

```bash
git push origin 5F3
```

---

# Creating a Pull Request

1. Go to GitHub repository
2. Select your branch
3. Click **Create Pull Request**
4. Merge into **main branch**

---

# Team Rules

To avoid conflicts follow these rules:

* Work only on your assigned file
* Do not modify other member files
* Always pull latest code before starting work
* Use meaningful commit messages
* Do not push directly to main branch

