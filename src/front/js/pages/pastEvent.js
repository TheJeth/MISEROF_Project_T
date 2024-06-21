import React, { useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";
//import "../../styles/index.css";
import { Link } from "react-router-dom";

export const PastEvent = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="card mb-3">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
			<div className="card-body home-card-body">
				<table>
				    <tr>
						<td>
							<img src="https://i.ibb.co/br5SmJV/Group.jpg" height="75px" width="100%" />
						</td>
						<td>
							<p>
							1998 à 2003 soit 5 années de travail. 498 maisons ont été visitées et reçues de prière.
							En cas de  besoins urgents: On procède à la collecte de fonds au niveau des membres de la MISEROF
							pour donner en espèce ou en nature aux nécessiteux. 
							</p>
						</td>
					</tr>
				
				</table>
			</div>
		</div>


	);
};
