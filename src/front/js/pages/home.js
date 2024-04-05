import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

/*		
		<div className="background">
		
				<div className="text-center mt-5">
					
				</div>
		</div>

		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1>MISEROF</h1>
				<p>
					The presentation of MISEOROF going there
				</p>
  			</div>
		</div>
		*/

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	
		<div class="card mb-3">
			<img src="../img/sky.jpg" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">MISEROF</h5>
				<p class="card-text">
					The presentation of MISEOROF going there
				</p>
				<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
				<a href="headquater.js" class="btn btn-primary">Headquater members here</a>
			</div>
  		</div>
		
		
	);
};
