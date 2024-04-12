import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/organisation1.css";
import { Link } from "react-router-dom";


export const Organisation1 = () => {
	const { store, actions } = useContext(Context);

	return (

		<div class="container-fluid">

			<h1 class="row"><b>MISEROF - EVANGELICAL SOCIAL MISSION THE ROCK OF FAITH</b></h1>
			<p class="text">
				<div className="englishVersion">
					<h4><b>AREA OF DEVELOPMENT</b></h4>
					<br />
					<h6>
						MISEROFF is a non-profit institution <br/>
						To achieve our goal, we are putting free training sessions such as:<br/>
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
				
			</p>

			<Link to="/organisation" class="btn btn-primary">
				Back to the organisation»»»
			</Link>
			<Link to="/headquater" class="btn btn-success">
				Headquater members here»»»
			</Link>

		</div>

	);
};
