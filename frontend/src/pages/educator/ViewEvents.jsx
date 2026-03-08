import React, { useState } from "react";
import "./educator.css";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";

function ViewEvents(){

const [search,setSearch] = useState("");

const events=[
{id:1,name:"AI Workshop",date:"10 June 2026"},
{id:2,name:"Web Development",date:"15 June 2026"},
{id:3,name:"Hackathon",date:"20 June 2026"}
];

const filteredEvents = events.filter(event =>
event.name.toLowerCase().includes(search.toLowerCase())
);

return(

<div style={{
background:"linear-gradient(135deg,#e0f2fe,#eef2ff)",
minHeight:"100vh",
padding:"30px"
}}>

<h2 style={{
marginBottom:"25px",
color:"#1e3a8a"
}}>
Available Events
</h2>

{/* Search */}

<div style={{
marginBottom:"30px",
display:"flex",
alignItems:"center",
gap:"10px"
}}>

<FaSearch style={{color:"#555"}}/>

<input
type="text"
placeholder="Search events..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc",
width:"260px"
}}
/>

</div>

{/* Event Cards */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}}>

{filteredEvents.map((event)=>(

<div
key={event.id}
style={{
background:"#ffffff",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 6px 15px rgba(0,0,0,0.15)",
transition:"all 0.3s",
cursor:"pointer"
}}
onMouseEnter={e=>{
e.currentTarget.style.transform="translateY(-8px)";
e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.2)";
}}
onMouseLeave={e=>{
e.currentTarget.style.transform="translateY(0)";
e.currentTarget.style.boxShadow="0 6px 15px rgba(0,0,0,0.15)";
}}
>

<h3 style={{
marginBottom:"10px",
color:"#2563eb"
}}>
{event.name}
</h3>

<p style={{
display:"flex",
alignItems:"center",
gap:"8px",
color:"#444"
}}>
<FaCalendarAlt/>
{event.date}
</p>

</div>

))}

</div>

</div>

)

}

export default ViewEvents;