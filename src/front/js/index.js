//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application

ReactDOM.render(<Layout />, document.querySelector("#app"));

//the below code fragment can be found in for dates:
document.getElementById('datePicker').value = new Date().loadDateVaue(); 
