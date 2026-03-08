import React, { useState, useEffect } from "react";

function EventRegistration() {

const eventData = [
{
id:1,
name:"AI & Future Tech Summit",
date:"2026-04-15",
location:"Main Auditorium",
totalSeats:100,
registered:65,
deadline:"2026-04-10",
description:"Explore AI innovations and future technologies."
},
{
id:2,
name:"Cyber Security Conference",
date:"2026-04-20",
location:"Conference Hall",
totalSeats:80,
registered:40,
deadline:"2026-04-18",
description:"Learn about modern cyber threats and protection."
},
{
id:3,
name:"Web Development Bootcamp",
date:"2026-04-25",
location:"Lab 3",
totalSeats:50,
registered:30,
deadline:"2026-04-20",
description:"Hands-on workshop on modern web development."
}
];

const [events,setEvents] = useState(eventData);
const [search,setSearch] = useState("");
const [selectedDate,setSelectedDate] = useState("");
const [selectedEvent,setSelectedEvent] = useState(null);
const [showForm,setShowForm] = useState(false);
const [currentEvent,setCurrentEvent] = useState(null);
const [message,setMessage] = useState("");
const [notification,setNotification] = useState("");
const [timeLeft,setTimeLeft] = useState({});
const [registrations,setRegistrations] = useState([]);

const [studentName,setStudentName] = useState("");
const [rollNumber,setRollNumber] = useState("");

/* 🔍 Search + Date Filter */

const filteredEvents = events.filter(e => {

const searchMatch = e.name.toLowerCase().includes(search.toLowerCase());

const dateMatch = selectedDate ? e.date === selectedDate : true;

return searchMatch && dateMatch;

});

/* 🔔 Notification */

const showNotification = (text) => {

setNotification(text);

setTimeout(()=>{

setNotification("");

},3000);

};

/* 👁 View Details */

const viewDetails=(event)=>{

setSelectedEvent(event);

};

/* 🎟 Open Registration Form */

const openRegisterForm=(event)=>{

setCurrentEvent(event);

setShowForm(true);

};

/* ✅ Submit Registration */

const submitRegistration = () => {

if(!studentName || !rollNumber){

alert("Please fill all details");

return;

}

const alreadyRegistered = registrations.find(r =>
r.rollNumber === rollNumber && r.eventId === currentEvent.id
);

if(alreadyRegistered){

setMessage("⚠ Student already registered for this event");

showNotification("Already Registered!");

setShowForm(false);

return;

}

const newRegistration = {

eventId:currentEvent.id,

eventName:currentEvent.name,

name:studentName,

rollNumber:rollNumber

};

setRegistrations([...registrations,newRegistration]);

const updated = events.map(e=>{

if(e.id===currentEvent.id){

return {...e,registered:e.registered+1};

}

return e;

});

setEvents(updated);

setMessage("✅ Registration Successful!");

showNotification("🎉 Successfully Registered!");

setShowForm(false);

setStudentName("");

setRollNumber("");

};

/* 📥 Download Ticket */

const downloadTicket=(event)=>{

const registration = registrations.find(r => r.eventId === event.id);

if(!registration){

alert("Register first to download ticket");

return;

}

const ticket = `
EVENT TICKET
-------------------------
Student: ${registration.name}
Roll Number: ${registration.rollNumber}
Event: ${event.name}
Date: ${event.date}
Location: ${event.location}
-------------------------
`;

const blob=new Blob([ticket],{type:"text/plain"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download=event.name+"_ticket.txt";

link.click();

};

/* ⏳ Deadline Countdown */

useEffect(()=>{

const timer=setInterval(()=>{

const updatedTime={};

events.forEach(e=>{

const diff=new Date(e.deadline)-new Date();

if(diff<=0){

updatedTime[e.id]="Closed";

}

else{

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff/(1000*60*60))%24);

const minutes=Math.floor((diff/(1000*60))%60);

updatedTime[e.id]=days+"d "+hours+"h "+minutes+"m";

}

});

setTimeLeft(updatedTime);

},1000);

return ()=>clearInterval(timer);

},[events]);

return(

<div>

<h1>Event Registration</h1>

<hr/>

{/* 🔔 Notification */}

{notification && (

<div style={{background:"lightgreen",padding:"10px"}}>

{notification}

</div>

)}

<br/>

{/* 🔍 Search */}

<input
type="text"
placeholder="Search event..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<br/><br/>

{/* 📅 Calendar Filter */}

<label>Select Date: </label>

<input
type="date"
value={selectedDate}
onChange={(e)=>setSelectedDate(e.target.value)}
/>

<button onClick={()=>setSelectedDate("")}>
Clear
</button>

<hr/>

<table border="1">

<thead>

<tr>

<th>Event</th>

<th>Date</th>

<th>Location</th>

<th>Seats Left</th>

<th>Registered</th>

<th>Deadline</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{filteredEvents.map(event=>(
<tr key={event.id}>
<td>{event.name}</td>
<td>{event.date}</td>
<td>{event.location}</td>
<td>{event.totalSeats-event.registered}</td>
<td>{event.registered}</td>
<td>{timeLeft[event.id]}</td>
<td>
<button onClick={()=>viewDetails(event)}>
View
</button>

<button
onClick={()=>openRegisterForm(event)}
disabled={
event.registered>=event.totalSeats ||
new Date()>new Date(event.deadline)
}
>
Register
</button>
<button onClick={()=>downloadTicket(event)}>
Download Ticket
</button>
</td>
</tr>
))}
</tbody>
</table>
<hr/>
{/* Event Details */}
{selectedEvent && (
<div>
<h2>Event Details</h2>
<p><strong>Name:</strong> {selectedEvent.name}</p>
<p><strong>Date:</strong> {selectedEvent.date}</p>
<p><strong>Location:</strong> {selectedEvent.location}</p>
<p><strong>Description:</strong> {selectedEvent.description}</p>
</div>
)}
{/* Registration Popup */}
{showForm && (
<div style={{
border:"1px solid black",
padding:"20px",
width:"300px",
background:"#f2f2f2"
}}>
<h3>Register for {currentEvent.name}</h3>
<input
type="text"
placeholder="Student Name"
value={studentName}
onChange={(e)=>setStudentName(e.target.value)}
/>
<br/><br/>
<input
type="text"
placeholder="Roll Number"
value={rollNumber}
onChange={(e)=>setRollNumber(e.target.value)}
/>
<br/><br/>
<button onClick={submitRegistration}>
Submit
</button>
<button onClick={()=>setShowForm(false)}>
Cancel
</button>
</div>
)}
{message && <h3>{message}</h3>}
</div>
);
}
export default EventRegistration;