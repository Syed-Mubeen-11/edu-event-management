import React, { useState } from "react";
import SidebarInstitution from "../../components/SidebarInstitution";

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
    <div style={{ display: "flex" }}>
      <SidebarInstitution />

      <div style={{ padding: "30px", flex: 1 }}>
        <h1>Allocate Resources</h1>
        <p>Assign resources to events.</p>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "450px",
            marginTop: "25px",
            background: "#ffffff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0px 3px 8px rgba(0,0,0,0.1)"
          }}
        >
          <div style={fieldStyle}>
            <label>Event Name</label>
            <input
              type="text"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              required
            />
          </div>

          <div style={fieldStyle}>
            <label>Resource Type</label>
            <input
              type="text"
              value={resource}
              onChange={(e) => setResource(e.target.value)}
              required
            />
          </div>

          <div style={fieldStyle}>
            <label>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <button style={buttonStyle}>Allocate Resource</button>
        </form>
      </div>
    </div>
  );
}

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "15px"
};

const buttonStyle = {
  background: "#2563eb",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default AllocateResource;