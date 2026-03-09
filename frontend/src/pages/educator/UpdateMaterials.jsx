// frontend/src/pages/educator/UpdateMaterials.jsx

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { FaUpload, FaFile, FaCheckCircle, FaTrash, FaDownload } from "react-icons/fa";
import SidebarEducator from "../../components/SidebarEducator";
import "../../styles/educator.css";

const materialData = [
  { month: "Jan", materials: 5 },
  { month: "Feb", materials: 8 },
  { month: "Mar", materials: 6 },
  { month: "Apr", materials: 9 },
  { month: "May", materials: 7 },
  { month: "Jun", materials: 10 },
];

const categoryData = [
  { name: "PDF", value: 10 },
  { name: "Video", value: 6 },
  { name: "Notes", value: 8 },
  { name: "PPT", value: 4 },
];

const COLORS = ["#8b5cf6", "#10b981", "#f59e0b", "#ef4444"];

function UpdateMaterials() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("PDF");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [recentUploads, setRecentUploads] = useState([
    { id: 1, name: "Introduction to AI.pdf", category: "PDF", date: "2024-04-10", size: "2.5 MB" },
    { id: 2, name: "React Basics.mp4", category: "Video", date: "2024-04-09", size: "45 MB" },
    { id: 3, name: "JavaScript Notes.docx", category: "Notes", date: "2024-04-08", size: "1.2 MB" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    
    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    setTitle("");
    setCategory("PDF");
    setFile(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      setRecentUploads(recentUploads.filter(item => item.id !== id));
    }
  };

  return (
    <div className="educator-layout">
      <SidebarEducator />
      
      <div className="educator-content">
        <div className="page-header">
          <h1 className="page-title">Upload Materials</h1>
          <p className="page-subtitle">Share learning resources with your students</p>
        </div>

        {success && (
          <div className="success-popup">
            <FaCheckCircle /> Material uploaded successfully!
          </div>
        )}

        <div className="materials-grid">
          {/* Upload Form */}
          <div className="upload-card">
            <div className="card-header">
              <FaUpload className="header-icon" />
              <h2>Upload New Material</h2>
            </div>

            <form onSubmit={handleSubmit} className="upload-form">
              <div className="form-group">
                <label>Material Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Introduction to AI"
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="PDF">PDF Document</option>
                  <option value="Video">Video Lecture</option>
                  <option value="Notes">Notes</option>
                  <option value="PPT">Presentation</option>
                </select>
              </div>

              <div className="form-group">
                <label>Upload File</label>
                <div className="file-upload-area">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                    id="file-input"
                  />
                  <label htmlFor="file-input" className="file-label">
                    {file ? file.name : '📁 Choose a file or drag it here'}
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <FaUpload /> Upload Material
              </button>
            </form>
          </div>

          {/* Charts Section */}
          {/* <div className="charts-wrapper">
            <div className="chart-card">
              <h3>Material Categories</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Monthly Uploads</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={materialData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="materials" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div> */}
        </div>

        {/* Recent Uploads */}
        <div className="recent-uploads">
          <h3>Recent Uploads</h3>
          <div className="uploads-table">
            <table>
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUploads.map((upload) => (
                  <tr key={upload.id}>
                    <td>
                      <FaFile className="file-icon" />
                      {upload.name}
                    </td>
                    <td><span className={`category-badge ${upload.category.toLowerCase()}`}>{upload.category}</span></td>
                    <td>{upload.date}</td>
                    <td>{upload.size}</td>
                    <td>
                      <button className="icon-btn download" title="Download"><FaDownload /></button>
                      <button className="icon-btn delete" title="Delete" onClick={() => handleDelete(upload.id)}><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateMaterials;