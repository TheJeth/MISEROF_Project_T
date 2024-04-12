import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/headquater.css"
import { Link } from "react-router-dom";


export const Headquater = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="board">
			<table>
				<tr>
					<th colspan="5"><h3><img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="35px" width="100%" /><center>The board</center></h3></th>
					
				</tr>
				<tr>
					<td>
						<div class="card hq-card" style={{ width: "18rem" }}>
							<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
							<div class="card-body hq-card-body">
								<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Read more»»» </a>
							</div>
						</div>
					</td>

					<td>
						<div class="card hq-card" style={{ width: "18rem" }}>
							<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
							<div class="card-body hq-card-body">
								<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Read more »»»</a>
							</div>
						</div>
					</td>

					<td>
						<div class="card hq-card" style={{ width: "18rem" }}>
							<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
							<div class="card-body hq-card-body">
								<h5 class="hq-h5 card-title">Marie E.P PLAISIME, Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Read more</a>
							</div>
						</div>
					</td>
				</tr>
			</table>
		</div>

	);
};
