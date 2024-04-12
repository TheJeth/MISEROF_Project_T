import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link } from "react-router-dom";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="card mb-3">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
			<div className="card-body home-card-body">
				<h1 className="home-h1 card-title"><b>MISEROF - EVANGELICAL SOCIAL MISSION THE ROCK OF FAITH</b></h1>
				<div className="card-text home">

					<h2 className="home-h2"><b><br /><br/>
					    <i>
							A GIFT OF LOVE, FOR A GOD OF LOVE! <br/>
							UN GESTE D'AMOUR POUR UN DIEU D'AMOUR!	
						</i>				
					</b></h2>
				</div>
				<p className="card-text"><small className="text-body-secondary">We decided to serve The Lord with all our soul</small></p>
				<Link to="/organisation" className="btn btn-primary">
					Read more»»»
				</Link>
			</div>
		</div>


	);
};
