import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";


export const Headquater = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="board">
			<table>
				<tr>
					<th><h3> The board</h3></th>
				</tr>
				<tr>
					<td>
						<div class="card card-headquater" style={{width: "18rem" }}>
							<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Marie E.P PLAISIME, Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</td>

					<td>
						<div class="card" style={{width: "18rem"}}>
							<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Marie E.P PLAISIME, Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</td>

					<td>
						<div class="card" style={{width: "18rem"}}>
							<img src="https://i.ibb.co/FHzf8j1/Jeth-Nov-22.jpg" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Marie E.P PLAISIME, Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
	
	);
};
