import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/organisation.css";
import { Link } from "react-router-dom";


export const Organisation = () => {
	const { store, actions } = useContext(Context);

	return (

		<div class="container-fluid org-container-fluid text-center h-auto">
			<img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" />
			<h1 class="row"><b>MISEROF - EVANGELICAL SOCIAL MISSION THE ROCK OF FAITH</b></h1>
			<p class="text">
				<div className="englishVersion">
					<h4 className="org-h4"><b>EVANGELICAL MISSION</b></h4>
					<br />
					<h6 className="org-h6">
						Our ultimate goal: Seek the lost souls and bring them back to Christ as
						befits: Go, make all nations disciples, baptizing them in the name of the
						Father, the Son, and the Holy Spirit, and teach them to observe all that
						I have commanded you. And behold, I am with you every day until the end of
						the world (Matthew 28: 19:20). To do this, it is our duty to train leaders
						who can spread the gospel of Christ without any pressure, and to send them
						to strategic places: prisons, hospitals, city-to-city travel, visit other
						leaders, to teach them and encourage them to take part in the transformation
						of their communities.
					</h6>
				</div>
				<div className="frenchVersion">
					<h4 className="org-h4"><b>MISSION EVANGELIQUE</b></h4>
					<br />
					<h6 className="org-h6">
						Notre but ultime : Rechercher les âmes égarées et à les ramener à
						Christ comme il convient : Allez, faites de toutes les nations des
						disciples, les baptisant au nom du Père, du Fils et du Saint Esprit,
						et enseignez-leur à observer tout ce que je vous ai prescrit.
						Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde
						(Matthieu 28 : 19.20). Pour ce faire, il est de  notre devoir de
						former des leaders capables de propager l'évangile du Christ sans
						aucune pression, et de les envoyer dans des endroits stratégiques:
						Prisons, hôpitaux,  voyage  de ville en ville, visiter d'autres
						leaders, les enseigner et les encourager à prendre part à la
						transformation de leurs communautés.
					</h6>
				</div>

			</p>
			<div className="row">
				<div className="col">
					<Link to="/" class="btn btn-primary">
						Back»»»
					</Link>
				</div>
				<div className="col">
					<Link to="/organisation1" class="btn btn-primary">
						Read more about the organisation»»»
					</Link>
				</div>
				<div className="col">
					<Link to="/headquater" class="btn btn-success">
						Headquater members here»»»
					</Link>
				
				</div>
			</div>
		</div>


	);
};
