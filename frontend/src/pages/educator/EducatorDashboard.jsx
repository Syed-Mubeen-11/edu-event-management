import React from "react";
import { Link } from "react-router-dom";
import "./educator.css";
import DashboardCharts from "./DashboardCharts";

function EducatorDashboard() {

return(

<div className="container">

<h2>Educator Dashboard</h2>

<div className="dashboard">

<div className="card">
<Link to="/view-events">
View Events
</Link>
</div>

<div className="card">
<Link to="/update-materials">
Update Materials
</Link>
</div>

</div>

<DashboardCharts />

</div>

)

}

export default EducatorDashboard;