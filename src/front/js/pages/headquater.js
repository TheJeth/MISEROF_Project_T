import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Link} from "react-router-dom";

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

		/*

		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1>MISEROF</h1>
				<p>
					The presentation of MISEOROF going there
				</p>
			</div>
		</div>
	
			<div class="container-fluid">
  				...
			</div>
		*/
export const Headquater = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<div className="container d-flex">
				<h3> The board</h3>
			<div class="card" style="width: 18rem;">
				<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Marie E.P PLAISIME, Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
			</div>

			<div class="card" style="width: 18rem;">
				<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Josué PIERRE, Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
			</div>

			<div class="card" style="width: 18rem;">
				<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">Dieuline SIMONOS, Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
			</div>

		</div>
		
	);
};
