import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/organisation1.css";
import { Link } from "react-router-dom";


export const Organisation1 = () => {  
	const { store, actions } = useContext(Context);

	return (

		<div class="org-container-fluid h-100">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
			<h3 class="row"><b><center className="text-center">MISEROF - EVANGELICAL SOCIAL MISSION THE ROCK OF FAITH</center></b></h3>
			<p class="text">
				<div className="englishVersion">
					<h4 className="area"><b>AREA OF DEVELOPMENT</b></h4>
					<br />
					<h6>
						<p className="p-organisation1">MISEROFF is a non-profit institution <br/>
							To achieve our goal, we are putting free training sessions such as:<br/>
						</p> 
						<ul>
						 	<li>Online doctrinal Bible courses</li>
							<li>Preaching, Worship and Praise</li>
							<li>Leadership of various services and special services</li>
							<li>Teaching how to behave in the fast: Hospitals, prisons and homes</li>
							<li>Evangelism is: The Great Commission (our target)</li>
							<li>Family and pre-marital counseling</li>
						</ul>
					</h6>
				</div>	
			
		
				<Link to="/organisation" class="btn btn-success">
					Back to the organisation»»»
				</Link>

				<Link to="/headquater" class="btn btn-success">
					Headquater members here»»»
				</Link>
			</p>
				

	</div>

	);
};
