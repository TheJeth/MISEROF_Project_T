import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="card mb-3">
			
			<div className="card-body">
				<h1 className="card-title"><b>MISEROF - EVANGELICAL SOCIAL MISSION THE ROCK OF FAITH</b></h1>
				<div className="card-text">

					<h2><b>UN GESTE D'AMOUR POUR UN DIEU D'AMOUR!</b></h2>
				</div>
				<p className="card-text"><small className="text-body-secondary">We decided to serve The Lord with all our soul</small></p>
				<Link to="/organisation" className="btn btn-primary">
					Read more»»»
				</Link>
			</div>
		</div>


	);
};
