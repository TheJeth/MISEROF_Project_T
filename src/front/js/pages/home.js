import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";


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
			<img src="../../img/sky.jpg" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">MISEROF</h5>
				<p class="card-text">
					MISEROFF : Est une Mission indépendante, chrétienne œuvrant dans le domaine social
					 et évangélique dénommée: «Mission Socio-Évangélique Le Roc de la Foi Fondation». 
				</p>
				<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
					<a href="../../pages/single.js" class="btn btn-primary">
						Read more
					</a>
			</div>
  		</div>
		
		
	);
};
