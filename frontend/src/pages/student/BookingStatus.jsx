import React, { useState, useEffect } from "react";

function BookingStatus() {

const bookingData = [
{
id:1,
eventName:"AI & Future Tech Summit",
eventDate:"2026-04-15",
location:"Main Auditorium",
seat:"A23",
status:"Confirmed"
},
{
id:2,
eventName:"Cyber Security Conference",
eventDate:"2026-04-20",
location:"Conference Hall",
seat:"B12",
status:"Pending"
},
{
id:3,
eventName:"Web Development Bootcamp",
eventDate:"2026-04-25",
location:"Lab 3",
seat:"C08",
status:"Confirmed"
}
];

const [bookings,setBookings]=useState(bookingData);
const [search,setSearch]=useState("");
const [statusFilter,setStatusFilter]=useState("");
const [selectedDate,setSelectedDate]=useState("");
const [selectedEvent,setSelectedEvent]=useState(null);
const [countdown,setCountdown]=useState("");

/* 🔍 Search */

const searchedBookings = bookings.filter(b =>
b.eventName.toLowerCase().includes(search.toLowerCase())
);

/* 🏷 Status Filter */

const statusFiltered = statusFilter
? searchedBookings.filter(b => b.status === statusFilter)
: searchedBookings;

/* 📅 Date Filter */

const filteredBookings = selectedDate
? statusFiltered.filter(b => b.eventDate === selectedDate)
: statusFiltered;

/* ❌ Cancel booking */

const cancelBooking=(id)=>{

const updated=bookings.map(b=>{
if(b.id===id){
return {...b,status:"Cancelled"};
}
return b;
});

setBookings(updated);

};

/* 👁 View details */

const viewDetails=(event)=>{
setSelectedEvent(event);
};

/* ⏳ Countdown Timer */

useEffect(()=>{

if(!selectedEvent) return;

const timer=setInterval(()=>{

const eventDate=new Date(selectedEvent.eventDate);
const now=new Date();

const diff=eventDate-now;

if(diff<=0){
setCountdown("Event Started");
return;
}

const days=Math.floor(diff/(1000*60*60*24));
const hours=Math.floor((diff/(1000*60*60))%24);
const minutes=Math.floor((diff/(1000*60))%60);
const seconds=Math.floor((diff/1000)%60);

setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

},1000);

return ()=>clearInterval(timer);

},[selectedEvent]);

return(

<div>

<h1>Student Booking Status</h1>

<hr/>

{/* 🔍 Search */}

<input
type="text"
placeholder="Search event..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<br/><br/>

{/* 🏷 Status Filter */}

<label>Filter by Status: </label>

<select onChange={(e)=>setStatusFilter(e.target.value)}>

<option value="">All</option>
<option value="Confirmed">Confirmed</option>
<option value="Pending">Pending</option>
<option value="Cancelled">Cancelled</option>

</select>

<br/><br/>

{/* 📅 Date Filter */}

<label>Select Event Date: </label>

<input
type="date"
value={selectedDate}
onChange={(e)=>setSelectedDate(e.target.value)}
/>

<button onClick={()=>setSelectedDate("")}>
Clear
</button>

<hr/>

{/* 📋 Booking Table */}

<table border="1">

<thead>

<tr>
<th>Event Name</th>
<th>Event Date</th>
<th>Location</th>
<th>Seat Number</th>
<th>Registration Status</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{filteredBookings.map((booking)=>(

<tr key={booking.id}>

<td>{booking.eventName}</td>
<td>{booking.eventDate}</td>
<td>{booking.location}</td>
<td>{booking.seat}</td>
<td>{booking.status}</td>

<td>

<button onClick={()=>viewDetails(booking)}>
View
</button>

<button onClick={()=>cancelBooking(booking.id)}>
Cancel
</button>

<button onClick={()=>window.print()}>
Download
</button>

</td>

</tr>

))}

</tbody>

</table>

<hr/>

{/* 👁 Event Details */}

{selectedEvent && (

<div>

<h2>Event Details</h2>

<p><strong>Event Name:</strong> {selectedEvent.eventName}</p>
<p><strong>Date:</strong> {selectedEvent.eventDate}</p>
<p><strong>Location:</strong> {selectedEvent.location}</p>
<p><strong>Seat:</strong> {selectedEvent.seat}</p>
<p><strong>Status:</strong> {selectedEvent.status}</p>

{/* ⏳ Countdown */}

<p><strong>Event Countdown:</strong> {countdown}</p>

{/* 🎟 QR Code */}

<h3>Entry QR Code</h3>

<img
src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedEvent.eventName}-${selectedEvent.seat}`}
alt="QR Code"
/>

</div>

)}

<br/>

{/* Back Button */}

<button onClick={()=>alert("Back to Student Dashboard")}>
Back to Dashboard
</button>

</div>

);

}

export default BookingStatus;