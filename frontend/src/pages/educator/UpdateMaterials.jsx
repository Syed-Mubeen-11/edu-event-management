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
{ name: "Videos", value: 6 },
{ name: "Notes", value: 8 },
{ name: "PPT", value: 4 },
];

const COLORS = ["#4f46e5","#22c55e","#f97316","#eab308"];

function UpdateMaterials(){

const [showPopup,setShowPopup] = useState(false);

const handleSubmit=(e)=>{
e.preventDefault();
setShowPopup(true);

setTimeout(()=>{
setShowPopup(false);
},3000);
};

return(

<div style={{padding:"30px"}}>

<h2>Update Materials</h2>

{/* SUCCESS POPUP */}

{showPopup && (
<div style={{
position:"fixed",
top:"20px",
right:"20px",
background:"#22c55e",
color:"white",
padding:"15px 20px",
borderRadius:"8px",
boxShadow:"0 5px 15px rgba(0,0,0,0.2)"
}}>
Material uploaded successfully 🎉
</div>
)}

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"40px",
marginTop:"20px"
}}>

{/* FORM */}

<div style={{
background:"#f1f5f9",
padding:"20px",
borderRadius:"10px"
}}>

<h3>Upload Material</h3>

<form onSubmit={handleSubmit}>

<div style={{marginBottom:"15px"}}>
<label>Material Title</label><br/>
<input type="text" required style={{width:"100%",padding:"8px"}}/>
</div>

<div style={{marginBottom:"15px"}}>
<label>Category</label><br/>
<select required style={{width:"100%",padding:"8px"}}>
<option>PDF</option>
<option>Video</option>
<option>Notes</option>
<option>PPT</option>
</select>
</div>

<div style={{marginBottom:"15px"}}>
<label>Upload File</label><br/>
<input type="file" required/>
</div>

<button style={{
background:"#2563eb",
color:"white",
border:"none",
padding:"10px 15px",
borderRadius:"6px",
cursor:"pointer"
}}>
Upload Material
</button>

</form>

</div>

{/* CHARTS */}

<div>

{/* PIE CHART */}

<div style={{marginBottom:"40px"}}>

<h3>Material Categories</h3>

<ResponsiveContainer width="100%" height={280}>
<PieChart>

<Pie
data={categoryData}
dataKey="value"
nameKey="name"
cx="50%"
cy="50%"
outerRadius={100}
label
>

{categoryData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index % COLORS.length]} />
))}

</Pie>

<Tooltip/>
<Legend/>

</PieChart>
</ResponsiveContainer>

</div>

{/* BAR CHART */}

<div>

<h3>Materials Uploaded Per Month</h3>

<ResponsiveContainer width="100%" height={250}>
<BarChart data={materialData}>
<XAxis dataKey="month"/>
<YAxis/>
<Tooltip/>
<Legend/>
<Bar dataKey="materials" fill="#4f46e5"/>
</BarChart>
</ResponsiveContainer>

</div>

</div>

</div>

</div>

)

}

export default UpdateMaterials;