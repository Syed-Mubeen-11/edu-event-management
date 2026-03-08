import {
LineChart,
Line,
BarChart,
Bar,
PieChart,
Pie,
Cell,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer
} from "recharts";

import { FaUserGraduate, FaCalendarAlt, FaBook } from "react-icons/fa";

const data = [
{ month: "Jan", students: 40, events: 24, attendance: 35, courses: 15 },
{ month: "Feb", students: 30, events: 22, attendance: 28, courses: 18 },
{ month: "Mar", students: 20, events: 29, attendance: 19, courses: 12 },
{ month: "Apr", students: 27, events: 20, attendance: 25, courses: 20 },
{ month: "May", students: 18, events: 21, attendance: 16, courses: 14 },
{ month: "Jun", students: 23, events: 25, attendance: 22, courses: 17 },
];

export default function DashboardCharts() {

const totalStudents = 158;
const totalEvents = 141;
const totalCourses = 96;

const pieData = [
{ name: "Students", value: totalStudents },
{ name: "Events", value: totalEvents },
{ name: "Courses", value: totalCourses }
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

return (

<div style={{
marginTop:"30px",
background:"#0f172a",
color:"white",
padding:"30px",
borderRadius:"12px"
}}>

{/* TOP SECTION (Cards + Pie Chart) */}

<div style={{
display:"grid",
gridTemplateColumns:"3fr 1fr",
gap:"30px",
marginBottom:"40px"
}}>

{/* STATISTICS CARDS */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"25px"
}}>

{/* Students */}

<div style={{
background:"linear-gradient(135deg,#6366f1,#4338ca)",
padding:"25px",
borderRadius:"12px",
textAlign:"center",
boxShadow:"0 8px 20px rgba(0,0,0,0.4)",
transition:"0.3s"
}}
onMouseEnter={e=>e.currentTarget.style.transform="translateY(-6px)"}
onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
>
<FaUserGraduate size={35}/>
<h3>Total Students</h3>
<h2>{totalStudents}</h2>
</div>

{/* Events */}

<div style={{
background:"linear-gradient(135deg,#22c55e,#15803d)",
padding:"25px",
borderRadius:"12px",
textAlign:"center",
boxShadow:"0 8px 20px rgba(0,0,0,0.4)",
transition:"0.3s"
}}
onMouseEnter={e=>e.currentTarget.style.transform="translateY(-6px)"}
onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
>
<FaCalendarAlt size={35}/>
<h3>Total Events</h3>
<h2>{totalEvents}</h2>
</div>

{/* Courses */}

<div style={{
background:"linear-gradient(135deg,#f59e0b,#d97706)",
padding:"25px",
borderRadius:"12px",
textAlign:"center",
boxShadow:"0 8px 20px rgba(0,0,0,0.4)",
transition:"0.3s"
}}
onMouseEnter={e=>e.currentTarget.style.transform="translateY(-6px)"}
onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
>
<FaBook size={35}/>
<h3>Total Courses</h3>
<h2>{totalCourses}</h2>
</div>

</div>


{/* PIE CHART */}

<div style={{
background:"#1e293b",
borderRadius:"12px",
padding:"15px",
boxShadow:"0 8px 20px rgba(0,0,0,0.4)"
}}>

<h3 style={{textAlign:"center"}}>Overall Stats</h3>

<ResponsiveContainer width="100%" height={200}>
<PieChart>
<Pie
data={pieData}
cx="50%"
cy="50%"
outerRadius={70}
dataKey="value"
label
>
{pieData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]} />
))}
</Pie>
<Tooltip/>
<Legend/>
</PieChart>
</ResponsiveContainer>

</div>

</div>


{/* CHARTS SECTION */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",
gap:"40px"
}}>

{/* Student Growth */}

<div>
<h3 style={{marginBottom:"10px"}}>Student Growth</h3>
<ResponsiveContainer width="100%" height={250}>
<LineChart data={data}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="month" stroke="white"/>
<YAxis stroke="white"/>
<Tooltip/>
<Legend/>
<Line type="monotone" dataKey="students" stroke="#6366f1" strokeWidth={3}/>
</LineChart>
</ResponsiveContainer>
</div>


{/* Event Participation */}

<div>
<h3 style={{marginBottom:"10px"}}>Event Participation</h3>
<ResponsiveContainer width="100%" height={250}>
<BarChart data={data}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="month" stroke="white"/>
<YAxis stroke="white"/>
<Tooltip/>
<Legend/>
<Bar dataKey="events" fill="#22c55e" radius={[6,6,0,0]}/>
</BarChart>
</ResponsiveContainer>
</div>


{/* Student Attendance */}

<div>
<h3 style={{marginBottom:"10px"}}>Student Attendance</h3>
<ResponsiveContainer width="100%" height={250}>
<LineChart data={data}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="month" stroke="white"/>
<YAxis stroke="white"/>
<Tooltip/>
<Legend/>
<Line type="monotone" dataKey="attendance" stroke="#f97316" strokeWidth={3}/>
</LineChart>
</ResponsiveContainer>
</div>


{/* Course Enrollment */}

<div>
<h3 style={{marginBottom:"10px"}}>Course Enrollment</h3>
<ResponsiveContainer width="100%" height={250}>
<BarChart data={data}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="month" stroke="white"/>
<YAxis stroke="white"/>
<Tooltip/>
<Legend/>
<Bar dataKey="courses" fill="#eab308" radius={[6,6,0,0]}/>
</BarChart>
</ResponsiveContainer>
</div>

</div>

</div>

);
}