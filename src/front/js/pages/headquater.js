import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/headquater.css"
import { Link } from "react-router-dom";
//import ReactNative from 'react-native';



export const Headquater = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="board">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />

			<div className="row">
				<h1 class="hq-h1"><center>The Board</center></h1>
			</div>
			<div className="row">
				<div className="col-4">
					<div class="card hq-card">
						<div className="hqImage">
							<img src="https://i.ibb.co/1QNwz6G/Sister-Miserof.jpg" class="card-img-top hqImage" alt="..." style={{
    							//height: windowHeight * 0.25,
    							//width: windowWidth * 0.3,
								// Add any additional styling if needed
							}}/>
						</div>
						<div class="card-body hq-card-body">
							<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Read more»»» </a>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div class="card hq-card" >
					<div className="hqImage">
					<img src="https://i.ibb.co/WHLpJVc/Mrie-Florence-Joassaint.jpg" class="card-img-top hqImage" alt="..." />

					</div>
						<div class="card-body hq-card-body">
							<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Read more »»»</a>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div class="card hq-card " >
						<div className="hqImage"><img src="https://i.ibb.co/bHytsWm/Joceline.jpg" class="card-img-top" alt="..." /></div>
						<div class="card-body hq-card-body">
							<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Read more</a>
						</div>
					</div>
				</div>

			</div>


			<div className="row">
				<h1 class="hq-h1"><center>The Board</center></h1>
			</div>
			<div className="row">
				<div className="col-4">
					<div class="card hq-card">
						<div className="hqImage">
							<img src="https://i.ibb.co/Qvqf609/IMG-20240522-WA0128.jpg" class="card-img-top hqImage" alt="..." />
						</div>
						<div class="card-body hq-card-body">
							<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Read more»»» </a>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div class="card hq-card" >
					<div className="hqImage">
					<img src="https://i.ibb.co/nMytcZr/IMG-20240522-WA0148.jpg" class="card-img-top hqImage" alt="..." />

					</div>
						<div class="card-body hq-card-body">
							<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Read more »»»</a>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div class="card hq-card " >
						<div className="hqImage"><img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." /></div>
						<div class="card-body hq-card-body">
							<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Read more</a>
						</div>
					</div>
				</div>

			</div>



			<div className="row">
				<div className="col-4  col-4-md">
					<Link to="/orgaisation1" class="btn btn-primary">
						Back»»»
					</Link>
				</div>
				<div className="col-4  col-4-md">
					<Link to="/" class="btn btn-primary">
						Home»»»
					</Link>
				</div>
			</div>
		</div>

	);
};
