import React, { useState } from "react";
import SidebarInstitution from "../../components/SidebarInstitution";
import "../../styles/institution.css";

function AllocateResource() {

  const [event, setEvent] = useState("");
  const [resource, setResource] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Resource allocated successfully!");

    setEvent("");
    setResource("");
    setQuantity("");
  };

  return (
    <div className="institution-layout">

      <SidebarInstitution />

      <div className="content">

        <h2>Allocate Resources</h2>

        <form onSubmit={handleSubmit} className="form">

          <div className="form-group">
            <label>Event Name</label>
            <input
              type="text"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              placeholder="Enter event name"
              required
            />
          </div>

          <div className="form-group">
            <label>Resource Type</label>
            <input
              type="text"
              value={resource}
              onChange={(e) => setResource(e.target.value)}
              placeholder="Projector, Chairs, WiFi"
              required
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
            />
          </div>

          <button className="primary-btn">
            Allocate Resource
          </button>

        </form>

      </div>

    </div>
  );
}

export default AllocateResource;